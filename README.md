A template for a Twitter bot that retweets specific hashtags
=============================================================

Twitter [frowns upon](https://support.twitter.com/articles/76915) bots that automatically retweet people who don't follow your bot, but let's say you'd just really like to keep track of some interesting hashtags.

Well, there's one little trick to get around this: make your bot private.

![Tweetin'](https://cdn.gomix.com/4032b241-bff8-473e-aa6b-eb0c92a4bd06%2Ftweeting.gif)


## A quick tutorial

1. First, create a new Twitter account and a new Twitter app. ([This tutorial](https://botwiki.org/tutorials/how-to-create-a-twitter-app/) shows how.)
2. Go to your bot's [Privacy and safety settings](https://twitter.com/settings/safety) and check **Protect my Tweets** to make your bot private. This will prevent people who don't follow your bot from getting notified when it retweets them.
![Private account](https://cdn.glitch.com/b5a6d436-d8a7-44ca-b3aa-305375368a38%2Fprotected-tweets.PNG?1495634675486)
3. Update the `.env` file with your Twitter API key/secrets. (The tutorial above explains how to get these.) and your bot's username (this is to avoid retweeting yourself).
4. Set up a free service ([Uptime Robot](https://uptimerobot.com/), [cron-job.org](https://cron-job.org/en/), or [others](https://www.google.com/search?q=free+web+cron)) to wake up your bot every 25+ minutes and tweet. Use `https://YOURPROJECTNAME.glitch.me/tweet` as a URL to which to send the HTTP request.

You can find more [tutorials](https://botwiki.org/tutorials/twitterbots/#tutorials-nodejs) and [open source Twitter bots](https://botwiki.org/tag/twitter+bot+opensource+nodejs/) on [Botwiki](https://botwiki.org).

And be sure to join the [Botmakers](https://botmakers.org/) online hangout and [submit your bot to Botwiki](https://botwiki.org/submit-your-bot) :-)

**Powered by [Glitch](https://glitch.com)**

**Bot On  [Abuja Twitter Bot](https://twitter.com/abuja_bot)**

\ ゜o゜)ノ
# Twitter-bot
