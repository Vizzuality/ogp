<?php
/**
 * @file
 * This template is used to print a list of countries with links to 
 * IRM Reports and Report Comment Pages.
 * 
 * Variables available:
 * - $countries: A list of countries.
 **/
$columns = array();
$counter = 2;
$i = 0;
foreach ($countries as $country) {
  if ($counter == 0) {
    $counter = 2;
    $i++;
  }
  if (!isset($columns[$i])) {
    $columns[$i] = array();
  }
  $columns[$i][] = $country;
  $counter--;
}
?>
<div class="view view-irm-page view-id-irm_page">
  <div class="views-responsive-grid views-responsive-grid-horizontal views-columns-2">
  <?php
  foreach ($columns as $column) {
  ?>
  <div class="views-row">
    <?php foreach ($column as $key => $country) {?>
    <div class="views-column views-column-<?php print ($key + 1);?>">
      <div class="views-field views-field-og-group-ref">
        <div class="field-content country-<?php print $country['code']; ?>">
          <a href="/country/<?php print strtolower(str_replace(' ', '-', $country['country'])); ?>"><?php print $country['country']; ?></a>
        </div>
      </div>
      <?php if (isset($country['report'])) {?>
      <div class="views-field views-field-title">
        <span class="field-content">
          <a href="<?php print $country['report']['file'];?>"><?php print $country['report']['title'];?></a>
        </span>
      </div>
      <?php } ?>
      <?php if (isset($country['national report'])) {?>
      <div class="views-field views-field-field-pdf-national">
        <span class="field-content">
          <a href="<?php print $country['national report']['file'];?>"><?php print $country['national report']['title'];?></a>
        </span>
      </div>
      <?php } ?>
      <?php if (isset($country['comments'])) {?>
      <div class="views-field views-field-field-report-comments-page">
        <span class="field-content">
          <a href="<?php print $country['comments'];?>"><?php print t('Comments');?></a>
        </span>
      </div>
      <?php } ?>
    </div>
    <?php }?>
  </div>
  <?php } ?>
  </div>
</div>