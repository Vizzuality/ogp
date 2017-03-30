<?php
/**
 * @file
 * IRM landing
 */
?>
<div id="page-wrapper irm-landing">
  <div id="page" class="<?php print $classes; ?>">

    <?php if($page['leaderboard']): ?>
      <div id="leaderboard-wrapper">
        <div class="container clearfix">
          <?php print render($page['leaderboard']); ?>
        </div>
      </div>
    <?php endif; ?>

    <div id="header-wrapper">
      <div class="container clearfix">
        <header<?php print $header_attributes; ?>>

          <?php if ($site_logo || $site_name || $site_slogan): ?>
            <!-- start: Branding -->
            <div<?php print $branding_attributes; ?>>

              <?php if ($site_logo): ?>
                <div id="logo">
                  <?php print $site_logo; ?>
                </div>
              <?php endif; ?>

              <?php if ($site_name || $site_slogan): ?>
                <!-- start: Site name and Slogan hgroup -->
                <hgroup<?php print $hgroup_attributes; ?>>

                  <?php if ($site_name): ?>
                    <h1<?php print $site_name_attributes; ?>><?php print $site_name; ?></h1>
                  <?php endif; ?>

                  <?php if ($site_slogan): ?>
                    <h2<?php print $site_slogan_attributes; ?>><?php print $site_slogan; ?></h2>
                  <?php endif; ?>

                </hgroup><!-- /end #name-and-slogan -->
              <?php endif; ?>


            </div><!-- /end #branding -->
          <?php endif; ?>

        <?php print render($page['header']); ?>

        </header>
      </div>
    </div>

    <?php if ($page['menu_bar'] || $primary_navigation || $secondary_navigation): ?>
      <div id="nav-wrapper">
        <div class="container clearfix">
          <?php print render($page['menu_bar']); ?>
          <?php //if ($primary_navigation): print $primary_navigation; endif; ?>
          <?php //if ($secondary_navigation): print $secondary_navigation; endif; ?>
        </div>
      </div>
    <?php endif; ?>

    <?php print render($title_prefix); ?>

    <?php if ($page['secondary_content']): ?>
      <div id="secondary-content-wrapper">
        <div class="container clearfix">
          <?php print render($page['secondary_content']); ?>
        </div>
      </div>
    <?php endif; ?>

    <div id="content-wrapper"><div class="container irm-landing">
      <div id="columns"><div class="columns-inner clearfix">
        <div id="content-column"><div class="content-inner">

          <?php print render($page['highlighted']); ?>

          <<?php print $tag; ?> id="main-content">

            <?php if ($primary_local_tasks || $secondary_local_tasks || $action_links): ?>
              <div id="tasks">

                <?php if ($primary_local_tasks): ?>
                  <ul class="tabs primary clearfix"><?php print render($primary_local_tasks); ?></ul>
                <?php endif; ?>

                <?php if ($secondary_local_tasks): ?>
                  <ul class="tabs secondary clearfix"><?php print render($secondary_local_tasks); ?></ul>
                <?php endif; ?>

                <?php if ($action_links = render($action_links)): ?>
                  <ul class="action-links clearfix"><?php print $action_links; ?></ul>
                <?php endif; ?>

              </div>
            <?php endif; ?>


            <?php if ($messages || $page['help']): ?>
              <div id="messages-help-wrapper">
                <div class="container clearfix">
                  <?php print $messages; ?>
                  <?php print render($page['help']); ?>
                </div>
              </div>
            <?php endif; ?>

            <?php if ($content = render($page['content'])): ?>
              <div id="content">
                <?php print $content; ?>
              </div>
            <?php endif; ?>

            <?php print $feed_icons; ?>

            <?php print render($title_suffix); // Prints page level contextual links ?>

          </<?php print $tag; ?>>

          <?php print render($page['content_aside']); ?>

        </div></div>

        <?php print render($page['sidebar_first']); ?>
        <?php print render($page['sidebar_second']); ?>

      </div></div>
    </div></div>

    <?php if ($page['tertiary_content']): ?>
      <div id="tertiary-content-wrapper">
        <div class="container clearfix">
          <?php print render($page['tertiary_content']); ?>
        </div>
      </div>
    <?php endif; ?>

    <?php if ($page['blog_footer_left'] || $page['blog_footer_mid'] || $page['blog_footer_right']): ?>
      <div id="blog-footer-wrapper" class="blog-footer-wrapper">
        <div class="container clearfix">
          <?php if ($page['blog_footer_left']): ?>
            <?php print render($page['blog_footer_left']); ?>
          <?php endif; ?>
          <?php if ($page['blog_footer_mid']): ?>
            <?php print render($page['blog_footer_mid']); ?>
          <?php endif; ?>
          <?php if ($page['blog_footer_right']): ?>
            <?php print render($page['blog_footer_right']); ?>
          <?php endif; ?>
        </div>
      </div>
    <?php endif; ?>

    <?php if (isset($page['footer'])): ?>
      <div id="footer-wrapper">
        <div class="container clearfix">
          <footer<?php print $footer_attributes; ?>>
            <?php print render($page['footer']); ?>
          </footer>
        </div>
      </div>
    <?php endif; ?>

  </div>
</div>
