
import mongoose from "mongoose";
import { DB_USER, DB_PASS } from "./config";

export const dbConnector = async () => {
  const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.1hi6l.mongodb.net/<YoutubePlaylist>?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database');
  } catch (e) {
    console.log(e);
  }
}