<?php
$main_menu = menu_build_tree('menu-main-menu-2-0');
$path = explode('/', drupal_get_path_alias());
?>
<?php if (drupal_is_front_page()) { ?>
  <nav class="c-main-menu">
<?php } else { ?>
  <nav class="c-main-menu -page">
<?php } ?>
    <ul class="primary-menu">
        <?php foreach ($main_menu as $primary_link) {
            $link = $primary_link['link'];
            $sub_menu = $primary_link['below'];
            $alias = drupal_get_path_alias($link['link_path']);
            $slug = explode('/', $alias)[0];
            if ($primary_link['link']['hidden'] == 0) { ?>
                <?php if (count($sub_menu) > 0) { ?>
                    <li class="text -menu dropdown <?php echo ($path[0] == $slug) ? '-active' : '' ?>">
                <?php } else { ?>
                    <li class="text -menu <?php echo ($path[0] == $link['link_path']) ? '-active' : '' ?>">
                <?php } ?>
                <a href="/<?php echo $alias ?>"><?php echo $link['link_title'] ?></a>
                <?php if (count($sub_menu) > 0) { ?>
                    <div class="sub-menu">
                        <ul class="menu-list">
                            <?php foreach ($sub_menu as $sub_menu_link) {
                                $sub_link = $sub_menu_link['link'];
                                if ($sub_link && $sub_link['hidden'] == 0) { ?>
                                    <li class="text -menu">
                                        <a href="/<?php echo $sub_link['link_path'] ?>"><?php echo $sub_link['link_title'] ?></a>
                                    </li>
                                <?php }
                            } ?>
                        </ul>
                    </div>
                <?php } ?>
                </li>
            <?php }
        } ?>
        <li class="text -menu -world-icon">
          <?php if (drupal_is_front_page()) { ?>
            <svg class="icon -medium"><use xlink:href="#icon-world-white"></use></svg>
          <?php } else { ?>
            <svg class="icon -medium"><use xlink:href="#icon-world-black"></use></svg>
          <?php } ?>
        </li>
        <li class="language-selector text -menu dropdown -language-dropdown" id="transifexSelector"></li>
        <li class="text -menu">
            <a href="/search">
              <svg class="icon -medium">
                <use xlink:href="#icon-search"></use>
            </svg>
            </a>
        </li>
    </ul>
</nav>
