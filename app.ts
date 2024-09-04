import { google } from "googleapis";

// initialize the Youtube API library
const youtube = google.youtube({
  version: 'v3',
  auth: ''
});

// a very simple example of searching for youtube videos
async function getVideos() {
  const res = await youtube.search.list({
    part: ['snippet'],
    q: 'อย่าปล่อยมือ',
    type: ['video'],
    // maxResults: maxResultsPerChannel,
    });
  res.data.items?.forEach(item => {
    console.log(item.id)
    console.log(item.snippet)
  })
}

getVideos()
