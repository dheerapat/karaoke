import {google, youtube_v3} from 'googleapis';
import {singleton} from 'tsyringe';

export interface IYouTubeClient {
  client: youtube_v3.Youtube;
}

@singleton()
export class YouTubeClient {
  public client: youtube_v3.Youtube;

  constructor() {
    const apiKey = process.env.YOUTUBE_API_KEY ?? '';

    if (!apiKey) {
      const error = new Error('API key not provided');
      console.error(error.message);
      throw error;
    }

    this.client = google.youtube({
      version: 'v3',
      auth: apiKey,
    });
  }
}
