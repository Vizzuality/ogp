<?php
$menu = menu_build_tree('book-toc-1002');
$path = explode('/', drupal_get_path_alias());
var_dump($menu);
?>
<?php if (sizeof($menu) > 0) { ?>
  <div class="column small-12 medium-4">
    <div id="aboutMenu" class="c-tabs -vertical -menu">
      <div class="tabs-container">
        <?php foreach ($menu as $primary_link) {
          $link = $primary_link['link'];
          $sub_menu = $primary_link['below'];
          $alias = drupal_get_path_alias($link['link_path']);
          $slug = end(explode('/', $alias));
          if ($primary_link['link']['hidden'] == 0) { ?>
            <div class="group <?php echo (in_array($slug, $path)) ? '-selected' : '' ?>">
              <div id="tab-<?php echo $slug ?>" class="tab text -tab -grey <?php echo (in_array($slug, $path)) ? '-selected -open' : '' ?> <?php echo (count($sub_menu) > 0) ? 'parent' : '' ?>">
                <svg data-value="tab-<?php echo $slug ?>" class="icon -medium <?php echo (count($sub_menu) > 0) ? '-show' : '' ?>"><use xlink:href="#icon-arrow-menu"></use></svg>
                <a href="/<?php echo $alias ?>"><?php echo $link['link_title'] ?></a></div>
                <?php if (count($sub_menu) > 0) { ?>
                  <div id="tab-<?php echo $slug ?>" class="sub-menu <?php echo (in_array($slug, $path)) ? '-open' : '' ?>">
                  <?php foreach ($sub_menu as $sub_menu_link) {
                      $sub_menu_bottom = $sub_menu_link['below'];
                      $sub_link = $sub_menu_link['link'];
                      $sub_alias = drupal_get_path_alias($sub_link['link_path']);
                      $sub_slug = end(explode('/', $sub_alias));
                      if ($sub_link && $sub_link['hidden'] == 0) { ?>
                          <div class="tab text -tab -grey level-<?php echo $sub_link['depth'] ?> <?php echo (in_array($sub_slug, $path)) ? '-active' : '' ?>">
                              <a href="/<?php echo $sub_alias ?>"><?php echo $sub_link['link_title'] ?></a>
                          </div>
                      <?php } ?>
                      <?php if (count($sub_menu_bottom) > 0) { ?>
                        <?php foreach ($sub_menu_bottom as $child_menu_link) {
                            $child_link = $child_menu_link['link'];
                            $child_alias = drupal_get_path_alias($child_link['link_path']);
                            $child_slug = end(explode('/', $child_alias));
                            if ($child_link && $child_link['hidden'] == 0) { ?>
                                <div class="tab text -tab -grey level-<?php echo $child_link['depth'] ?> <?php echo (in_array($child_slug, $path)) ? '-active' : '' ?>">
                                    <a href="/<?php echo $child_alias ?>"><?php echo $child_link['link_title'] ?></a>
                                </div>
                            <?php }
                        } ?>
                      <?php }
                    } ?>
                  </div>
              <?php } ?>
            <?php } ?>
          </div>
        <?php } ?>
      </div>
    </div>
  </div>
<?php } ?>
