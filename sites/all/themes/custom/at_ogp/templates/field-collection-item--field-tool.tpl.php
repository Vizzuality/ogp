<?php
//dpm(get_defined_vars());
/**
 * @file
 * Tool group item.
 */
?>
<div class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <div class="tool-content">
  		<?php print render($content['field_tool_link']) ?>
    	<?php print render($content['field_tool_image']); ?>
  </div>
</div>
