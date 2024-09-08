import { YouTubeVideoSearcher } from "./app";

const searcher = new YouTubeVideoSearcher(process.env.YOUTUBE_API_KEY ?? '')

searcher.searchVideo('karaoke').then(res => {
  console.log(res)
})
