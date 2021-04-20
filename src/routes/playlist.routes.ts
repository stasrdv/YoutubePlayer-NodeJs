import { Router } from 'express';
import { getYoutubeVideoInfo } from '../store/http.helper';
import { YouTubeVideoController } from '../store/controllers/playlist.controller';
import * as moment from 'moment';
import 'moment-duration-format';
import { YoutubeVideoItem } from '../store/models/video-item.dto';
import { YoutubeApiResponse } from '../store/models/youtube-api-response';

const playlistRouter = Router();
const playlistController = new YouTubeVideoController();


playlistRouter.get('/getVideos', function (req, res) {
    playlistController.getVideoItems(res);
});

playlistRouter.post('/insertVideo', function (req, res) {
    if (!req.body) {
        return res.status(400).json({
            status: 'error',
            error: 'req body cannot be empty',
        });
    }
    const videoId = req.body.videoId;
    getYoutubeVideoInfo(videoId).then((response: { data: YoutubeApiResponse }) => {
        response.data['items'].map((item) => {
            const duration = moment.duration(item.contentDetails.duration).format('HH:mm:ss', { trim: false });
            const videoItem: YoutubeVideoItem = {
                videoId: videoId,
                title: item.snippet.title,
                duration: duration

            }
            playlistController.saveNewVideoID(videoItem, res);
        });
    })
        .catch((error: any) => console.log(error));
});


export { playlistRouter };





