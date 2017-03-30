<?php

/**
 * @file
 * Template to display a view as a table.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $header: An array of header labels keyed by field id.
 * - $caption: The caption for this table. May be empty.
 * - $header_classes: An array of header classes keyed by field id.
 * - $fields: An array of CSS IDs to use for each field id.
 * - $classes: A class or classes to apply to the table, based on settings.
 * - $row_classes: An array of classes to apply to each row, indexed by row
 *   number. This matches the index in $rows.
 * - $rows: An array of row items. Each row is an array of content.
 *   $rows are keyed by row number, fields within rows are keyed by field ID.
 * - $field_classes: An array of classes to apply to each field, indexed by
 *   field id, then row number. This matches the index in $rows.
 * @ingroup views_templates
 */
  $title = str_replace('Period: ', '', $title);
  
  $ignore_fields = array('nid', 'field_ogp_document_type');

  $doc_types = array();
  foreach ($rows as $row) {
    $doc_types[] = $row['field_ogp_document_type']; 
  }
  $doc_types = array_unique($doc_types);
  if (count($doc_types) > 1) {
    $download_url = '/node/%nid/dataset/download';
  }
  else {
    $doc_type = $doc_types[0];
    $title = $title . ' ' . $doc_type ;
    $doc_type = str_replace(' ', '_', $doc_type);
    $doc_type = strtolower($doc_type);
    $download_url = '/node/%nid/ogp/zip/%doc_type';
    $download_url = str_replace('%doc_type', $doc_type, $download_url);
  }
  $title = $title . ' Documents';
?>

<?php if (!empty($title) || !empty($caption)) : ?>
  <h4><?php print $caption . $title; ?></h4>
<?php endif; ?>

<table <?php if ($classes) { print 'class="'. $classes . '" '; } ?><?php print $attributes; ?>>
  <?php if (!empty($header)) : ?>
    <!-- <thead>
      <tr>
        <?php foreach ($header as $field => $label): ?>
          <?php if (!in_array($field, $ignore_fields)) { ?>
          <th <?php if ($header_classes[$field]) { print 'class="'. $header_classes[$field] . '" '; } ?>>
            <?php print $label; ?>
          </th>
          <?php } ?>
        <?php endforeach; ?>
      </tr>
    </thead>
    -->
  <?php endif; ?>
  <tbody>
    <?php foreach ($rows as $row_count => $row): ?>
      
      <tr <?php if ($row_classes[$row_count]) { print 'class="' . implode(' ', $row_classes[$row_count]) .'"';  } ?>>
        <?php foreach ($row as $field => $content): ?>
          <?php if (!in_array($field, $ignore_fields)) { ?>
          <td <?php if ($field_classes[$field][$row_count]) { print 'class="'. $field_classes[$field][$row_count] . '" '; } ?><?php print drupal_attributes($field_attributes[$field][$row_count]); ?>>
            <?php print $content; ?>
          </td>
          <?php } ?>
        <?php endforeach; ?>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
<?php 
  $download_url = str_replace('%nid', $row['nid'], $download_url);
?>
<h5><a href="<?php print $download_url; ?>">Download all as zip file</a></h5>
