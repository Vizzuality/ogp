<!-- Slider that appear on all pages (get blog_post data) -->
<section id="storiesSliderBanner" class="l-full-width -short -white">
  <div class="row to-front">
    <div class="columns small-12">
      <div class="slider-container">
      <?php foreach ($rows as $id => $row): ?>
        <div class="slide">
          <div class="c-content-banner -with-background">
            <span class="text -small-bold -white">Highlighted Stories</span>
            <?php print $row; ?>
          </div>
        </div>
      <?php endforeach; ?>
      </div>
    </div>
  </div>
  <div class="back -grey">
    <div class="c-slider-dots"></div>
  </div>
</section>
