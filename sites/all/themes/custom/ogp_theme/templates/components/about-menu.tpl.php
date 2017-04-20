<?php
$menu = menu_build_tree('menu-about-menu');
$path = explode('/', drupal_get_path_alias());
?>
<div class="c-tabs -vertical">
  <ul class="tabs-container">
    <?php foreach ($menu as $primary_link) {
      $link = $primary_link['link'];
      $sub_menu = $primary_link['below'];
      if ($primary_link['link']['hidden'] == 0) { ?>
          <?php if (count($sub_menu) > 0) { ?>
              <li class="tab text -tab -grey parent <?php echo ($path[0] == $link['link_path']) ? '-selected' : '' ?>">
          <?php } else { ?>
              <li class="tab text -tab -grey <?php echo ($path[0] == $link['link_path']) ? '-selected' : '' ?>">
          <?php } ?>
          <a href="/<?php echo $link['link_path'] ?>"><?php echo $link['link_title'] ?></a></li>
          <?php if (count($sub_menu) > 0) { ?>
            <?php foreach ($sub_menu as $sub_menu_link) {
                $sub_menu_bottom = $sub_menu_link['below'];
                $sub_link = $sub_menu_link['link'];
                if ($sub_link && $sub_link['hidden'] == 0) { ?>
                    <li class="tab text -tab -grey level-<?php echo $sub_link['depth'] ?>">
                        <a href="/<?php echo $sub_link['link_path'] ?>"><?php echo $sub_link['link_title'] ?></a>
                    </li>
                <?php } ?>
                <?php if (count($sub_menu_bottom) > 0) { ?>
                  <?php foreach ($sub_menu_bottom as $sub_menu_link) {
                      $sub_link = $sub_menu_link['link'];
                      if ($sub_link && $sub_link['hidden'] == 0) { ?>
                          <li class="tab text -tab -grey level-<?php echo $sub_link['depth'] ?>">
                              <a href="/<?php echo $sub_link['link_path'] ?>"><?php echo $sub_link['link_title'] ?></a>
                          </li>
                      <?php }
                  } ?>
                <?php }
            } ?>
          <?php } ?>
      <?php }
    } ?>
  </ul>
</div>
