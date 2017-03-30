<?php

function ogp_dkan_integration_get_latest_action_plans($country_page_nid) {
  $action_plans = views_get_view('ogp_dkan_country_action_plans');
  $action_plans->set_display('block');
  $action_plans->set_arguments(array($country_page_nid));
  $action_plans->pre_execute();
  $action_plans->execute();
  return $action_plans->result;
}

function ogp_dkan_integration_get_action_plan_documents($country_page_nid, $action_plan_nid='all', $type=NULL) {
  $documents = views_get_view('ogp_dkan_country_documents');
  $documents->set_display('block');
  $arguments = array(
    $country_page_nid,
    $action_plan_nid,
    isset($type) ? ogp_dkan_integration_get_type_term_id($type) : 'all'
  );
  $documents->set_arguments($arguments);
  $documents->pre_execute();
  $documents->execute();
  return $documents->result;
}

function ogp_dkan_integration_get_latest_action_plan_document($country_page_nid) {
  $action_plan = ogp_dkan_integration_get_latest_action_plans($country_page_nid);
  if (count($action_plan)) {
    $action_plan = $action_plan[0];
    $docs = ogp_dkan_integration_get_action_plan_documents($country_page_nid, $action_plan->nid, 'action plan');
    return $docs;
  }
  return FALSE;
}

function ogp_dkan_integration_get_latest_progress_report_document($country_page_nid) {
  $docs = ogp_dkan_integration_get_action_plan_documents($country_page_nid, 'all', 'irm report');
  if (count($docs)) {
    return $docs;
  }
  return FALSE;
}

function ogp_dkan_integration_get_type_term_id($type) {
  $term = taxonomy_get_term_by_name($type, 'ogp_document_type');
  if (count($term)) {
    return array_keys($term)[0];
  }
  return FALSE;
}
