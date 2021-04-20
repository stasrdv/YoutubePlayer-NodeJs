import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const PlaylistSchema = new Schema({
  videoId: {
    type: String
  },
  title:{
    type: String

  },
  duration:{
    type:String
  }

});