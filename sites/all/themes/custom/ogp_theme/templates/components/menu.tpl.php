<?php
$main_menu = menu_build_tree('menu-main-menu-2-0');
$path = explode('/', drupal_get_path_alias());
?>
<nav class="c-main-menu <?php if (drupal_is_front_page() == false) {
    echo '-page';
} ?>">
    <ul class="primary-menu">
        <?php foreach ($main_menu as $primary_link) {
            $link = $primary_link['link'];
            $sub_menu = $primary_link['below'];
            if ($primary_link['link']['hidden'] == 0) { ?>
                <?php if (count($sub_menu) > 0) { ?>
                    <li class="text -menu dropdown <?php echo ($path[0] == $link['link_path']) ? '-active' : '' ?>">
                <?php } else { ?>
                    <li class="text -menu <?php echo ($path[0] == $link['link_path']) ? '-active' : '' ?>">
                <?php } ?>
                <a href="/<?php echo $link['link_path'] ?>"><?php echo $link['link_title'] ?></a>
                <?php if (count($sub_menu) > 0) { ?>
                    <div class="sub-menu">
                        <ul class="menu-list">
                            <?php foreach ($sub_menu as $sub_menu_link) {
                                $sub_link = $sub_menu_link['link'];
                                if ($sub_link['link'] && $sub_link['link']['hidden'] == 0) { ?>
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
        <li class="text -menu dropdown" id="transifexSelector"></li>
        <li class="text -menu">
            <svg class="icon -medium">
                <use xlink:href="#icon-search"></use>
            </svg>
        </li>
    </ul>
</nav>
