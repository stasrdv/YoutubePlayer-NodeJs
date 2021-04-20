import * as mongoose from 'mongoose';
import { PlaylistSchema } from '../schemas/playlist.scehma';
import {  Response } from 'express';
import { EMIT_ITEM } from '../../constants/constants';
import { emitSocketEvent } from '../../utils/socket.utils';
import { YoutubeVideoItem } from '../models/video-item.dto';


const PlayListsModel = mongoose.model('YouTubeIds', PlaylistSchema);

export class YouTubeVideoController {

    public saveNewVideoID(videoItem: YoutubeVideoItem, res: Response) {
        let playlistItem = new PlayListsModel(videoItem);
        playlistItem.save((err, item) => {
            if (err) {
                res.status(400)
                return res.send(err);
            }
            emitSocketEvent(EMIT_ITEM, videoItem);
            res.json(videoItem);
            res.status(201)
        });
    }

    public getVideoItems(res: Response) {
        PlayListsModel.find({}, null, (err, totalRows) => {
            if (err) {
                res.send(err);
                res.status(400)
            }
            res.json(totalRows);
        })
    }
}