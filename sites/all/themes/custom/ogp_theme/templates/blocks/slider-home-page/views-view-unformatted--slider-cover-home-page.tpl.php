<!-- Slider that appear only on homepage (get blog_post data) -->
<div class="slider-cover-home">
  <?php foreach ($rows as $id => $row): ?>
    <div class="c-slider-home-page">
      <div class="row">
        <div class="column small-12 medium-9">
          <div class="container">
            <?php print $row; ?>
          </div>
        </div>
      </div>
    </div>
  <?php endforeach; ?>
</div>
