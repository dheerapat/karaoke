# youtube-karaoke

> This project is not affiliated with, endorsed by, or in any way officially connected to YouTube or Alphabet Inc.

This project is for those who love in music!

This Node application can be used to fetch YouTube video's data
from certain channels (in this case, a karaoke channel).

Under the hood this app is working as a YouTube Data API client.
No scraping, No violation of any YouTube community guidelines and policies.

Since this app is utilize YouTube API for getting data it needs,
you can only perform search operation for around 100 searchs per day before
YouTube limit your action. (Each search consume 100 quotas from your 10,000 quotas pool.)

## How to run this project

### Prerequisite

You need to have Google cloud account and YouTube Data API enabled.
Also don't forget to copy your API key from credentials tab in Google cloud console.

### Step to run the project

```bash
# clone the project
git clone https://github.com/dheerapat/youtube-karaoke.git
cd youtube-karaoke

# create .env file
cp .env.example .env
# after this step, modify .env file and assign the value to be yours

# install packages that necessary to run the project
npm install

# in src/index.ts you may want to search other song than mine, enter string as a parameter for searcher.searchVideo()
npm run dev
```
