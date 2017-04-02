<?php
/**
 * @file
 */
$node = node_load($nid);
$fields = field_info_instances('node', 'people');

$field_contact = field_get_items('node', $node, 'field_contact');
$field_job_title = field_get_items('node', $node, 'field_job_title')[0]['value'];
$field_countries_involved = field_get_items('node', $node, 'field_countries_involved');
$field_countries_poc = field_get_items('node', $node, 'field_countries_poc');
?>
<div id="peopleInvolved" class="l-people-involved l-page -tall">
    <div class="row">
        <div class="column small-12 medium-8 content-header">
            <h1 class="text -title"><?php echo $node->title ?></h1>
            <h2 class="text"><?php echo $field_job_title ?></h2>
            <a href="#" class="-disabled text -small-bold -uppercase -blue tag"><?php echo $field_countries_involved[0][entity]->title; ?></a>
        </div>

    </div>

    <div class="row">
        <div class="column small-12 medium-8 medium-offset-2">
            <div class="text -body-content">
                <p><?php echo $node->body[$node->language][0]['value']; ?></p>
            </div>

            <?php if ($field_contact) { ?>
                <div class="container-contact">
                    <h2 class="text -section-title-small "><?php echo $fields['field_contact']['label'] ?></h2>
                    <div class="text -body-content">
                        <?php

                        $temp = explode(' ', $field_contact[0]['value']);
                        $result = '';
                        foreach($temp as $t)
                            $result .= $t[0];

                        if(filter_var($field_contact[0]['value'], FILTER_VALIDATE_EMAIL)) {
                            echo '<strong>Email: </strong><p>'.$field_contact[0]['value'].'</p>';
                        }

                        if($result === '@') {
                            echo '<strong>Twitter: </strong><p>'.$field_contact[0]['value'].'</p>';
                        }
                        ?>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>

</div>

<div class="banners-container"></div>
