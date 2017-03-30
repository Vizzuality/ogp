<section <?php if ($classes) { print 'class="'. $classes . '" '; } ?><?php print $attributes; ?>>
<?php if (!empty($header)) : ?>
  <header class="sections-header row">
    <ul class="clearfix">
      <?php foreach ($header as $cell): ?>
      <li>
        <span>
        <?php if (is_array($cell)): print ($cell['data']);?>
        <?php else: print $cell; endif; ?>
      </span>
      </li>
      <?php endforeach; ?>
    </ul>
  </header>
<?php endif; ?>
<?php foreach ($rows as $row_count => $row): ?>
  <section class="session row" id="<?php print $view->current_display . '-slot-' . $row_count; ?>">
    <time datetime="<?php print str_replace(' ', 'T', $view->result[$row_count]->field_field_slot_datetime[0]['raw']['value']);?>">
      <?php print $row['time']['data']; ?>
    </time>
    <?php unset($row['time']); $i = 0; foreach($row as $room => $session): ?>
      <?php $i = $i+1; ?>
      <article id="<?php print $view->current_display . '-slot-' . $row_count; ?>" class="<?php print 'room-' . $i; ?>">
        <?php if (isset($session['data'])): print $session['data'] . '<div class="room">' . $room . '</div>';  endif; ?>
      </article>
    <?php endforeach; ?>
  </section>
<?php endforeach; ?>
</section>
