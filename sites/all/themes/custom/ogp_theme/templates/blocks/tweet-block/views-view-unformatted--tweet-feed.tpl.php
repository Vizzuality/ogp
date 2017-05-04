<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="c-social-block -tweet">
    <a href="https://twitter.com/opengovpart" target="_blank" class="contain-title-icon">
        <span class="text -title-x-small -blue">Open Gov Partnership</span>
        <svg class="icon -medium"><use xlink:href="#icon-twitter"></use></svg>
    </a>
    <?php foreach ($rows as $id => $row): ?>
        <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
            <?php print $row; ?>
        </div>
    <?php endforeach; ?>
    <a class="text -blue link-twitter" target="_blank">Go to original tweet</a>
</div>
