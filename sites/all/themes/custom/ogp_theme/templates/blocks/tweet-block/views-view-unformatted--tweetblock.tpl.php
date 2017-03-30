<!-- Block with the last tweet -->
<div class="c-social-block -tweet">
  <?php foreach ($rows as $id => $row): ?>
    <div>
      <span class="text -social-title">Open Gov Partnership</span>
      <?php print $row; ?>
    </div>
  <?php endforeach; ?>
</div>
