<div class="c-social-block -tweet">
  <div class="contain-title-icon">
    <span class="text -title-x-small">Open Gov Partnership</span>
    <svg class="icon -medium"><use xlink:href="#icon-twitter"></use></svg>
  </div>
  <?php foreach ($rows as $id => $row): ?>
    <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
      <?php print $row; ?>
    </div>
  <?php endforeach; ?>
</div>
