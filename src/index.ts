import {YouTubeKaraokeVideoSearcher} from './app';

const searcher = new YouTubeKaraokeVideoSearcher(
  process.env.YOUTUBE_API_KEY ?? ''
);

searcher.searchVideo('โจอี้').then(res => {
  console.log(res);
});
