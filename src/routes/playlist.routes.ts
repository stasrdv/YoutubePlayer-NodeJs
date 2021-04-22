import { Router } from 'express';
import { getYoutubeVideoItem } from '../store/http.helper';
import { YouTubeVideoController } from '../store/controllers/playlist.controller';



const playlistRouter = Router();
const playlistController = new YouTubeVideoController();


playlistRouter.get('/getVideos', (req, res) => {
    playlistController.getVideoItems(res);
});

playlistRouter.post('/insertVideo', (req, res, checkBody) => {
    if (!req.body) {
        return res.status(400).json({
            status: 'Error',
            error: 'Request body cannot be empty',
        });
    }
    const videoId = req.body.videoId;
    getYoutubeVideoItem(videoId).then(videoItem => playlistController.saveNewVideoID(videoItem, res))
        .catch(err => {
            return res.status(400).json({
                status: 'Error',
                error: err,
            });
        });
});



export { playlistRouter };





