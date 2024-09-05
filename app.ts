import { google } from "googleapis";
interface Video {
  videoId: string;
  title: string;
  thumbnailUrl: URL;
}

async function searchVideos(queryString: string): Promise<Video[]> {
  const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
  });

  const res = await youtube.search.list({
    part: ["snippet"],
    q: queryString,
    type: ["video"],
  });

  if (!res.data.items) {
    return [] as Video[];
  }

  const result = res.data.items.map((item) => {
    return {
      videoId: item.id?.videoId || "",
      title: item.snippet?.title || "",
      thumbnailUrl: item.snippet?.thumbnails?.high?.url
        ? new URL(item.snippet?.thumbnails?.high?.url)
        : new URL(""),
    };
  });

  return result;
}
searchVideos("อย่าปล่อยมือ").then((x) => {
  console.log(x);
});
