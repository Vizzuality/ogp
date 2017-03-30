This module creates an input filter for Drupal that automatically transforms 
links to tweets such as 
https://twitter.com/lightsky_design/status/378242911420575744 into an Embedded 
Tweet.

Configuration

In order to configure this module, follow these steps:

Enable the Module
Go to Configuration -> Text Formats
Click Edit next to the text format you wish to enable embedded tweets for
Under "Enabled Filters" select "Twitter Embed Filter"
Change the order of the filter so that "Twitter Embed Filter" appears above 
"Convert URLs Into Links"
Embedding Tweets

Tweet Embed utilizes a BBCode style tag in order to embed tweets into your 
content. The default format is (on one line):

[tweet_embed]
https://twitter.com/lightsky_design/status/378242911420575744
[/tweet_embed]

You may also apply a variety of options to your tweets. A list of options that 
can be passed can be found here. 

Only the following options are currently supported.

maxwidth
hide_media
hide_thread
align
lang

In order to pass in the options add the option and the value within the 
"[tweet_embed]" block.  For example, to display a tweet in french, and align it 
in the center of the page, insert the following snippet into your content block 
(Note: This should be all on one line):

[tweet_embed lang="fr" align="center"]
https://twitter.com/lightsky_design/status/378242911420575744[/tweet_embed]

Getting Tweet Embed URL

In order to get the tweet URL, perform the following steps:

When viewing the tweet you wish to embed, click "Expand"
At the bottom of the tweet, click "Details" next to the timestamp.
Copy the URL in the address bar
Sponsorship

Development of this module is sponsored by LightSky (http://www.lightsky.com).
