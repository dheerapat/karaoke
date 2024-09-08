import {google, youtube_v3} from 'googleapis';

export interface Video {
  videoUrl: URL;
  title: string;
  thumbnailUrl: URL;
}

export interface IVideoSearcher {
  searchVideo(queryString: string): Promise<Video[]>;
}

export class YouTubeVideoSearcher implements IVideoSearcher {
  private client: youtube_v3.Youtube;

  constructor(apiKey: string) {
    this.client = google.youtube({
      version: 'v3',
      auth: apiKey,
    });
  }

  public async searchVideo(queryString: string): Promise<Video[]> {
    try {
      const res = await this.client.search.list({
        part: ['snippet'],
        q: queryString,
        type: ['video'],
      });

      const result = this.parseSearchResult(res.data.items);
      return result;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return [];
    }
  }

  private parseSearchResult(
    items: youtube_v3.Schema$SearchResult[] | undefined
  ): Video[] {
    if (!items) {
      return [];
    }

    return items.map(item => {
      return {
        videoUrl: this.createVideoUrl(item.id?.videoId),
        title: item.snippet?.title || '',
        thumbnailUrl: this.createThumbnailUrl(
          item.snippet?.thumbnails?.high?.url
        ),
      };
    });
  }

  private createThumbnailUrl(urlString: string | null | undefined): URL {
    return urlString ? new URL(urlString) : new URL('https://i.ytimg.com');
  }

  private createVideoUrl(videoId: string | null | undefined): URL {
    return videoId
      ? new URL(`https://www.youtube.com/watch?v=${videoId}`)
      : new URL('https://www.youtube.com');
  }
}
