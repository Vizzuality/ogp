<?php
/**
 * @file
 * Page
 */

?>
<?php require_once('submitStory.php'); ?> 
<div id="storiesSubmitPage">

    <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

    <div class="l-page">

      <section class="row">
        <div class="column small-12 medium-8 content-header">
          <h1 class="text -title">Submit Story</h1>
          <p class="text -body-content">
            Interested in submitting a story? We welcome contributions from the
            community. Please fill in the form below and your story will enter our
            queue for approval. For more information, see our
            <a href="http://www.opengovpartnership.org/sites/default/files/OGPBlogGuidelines.pdf">blogging guidelines</a>.
          </p>
        </div>
      </section>

      <section class="row">
        <div class="column small-12">

          <form class="c-form">

            <div class="row">
              <div class="column small-12">
                <label class="text -small-bold -blue" for="title">Title</label>
                <input type="text" class="-title" placeholder="Story title" id="title" name="title"/>
              </div>
            </div>

            <div class="row">
              <div class="column small-12 medium-6">
                <label class="text -small-bold -blue" for="country">Country</label>
                <select class="country-select" name="country" id="country">
                  <option></option>
                </select>
              </div>
              <div class="column small-12 medium-6">
                <label class="text -small-bold -blue" for="date">Date</label>
                <input type="date" class="-date" placeholder="dd/mm/yyyy" id="date" name="date"/>
              </div>
            </div>

            <div class="row">
              <div class="column small-12 medium-6">
                <label class="text -small-bold -blue" for="topic">Topics</label>
                <select class="type-select" name="topic" id="topic">
                  <option></option>
                </select>
              </div>
              <div class="column small-12 medium-6">
                <label class="text -small-bold -blue" for="image">Cover image</label>
                <input type="file" class="-image" placeholder="Cover image" id="image" name="image"/>
              </div>
            </div>

            <div class="row">
              <div class="column small-12">
                <label class="text -small-bold -blue" for="content">Content</label>
                <textarea class="-content" placeholder="Write your story" id="content" name="content"></textarea>
              </div>
            </div>

            <div class="row">
              <div class="column small-12 medium-6">
                <label class="text -small-bold -blue" for="author">Author name</label>
                <input type="text" class="-author" placeholder="Your name" id="author" name="author"/>
              </div>
              <div class="column small-12 medium-6">
                <label class="text -small-bold -blue" for="email">email contact</label>
                <input type="email" class="-email" placeholder="Your email" id="email" name="email"/>
              </div>
            </div>

              <span class="c-button -green-back -tall -box js-submit-story">SEND STORY</span>

              <div class="c-loader"><div class="loader"></div></div>

          </form>

        </div>
      </section>
    </div>

    <div class="banners-container"></div>

    <div class="l-social-region">
      <?php
      $social = block_get_blocks_by_region('contentSocialFeed');
      print render($social);
      ?>
    </div>

    <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
