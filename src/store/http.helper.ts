const axios = require('axios');

export const getYoutubeVideoInfo = (videoId: string) => {
    const queryUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${videoId}&key=${process.env.YT_API_KEY}`
    return axios.get(queryUrl);
}