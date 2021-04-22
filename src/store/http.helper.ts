import moment from "moment";
import { YoutubeVideoItem } from "./models/video-item.dto";
import { YoutubeApiResponse } from "./models/youtube-api-response";
import 'moment-duration-format';
import { YT_API_KEY } from "../utils/config";

const axios = require('axios');

const getYoutubeVideoInfo = (videoId: string) => {
    const queryUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${videoId}&key=${YT_API_KEY}`
    return axios.get(queryUrl);
}


export const getYoutubeVideoItem = (videoId: string): Promise<YoutubeVideoItem> => {
    return new Promise((resolve, reject) => {
        getYoutubeVideoInfo(videoId).then((response: { data: YoutubeApiResponse }) => {
            response.data['items'].map((item) => {
                const duration = moment.duration(item.contentDetails.duration).format('HH:mm:ss', { trim: false });
                const videoItem: YoutubeVideoItem = {
                    videoId: videoId,
                    title: item.snippet.title,
                    duration: duration
                }
                resolve(videoItem);
            })
        }).catch((error: any) => reject(error))
    });
}


