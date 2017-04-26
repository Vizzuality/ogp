<?php
/**
 * @file
 * Page
 */
?>
<div id="newsEventsPage">

  <!-- Stories page view/block -->
  <div class="l-page l-news-events">
    <div class="row">
      <div class="column small-12 medium-6 content-header">
        <h1 class="text -title">News and Events</h1>
      </div>
      <div class="column small-12 medium-6">
        <div class="row">
          <div class="column small-12 medium-6">
            <div class="c-selector -tall">
              <select class="country-filter"></select>
            </div>
          </div>
          <div class="column small-12 medium-6">
            <div class="c-selector -tall">
              <select class="type-filter"></select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="eventsContainer" class="l-section">
      <div class="c-loader"><div class="loader"></div></div>
      <div class="row">
        <div class="columns small-12">
          <div class="c-content-banner -hidden">
            <span class="text -small-bold -white banner-type-date-event"></span>
            <span class="text -white banner-date -section-title-small -banner-event"></span>
            <a class="banner-link" href="">
              <h2 class="text -title -white banner-title"></h2>
            </a>
            <span class="text -white banner-author"></span>
          </div>
        </div>
      </div>

      <div class="tiles-container-event row">
        <div class="columns small-12 events-tiles" id="eventsTiles"></div>
      </div>

      <div class="row">
        <div class="columns small-12">
          <div class="container-load-more">
            <span class="c-button -blue -box -large -center column small-12 medium-5 large-3 vertical page-count" data-value="1">More events</span>
          </div>
        </div>
      </div>

    </section>

    <section id="newsContainer" class="l-section">
      <div class="c-loader"><div class="loader"></div></div>
      <div class="tiles-container-news row content-tiles events-tiles" id="newsTiles">
      </div>
      <div class="row">
        <div class="column small-12">
          <div class="c-pagination"></div>
        </div>
      </div>
    </section>

  </div>

  <div class="banners-container"></div>

</div>
