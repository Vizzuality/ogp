
<?php
require_once('TwitterAPIExchange.php');
mb_internal_encoding("UTF-8");
function MakeStatusLinks($status) {
  $TextLength=mb_strlen($status['text']);

  for ($i=0;$i<$TextLength;$i++)
  {
    $ch=mb_substr($status['text'],$i,1); if ($ch<>"\n") $ChAr[]=$ch; else $ChAr[]="\n<br/>";
  }

  if (isset($status['entities']['user_mentions']))
   foreach ($status['entities']['user_mentions'] as $entity)
   {
     $ChAr[$entity['indices'][0]] = "<a href='https://twitter.com/".$entity['screen_name']."'>".$ChAr[$entity['indices'][0]];
     $ChAr[$entity['indices'][1]-1].="</a>";
   }

  if (isset($status['entities']['hashtags']))
   foreach ($status['entities']['hashtags'] as $entity)
   {
     $ChAr[$entity['indices'][0]] = "<a href='https://twitter.com/search?q=%23".$entity['text']."'>".$ChAr[$entity['indices'][0]];
     $ChAr[$entity['indices'][1]-1] .= "</a>";
   }

  if (isset($status['entities']['urls']))
   foreach ($status['entities']['urls'] as $entity)
   {
     $ChAr[$entity['indices'][0]] = "<a href='".$entity['expanded_url']."'>".$entity['display_url']."</a>";
     for ($i=$entity['indices'][0]+1;$i<$entity['indices'][1];$i++) $ChAr[$i]='';
   }

  if (isset($status['entities']['media']))
   foreach ($status['entities']['media'] as $entity)
   {
     $ChAr[$entity['indices'][0]] = "<a href='".$entity['expanded_url']."'>".$entity['display_url']."</a>";
     for ($i=$entity['indices'][0]+1;$i<$entity['indices'][1];$i++) $ChAr[$i]='';
   }

  return implode('', $ChAr); // HTML tweet.
}
?>

<?php

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
  'oauth_access_token' => "321575853-p2XuTSQqcwWO9M8O5LaYXprQGyNQp7IF3VNKZIDk",
  'oauth_access_token_secret' => "Wdgi3SFhya1GpSOwwM0NxtoaE7yRJEspcIU5cw4xO5x5a",
  'consumer_key' => "OC248IzdLn6JjSXbOTmzJ2L2n",
  'consumer_secret' => "BqCQXPDfDidMvHf4eQKYVjU1CxvFtaBwMuc9swcqEaHaLeERVe"
);

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=opengovpart&count=1';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$response = $twitter->setGetfield($getfield)
  ->buildOauth($url, $requestMethod)
  ->performRequest();

  $value = json_decode($response, true)[0];
  $text = MakeStatusLinks($value);

?>
<div class="c-social-block -tweet" id="tweet-block">
  <div>
    <span class="text -social-title">Open Gov Partnership</span>
    <span class="tweet-text">
      <?php print $text ?>
    </span>
  </div>
</div>
