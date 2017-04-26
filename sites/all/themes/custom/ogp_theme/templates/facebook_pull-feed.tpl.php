<ul class="facebook-feed c-social-block -facebook">
  <a href="https://www.facebook.com/OpenGovernmentPartnership/" target="_blank" class="contain-title-icon">
    <span class="text -title-x-small -blue">Open Gov Partnership</span>
    <svg class="icon -medium"><use xlink:href="#icon-facebook"></use></svg>
  </a>
<?php foreach ($items as $item): ?>
  <li class="item">
    <?php $new_date_format = date('F m, Y - H:iA', strtotime('2008-07-01T22:35:17.02')); ?>
  <?php if (isset($item->from)): ?>
    <span class="facebook-feed-picture"><img alt="<?php echo $item->from->name; ?>" src="//graph.facebook.com/<?php echo $item->from->id; ?>/picture" /></span>
    <span class="facebook-feed-from"><a href="//facebook.com/profile.php?id=<?php echo $item->from->id; ?>"><?php echo $item->from->name; ?></a></span>
  <?php endif; ?>
  <?php if (isset($item->story)): ?>
      <span class="facebook-feed-story"><?php echo str_replace($item->from->name, '', $item->story); ?></span>
    <?php endif; ?>
    <span class="facebook-feed-message">
        <?php if (isset($item->message)) echo $item->message; ?>
        <?php if (isset($item->type) && $item->type === 'link'): ?>
          <?php if (isset($item->description)) echo $item->description; ?>
          <?php if (isset($item->name)) echo l($item->name, $item->link); ?>
        <?php endif; ?>
        <?php if (isset($item->type) && in_array($item->type, array('photo', 'video'))): ?>
          <?php echo l('<img src="' . $item->picture . '" />', $item->link, array('html' => true, 'attributes' => array('target' => '_blank'))); ?>
        <?php endif; ?>
        <?php if (isset($item->type) && $item->type === 'question'): ?>
          <?php echo $item->question; ?>
        <?php endif; ?>
    </span>
    <div class="text -blank -small-bold date-facebook"><?php echo $new_date_format; ?></div>
    <div class="original-facebook-post">
      <a href="https://www.facebook.com/<?php echo $item->id ?>" target="_blank" class="text  -blue">Go to original post</a>
    </div>
    <span class="facebook-feed-time"><?php echo t('!time ago.', array('!time' => format_interval(time() - strtotime($item->created_time)))); ?></span>
  </li>
<?php endforeach; ?>
</ul>
