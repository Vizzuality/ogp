<?php

/**
 * @file
 */
?>
<div id="modelCommitmentsDetail" class="l-commitment">

  <section class="l-full-width -orange -short -with-padding">
    <div class="row">
      <div class="column small-12 medium-9">
        <h1 class="text -title -white"><?php echo $node->title ?></h1>
        <p class="text strength-info"></p>
      </div>
    </div>
  </section>

  <section class="l-page -tall">

    <div class="l-section">
      <div class="c-loader"><div class="loader"></div></div>

      <div class="row">
        <div class="column small-12 medium-4">
          <div class="c-tabs -vertical">
            <ul class="tabs-container">
              <li class="tab text -tab -grey" data-node="justification">Justification</li>
              <!-- <li class="tab text -tab -grey" data-node="recomendation">Recomendation</li> -->
              <li class="tab text -tab -grey" data-node="standards">Standards and guidance</li>
            </ul>
          </div>
        </div>
        <div class="column small-12 medium-8">
          <div id="modelCommitmentContent">
            <div id="justification">
              <div class="tab-container">
                <h2 class="text -section-title">Justification</h2>
                <p class="text -body-content container"></p>
              </div>
            </div>
            <div id="recommendations">
              <div class="tab-container -hidden">
                <h2 class="text -section-title">Recomendation</h2>
                <p class="text -body-content container"></p>
              </div>
            </div>
            <div id="standards">
              <div class="tab-container -hidden">
                <h2 class="text -section-title">Standards</h2>
                <div class="row container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="c-explore-more">
      <div class="row container">
        <div class="column small-12">
          <h3 class="text -module-title">More model commitments</h3>
          <div class="c-loader"><div class="loader"></div></div>
          <div class="explore-more-container"></div>
        </div>
      </div>
    </div>

  </section>

  <div class="banners-container"></div>

  <div class="model-content-banner">
      <?php
      $blocks = block_get_blocks_by_region('contentModelCommitmentContent');
      print render($blocks);
      ?>
  </div>

</div>
