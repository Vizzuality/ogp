<?php
/**
 * @file
 * ogp_blog.rules_defaults.inc
 */

/**
 * Implements hook_default_rules_configuration().
 */
function ogp_blog_default_rules_configuration() {
  $items = array();
  $items['rules_redirect_to_blog_page_after_registration'] = entity_import('rules_config', '{ "rules_redirect_to_blog_page_after_registration" : {
      "LABEL" : "Redirect to About page after registration",
      "PLUGIN" : "reaction rule",
      "OWNER" : "rules",
      "REQUIRES" : [ "rules" ],
      "ON" : { "user_insert" : [] },
      "DO" : [ { "redirect" : { "url" : "node\\/1002", "force" : 0 } } ]
    }
  }');
  $items['rules_send_email_for_new_blog'] = entity_import('rules_config', '{ "rules_send_email_for_new_blog" : {
      "LABEL" : "Send email for new blog",
      "PLUGIN" : "reaction rule",
      "OWNER" : "rules",
      "REQUIRES" : [ "rules" ],
      "ON" : { "node_insert--blog_post" : { "bundle" : "blog_post" } },
      "DO" : [
        { "mail" : {
            "to" : "blogeditor@opengovpartnership.org",
            "subject" : "New blog post from [node:author]: [node:title]",
            "message" : "The user [node:author] has posted a new blog post entitled \\u0022[node:title]\\u0022\\r\\n\\r\\nReview and approve the post here:\\r\\n[node:url]\\r\\n\\r\\nReview all published and pending content here:\\r\\n[site:url]admin\\/workbench\\r\\n",
            "language" : [ "" ]
          }
        },
        { "drupal_message" : { "message" : "Your post has been submitted to an editor for review." } }
      ]
    }
  }');
  return $items;
}
