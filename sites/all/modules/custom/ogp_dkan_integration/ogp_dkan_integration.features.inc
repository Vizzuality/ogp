<?php
/**
 * @file
 * ogp_dkan_integration.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_dkan_integration_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "facetapi" && $api == "facetapi_defaults") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function ogp_dkan_integration_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_default_search_api_index().
 */
function ogp_dkan_integration_default_search_api_index() {
  $items = array();
  $items['ogp_documents'] = entity_import('search_api_index', '{
    "name" : "OGP Documents",
    "machine_name" : "ogp_documents",
    "description" : null,
    "server" : "solr",
    "item_type" : "node",
    "options" : {
      "datasource" : { "bundles" : [
          "blog_post",
          "country_page",
          "event",
          "page",
          "resource",
          "working_group",
          "working_group_page"
        ]
      },
      "index_directly" : 1,
      "cron_limit" : "50",
      "fields" : {
        "author" : { "type" : "integer", "entity_type" : "user" },
        "author:name" : { "type" : "text" },
        "body:value" : { "type" : "text" },
        "field_blog_authors" : { "type" : "list\\u003Cinteger\\u003E", "entity_type" : "user" },
        "field_blog_authors:name" : { "type" : "list\\u003Ctext\\u003E" },
        "field_country_ref:field_country" : { "type" : "list\\u003Cstring\\u003E", "entity_type" : "country" },
        "field_dataset_ref" : { "type" : "list\\u003Cinteger\\u003E", "entity_type" : "node" },
        "field_dataset_ref:field_country_ref:field_country" : {
          "type" : "list\\u003Clist\\u003Cstring\\u003E\\u003E",
          "entity_type" : "country"
        },
        "field_dataset_ref:field_country_ref:title" : { "type" : "list\\u003Clist\\u003Ctext\\u003E\\u003E" },
        "field_event_type" : { "type" : "integer", "entity_type" : "taxonomy_term" },
        "field_format" : { "type" : "integer", "entity_type" : "taxonomy_term" },
        "field_ogp_document_type" : { "type" : "integer", "entity_type" : "taxonomy_term" },
        "field_topic" : { "type" : "list\\u003Cinteger\\u003E", "entity_type" : "taxonomy_term" },
        "nid" : { "type" : "integer" },
        "search_api_combined_1" : { "type" : "list\\u003Cstring\\u003E" },
        "search_api_language" : { "type" : "string" },
        "status" : { "type" : "integer" },
        "title" : { "type" : "text" },
        "type" : { "type" : "string" }
      },
      "data_alter_callbacks" : {
        "search_api_alter_bundle_filter" : {
          "status" : 0,
          "weight" : "-10",
          "settings" : {
            "default" : "0",
            "bundles" : {
              "blog_post" : "blog_post",
              "event" : "event",
              "page" : "page",
              "resource" : "resource"
            }
          }
        },
        "search_api_alter_node_access" : { "status" : 0, "weight" : "0", "settings" : [] },
        "search_api_alter_node_status" : { "status" : 1, "weight" : "0", "settings" : [] },
        "search_api_alter_add_combined" : {
          "status" : 1,
          "weight" : "0",
          "settings" : { "fields" : { "search_api_combined_1" : {
                "name" : "combined_country_field",
                "imitate" : "field_country",
                "fields" : [
                  "field_country_ref:field_country",
                  "field_dataset_ref:field_country_ref:field_country"
                ],
                "description" : "A @type combined of the following fields: Country \\u00bb Country, Dataset \\u00bb Country \\u00bb Country."
              }
            }
          }
        },
        "search_api_alter_language_control" : {
          "status" : 0,
          "weight" : "0",
          "settings" : { "lang_field" : "", "languages" : [] }
        },
        "search_api_alter_add_hierarchy" : { "status" : 0, "weight" : "0", "settings" : { "fields" : [] } },
        "search_api_alter_add_url" : { "status" : 0, "weight" : "0", "settings" : [] },
        "search_api_alter_add_aggregation" : { "status" : 0, "weight" : "0", "settings" : [] },
        "search_api_alter_add_viewed_entity" : { "status" : 0, "weight" : "0", "settings" : { "mode" : "full" } }
      },
      "processors" : {
        "search_api_case_ignore" : {
          "status" : 0,
          "weight" : "0",
          "settings" : { "fields" : { "title" : true, "field_dataset_ref:field_country_ref:title" : true } }
        },
        "search_api_html_filter" : {
          "status" : 0,
          "weight" : "10",
          "settings" : {
            "fields" : { "title" : true, "field_dataset_ref:field_country_ref:title" : true },
            "title" : 0,
            "alt" : 1,
            "tags" : "h1 = 5\\r\\nh2 = 3\\r\\nh3 = 2\\r\\nstrong = 2\\r\\nb = 2\\r\\nem = 1.5\\r\\nu = 1.5"
          }
        },
        "search_api_tokenizer" : {
          "status" : 0,
          "weight" : "20",
          "settings" : {
            "fields" : { "title" : true, "field_dataset_ref:field_country_ref:title" : true },
            "spaces" : "[^[:alnum:]]",
            "ignorable" : "[\\u0027]"
          }
        },
        "search_api_stopwords" : {
          "status" : 0,
          "weight" : "30",
          "settings" : {
            "fields" : { "title" : true, "field_dataset_ref:field_country_ref:title" : true },
            "file" : "",
            "stopwords" : "but\\r\\ndid\\r\\nthe this that those\\r\\netc"
          }
        },
        "search_api_highlighting" : {
          "status" : 0,
          "weight" : "35",
          "settings" : {
            "prefix" : "\\u003Cstrong\\u003E",
            "suffix" : "\\u003C\\/strong\\u003E",
            "excerpt" : 1,
            "excerpt_length" : "256",
            "exclude_fields" : [],
            "highlight" : "always"
          }
        }
      }
    },
    "enabled" : "1",
    "read_only" : "0",
    "rdf_mapping" : []
  }');
  return $items;
}
