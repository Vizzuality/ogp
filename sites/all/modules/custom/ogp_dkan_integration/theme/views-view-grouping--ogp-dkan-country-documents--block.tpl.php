<?php

/**
 * @file
 * This template is used to print a single grouping in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $grouping: The grouping instruction.
 * - $grouping_level: Integer indicating the hierarchical level of the grouping.
 * - $rows: The rows contained in this grouping.
 * - $title: The title of this grouping.
 * - $content: The processed content output that will normally be used.
 * 
 * 
 * field_action_plan_progress_repor
 * 
 */
 
 // Add progress report on Action Plan, Self Assessment and Progress Report pages from country page
$text_report = NULL;
if (!empty(substr_count($title, 'Country:')))
{
	switch (arg(2)) {
		case "action-plan": 
			if (isset($view->result[0]->field_field_country_ref[0]['raw']['entity']->field_action_plan_progress_repor['und'][0]['value'])){
			$text_report = $view->result[0]->field_field_country_ref[0]['raw']['entity']->field_action_plan_progress_repor['und'][0]['value'];	}	
			break;		
		case "assessment": 
			if (isset($view->result[0]->field_field_country_ref[0]['raw']['entity']->field_self_assessment_progress_r['und'][0]['value'])){
			$text_report = $view->result[0]->field_field_country_ref[0]['raw']['entity']->field_self_assessment_progress_r['und'][0]['value'];}
			break;		
		case "irm": 
			if (isset($view->result[0]->field_field_country_ref[0]['raw']['entity']->field_progress_report_text['und'][0]['value'])){
			$text_report = $view->result[0]->field_field_country_ref[0]['raw']['entity']->field_progress_report_text['und'][0]['value'];}
			break;		
	}
}


$title = str_replace('Country: ', '', $title);
?>
<div class="view-grouping">
  <div class="view-grouping-header"><h2><?php print $title; ?></h2></div>

  <?php // if exist add progress report text on page  
	if (isset ($text_report)) {?>	
	<div class="view-grouping">
	  <div class="view-grouping-header"><?php print $text_report;?></div>
	</div>
  <?php }?>
  <div class="view-grouping-content">
    <?php print $content; ?>
  </div>
</div>


