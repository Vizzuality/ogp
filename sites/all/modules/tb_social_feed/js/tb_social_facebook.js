(function($) {
    Drupal.TBFeedFacebook = Drupal.TBFeedFacebook || {};
    Drupal.TbSocialFeed = Drupal.TbSocialFeed || {};
    
    Drupal.TBFeedFacebook.fbGetAccessToken = function(e, scope, callback) {
        scope = scope || 'read_stream';
        FB.getLoginStatus(function(response) {            
            FB.login(function(response) {
                if (response.status == "connected") {
                    FB.api('/me', function(response) {                       
                       callback(response); 
                    });                    
                }
            }, {scope: scope});
        });
    }
    Drupal.TBFeedFacebook.addPageProfile = function(service, e) {
        var page_profile = $('#edit-facebook-fan-page-template>div');
        var cloned_div = $(page_profile).clone();
        cloned_div.find('input[type="text"]').val('');
        var timeStamp = new Date();
        timeStamp = timeStamp.getTime();
        cloned_div.find('input[type="text"]').attr('id', service + '_' + timeStamp);
        cloned_div.find('input[type="text"]').attr('name', 'facebook_fan_pages[]');
        $(e).before(cloned_div);
        return false;
    }
    /**
     * 
     * @returns {undefined}
     */
    Drupal.TbSocialFeed.defaultInterface = function(){
        $('.facebook-admin-profile').hide();
        //TODO - hack code
        $('.form-item-fan-page-template').hide();
    }
    Drupal.TbSocialFeed.addEvents =function() {        
        Drupal.TbSocialFeed.addEventFacebookLogin();
    }
    
    Drupal.TbSocialFeed.addEventFacebookLogin = function() {
        $('.tb-fb-login').click(function(){
            scope = "read_stream";
            Drupal.TBFeedFacebook.fbGetAccessToken($(this), scope, function(user){                
                var ref_user = '<a href="'+ user.link +'" target="_blank" class="fb-admin-account"> ' + user.name + '</a>';
                var html = 'You authorized this app with '+ ref_user +' Facebook account';
                $('.tb-fb-login').parent().html(html);
                //Ajax                 
                $.ajax ({
                        url: Drupal.settings.basePath +  'tb_social_feed/fb_user',
                        success: function(data) {
                            if (data.feed_type) {                                
                                $('input[name="facebook_admin_feed_type"][value='+data.feed_type+']').attr("checked", true);
                            } else {
                                $('input[name="facebook_admin_feed_type"]').removeAttr('checked');
                            }
                            $('.facebook-admin-profile').show();
                        }
                });
            });
        });
    }    
    $(document).ready(function() {
        $('body').prepend('<div id="fb-root"></div>');
//        FB.init({
//            appId: '588746591172770',
//            status: true,
//            cookie: true,
//            xfbml: true,
//            oauth: true
//        });
//        FB.Canvas.setAutoGrow();        

        // Add event on radios
        Drupal.TbSocialFeed.addEvents();
        Drupal.TbSocialFeed.defaultInterface();
    });
})(jQuery);

