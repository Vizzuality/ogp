<?php
  function limit_text($text, $limit) {
    if (str_word_count($text, 0) > $limit) {
        $words = str_word_count($text, 2);
        $pos = array_keys($words);
        $text = substr($text, 0, $pos[$limit]) . '...';
    }
    return $text;
  }

  $breadcrumbs = [];

  $path = explode('/', drupal_get_path_alias());
  $link_cache = '';
  foreach ($path as $crumb) {
    $link_cache = $link_cache . $crumb . '/';
    switch ($crumb) {
      case 'theme':
        $link_array = array(
          'title' => 'Themes',
          'link' => $link_cache
        );
        break;
      default:
        $link_array = array(
          'title' => str_replace('-', ' ', $crumb),
          'link' => $link_cache
        );
        break;
    }
    if ($crumb != 'node') {
      array_push($breadcrumbs, (object)$link_array);
    }
  }

  if ( arg(0) == 'node' && is_numeric(arg(1)) && !arg(2) ) {
    $node = node_load(arg(1));
    $current_node = array(
      'title' => $node->title
    );
    $breadcrumbs[sizeof($breadcrumbs) - 1] = (object)$current_node;
  } else if ( array_key_exists('system_main', $page['content']) && array_key_exists('filed_group', $page['content']['system_main']['term_heading']['term'] )) {
    $term = $page['content']['system_main']['term_heading']['term']['field_group']['#object'];
    $current_term = array(
      'title' => $term->name
    );
    $breadcrumbs[sizeof($breadcrumbs) - 1] = (object)$current_term;
  }
  $count = 1;
?>

<div class="l-full-width -short">
    <ul class="c-bread-crumb">
      <li><a href="/">Home</a></li>
      <?php foreach ($breadcrumbs as $breadcrumb) { ?>
        <?php if ($count == sizeof($breadcrumbs)) { ?>
          <li><?php echo limit_text($breadcrumb->title, 5); ?></li>
        <?php } else { ?>
          <li><a href="/<?php echo $breadcrumb->link ?>"><?php echo limit_text($breadcrumb->title, 5); ?></a></li>
      <?php } $count++; } ?>
    </ul>
    <?php if ($_SERVER['HTTP_REFERER'] && arg(0) == 'node' && is_numeric(arg(1)) && !arg(2)) { ?>
      <div class="c-back-link text -menu -blue"><a href="<?php echo $_SERVER['HTTP_REFERER'] ?>">back</a></div>
    <?php } ?>
</div>
