import 'reflect-metadata';
import {container} from 'tsyringe';
import {YouTubeKaraokeVideoSearcher} from './utils/video-searcher';

const searcher = container.resolve(YouTubeKaraokeVideoSearcher);

searcher.searchVideo('จักรยานสีแดง').then(res => {
  console.log(res);
});
