<?php
/**
 * @file
 * ogp_media.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function ogp_media_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'default_oembed_provider';
  $strongarm->value = array(
    'vimeo' => FALSE,
    'youtube' => TRUE,
    'scribd' => FALSE,
  );
  $export['default_oembed_provider'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_file__image';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => TRUE,
      ),
      'preview' => array(
        'custom_settings' => TRUE,
      ),
      'rss' => array(
        'custom_settings' => TRUE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => FALSE,
      ),
      'ogp_large_image' => array(
        'custom_settings' => TRUE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(),
      'display' => array(
        'file' => array(
          'default' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'full' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'rss' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'ogp_large_image' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
        ),
      ),
    ),
  );
  $export['field_bundle_settings_file__image'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_file__video';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => TRUE,
      ),
      'preview' => array(
        'custom_settings' => TRUE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(),
      'display' => array(
        'file' => array(
          'default' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'full' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
        ),
      ),
    ),
  );
  $export['field_bundle_settings_file__video'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'oembedembedly_api_key';
  $strongarm->value = '29c5b3d712aa48e48a96601482d670f6';
  $export['oembedembedly_api_key'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'oembedembedly_default';
  $strongarm->value = '1';
  $export['oembedembedly_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'oembedembedly_providers';
  $strongarm->value = array(
    'youtube' => 0,
    'justintv' => 1,
    'twitchtv' => 1,
    'ustream' => 1,
    'qik' => 1,
    'revision3' => 1,
    'dailymotion' => 1,
    'collegehumor' => 1,
    'telly' => 1,
    'break' => 1,
    'myspacevideos' => 1,
    'metacafe' => 1,
    'bliptv' => 1,
    'googlevideo' => 1,
    'yahoovideo' => 1,
    'viddler' => 1,
    'liveleak' => 1,
    'animoto' => 1,
    'dotsub' => 1,
    'overstream' => 1,
    'livestream' => 1,
    'worldstarhiphop' => 1,
    'bambuser' => 1,
    'schooltube' => 1,
    'bigthink' => 1,
    'jibjab' => 1,
    'xtranormal' => 1,
    'socialcam' => 1,
    'youku' => 1,
    'snotr' => 1,
    'clipfish' => 1,
    'myvideo' => 1,
    'vzaar' => 1,
    'coub' => 1,
    'streamio' => 1,
    'vine' => 1,
    'viddy' => 1,
    'tudou' => 1,
    'mixbit' => 1,
    'sproutvideo' => 1,
    'minotovideo' => 1,
    'brainshark' => 1,
    'whitehouse' => 1,
    'hulu' => 1,
    'crackle' => 1,
    'funnyordie' => 1,
    'vimeo' => 0,
    'ted' => 1,
    'nfb' => 1,
    'thedailyshow' => 1,
    'yahoomovies' => 1,
    'colbertnation' => 1,
    'comedycentral' => 1,
    'theonion' => 1,
    'wordpresstv' => 1,
    'traileraddict' => 1,
    'escapistmagazine' => 1,
    'trailerspy' => 1,
    'foratv' => 1,
    'spike' => 1,
    'gametrailers' => 1,
    'koldcasttv' => 1,
    'mixergy' => 1,
    'pbsvideo' => 1,
    'zapiks' => 1,
    'trutv' => 1,
    'nzonscreen' => 1,
    'wistia' => 1,
    'confreaks' => 1,
    'allthingsd' => 1,
    'nymag' => 1,
    'aniboom' => 1,
    'grindtv' => 1,
    'ifoodtv' => 1,
    'logotv' => 1,
    'lonelyplanet' => 1,
    'streetfire' => 1,
    'sciencestage' => 1,
    'brightcove' => 1,
    'wirewax' => 1,
    'canalplus' => 1,
    'vevo' => 1,
    'pixorial' => 1,
    'spreecast' => 1,
    'showme' => 1,
    'looplogic' => 1,
    'onaol' => 1,
    'videodetective' => 1,
    'khanacademy' => 1,
    'vidyard' => 1,
    'veoh' => 1,
    'univision' => 1,
    'godtube' => 1,
    'mediamatters' => 1,
    'clikthrough' => 1,
    'clipsyndicate' => 1,
    'srf' => 1,
    'mpora' => 1,
    'espn' => 1,
    'abcnews' => 1,
    'washingtonpost' => 1,
    'boston' => 1,
    'facebook' => 1,
    'cnbc' => 1,
    'cbsnews' => 1,
    'googleplus' => 1,
    'cnn' => 1,
    'cnnedition' => 1,
    'cnnmoney' => 1,
    'msnbc' => 1,
    'nbcnews' => 1,
    'foxsports' => 1,
    'globalpost' => 1,
    'guardian' => 1,
    'bravotv' => 1,
    'nationalgeographic' => 1,
    'discovery' => 1,
    'forbes' => 1,
    'distrify' => 1,
    'foxnews' => 1,
    'foxbusiness' => 1,
    'reuters' => 1,
    'huffpost' => 1,
    'github' => 1,
    'crunchbase' => 1,
    'slideshare' => 1,
    'scribd' => 1,
    'screenr' => 1,
    'polldaddy' => 1,
    'howcast' => 1,
    'screencast' => 1,
    'issuu' => 1,
    'kickstarter' => 1,
    'scrapblog' => 1,
    'foursquare' => 1,
    'sliderocket' => 1,
    'chartly' => 1,
    'googlemaps' => 1,
    'craigslist' => 1,
    'myopera' => 1,
    'tumblr' => 1,
    'polleverywhere' => 1,
    'quantcast' => 1,
    'compete' => 1,
    'statusnet' => 1,
    'identica' => 1,
    'vznetworks' => 1,
    'mylocme' => 1,
    'pastebin' => 1,
    'pastie' => 1,
    'redux' => 1,
    'cloudapp' => 1,
    'speakerdeck' => 1,
    'kiva' => 1,
    'timetoast' => 1,
    'storify' => 1,
    'meetup' => 1,
    'dailymile' => 1,
    'kinomap' => 1,
    'metacdn' => 1,
    'prezi' => 1,
    'uservoice' => 1,
    'formspring' => 1,
    'twitlonger' => 1,
    'qwiki' => 1,
    'crocodoc' => 1,
    'wikipedia' => 1,
    'wikimedia' => 1,
    'urtak' => 1,
    'graphicly' => 1,
    'ganxy' => 1,
    'gopollgo' => 1,
    'panorama' => 1,
    'behance' => 1,
    'jdsupra' => 1,
    'minilogs' => 1,
    'sketchfab' => 1,
    'jsfiddle' => 1,
    'ponga' => 1,
    'listly' => 1,
    'crowdmap' => 1,
    'ifttt' => 1,
    'weavly' => 1,
    'yfrog' => 1,
    'flickr' => 1,
    'twitpic' => 1,
    'imgur' => 1,
    'twitgoo' => 1,
    'photobucket' => 1,
    'mobypicture' => 1,
    'xkcd' => 1,
    'asofterworld' => 1,
    'dinosaurcomics' => 1,
    '23hq' => 1,
    'dribbble' => 1,
    'smugmug' => 1,
    'picasa' => 1,
    'imgly' => 1,
    'tinypic' => 1,
    'meadd' => 1,
    'deviantart' => 1,
    'fotopedia' => 1,
    'photozou' => 1,
    'instagram' => 1,
    'skitch' => 1,
    'questionablecontent' => 1,
    'twitrpix' => 1,
    'someecards' => 1,
    'pikchur' => 1,
    'achewood' => 1,
    'whosay' => 1,
    'owly' => 1,
    'mlkshk' => 1,
    'lockerz' => 1,
    'droplr' => 1,
    'eyeem' => 1,
    'giphy' => 1,
    'amazon' => 1,
    'shopstyle' => 1,
    'apple' => 1,
    'shoplocket' => 1,
    'etsy' => 1,
    'fiverr' => 1,
    'soundcloud' => 1,
    'spotify' => 1,
    'lastfm' => 1,
    'mixcloud' => 1,
    'radionomy' => 1,
    'hark' => 1,
    'rdio' => 1,
    'zeroinch' => 1,
    'bandcamp' => 1,
    'freemusicarchive' => 1,
    'npr' => 1,
    'huffduffer' => 1,
    'audioboo' => 1,
    'xiami' => 1,
    'saynow' => 1,
    'grooveshark' => 1,
    'radioreddit' => 1,
    'gogoyoko' => 1,
    'hypem' => 1,
  );
  $export['oembedembedly_providers'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'oembedembedly_schemes';
  $strongarm->value = '';
  $export['oembedembedly_schemes'] = $strongarm;

  return $export;
}
