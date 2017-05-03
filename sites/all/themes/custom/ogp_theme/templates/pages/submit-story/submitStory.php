<script>
    console.log('hello');
</script>
<?php
// add node properties
$newNode = (object) NULL;
$newNode->type = 'blog_post';
$newNode->title = 'hi'
$newNode->uid = '1';
$newNode->created = strtotime("now");
$newNode->changed = strtotime("now");
$newNode->status = 1;
$newNode->comment = 0;
$newNode->promote = 0;
$newNode->moderate = 0;
$newNode->sticky = 0;

// // add CCK field data
// $newNode->field_{YOUR_CUSTOM_FIELD_1}[0]['value'] = '{DATA_1}';
// $newNode->field_{YOUR_CUSTOM_FIELD_2}[0]['value'] = '{DATA_2}';

// save node
node_save($newNode);
?>
