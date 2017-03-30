(function($) {

  Drupal.TBFeed = Drupal.TBFeed || {};
  Drupal.TBFeed.addAccount = function(service) {
    var accounts = $('#edit-' + service + '-add-account-wrapper').find('fieldset');
    var account = accounts[0];
    var cloned_div = $(account).clone();
//  cloned_div.find('input[name="' + service + '_feed_account[]"]').val('');
    cloned_div.find('input[type="text"]').val('');
    var timeStamp = new Date();
    timeStamp = timeStamp.getTime();
    cloned_div.attr('id', service + '_' + timeStamp);
    cloned_div.appendTo('#edit-' + service + '-accounts-wrapper > .fieldset-wrapper');
    return false;
  };
  Drupal.TBFeed.verifyAccount = function(url, el) {
    var value = $(el).parent().find('input.account').val();
    var strUrl = url + value;
    window.open(strUrl, '_blank');
  };
  Drupal.TBFeed.verifyVimeoAccount = function(url, el) {
    var value = $(el).parent().find('input.account').val();
    var strUrl = url + value + '/all_videos.xml';
    window.open(strUrl, '_blank');
  };
  Drupal.TBFeed.deleteAccount = function(element) {
    $(element).parent().parent().remove();
    return false;
  };
  Drupal.TBFeed.saveAndFeed = function() {
    $('input[name="tb_social_feed_manually"]').val(1);
  };
  
  var instagramJsonCallback = function () {
    
  };
  
  Drupal.behaviors.instagram = {
    attach: function(context) {    
      $('#tb-feed-admin-settings').submit(function() {
        var services = $('input[name="tb_social_feed_services"]').val();
        /*
         services = services.split(' ');
         for(i = 0; i < services.length; i ++) {
         service = services[i];
         var accounts = $('#edit-' + service + '-accounts-wrapper').find('fieldset');
         var accounts_name = [];
         for(j = 0; j < accounts.length; j ++) {
         accounts_name.push($(accounts[j]).find('input[name="' + service + '_feed_account[]"]').val());
         }
         accounts_hidden = $('input[name="' + service + '_accounts_info"]');
         if (accounts_hidden.length) {
         accounts_hidden.val(JSON.stringify(accounts_name));
         }
         }
         */
      });
    }
  };

})(jQuery);
