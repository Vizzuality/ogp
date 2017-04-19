function getAbsolutePath() {
  const loc = window.location;
  const pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
  return loc.href.substring(0, loc.href.length - (
    (loc.pathname + loc.search + loc.hash).length - pathName.length)
  );
}

(function($) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      const page = settings.block_refresh.args[0];

      window.liveSettings={
        api_key:"5a2bcd52efad4b169c9543330d3187a4",
        picker: "#transifexSelector"
      };

      /////////////////
      // global actions
      /////////////////

      // listener for anchor smooth scrolling
      smoothScroll();

      //init trasnifex
      window.liveSettings.picker = '#transifexSelector';

      /////////////////
      // Routing action
      /////////////////

      // home page
      if ($(context).find('#homePage').length !== 0) {
        showHomePage();
        showSliderHomePage();
        addBanner('involved');
      }

      // stories
      if ($(context).find('#storiesPage').length !== 0) {
        showStoriesPage();
        addBanner('writestory');
        addBanner('newsletter');
      }
      if ($(context).find('#storiesSubmitPage').length !== 0) {
        addBanner('newsletter');
        showStoriesSubmitPage(settings.block_refresh.args[2]);
      }
      if ($(context).find('#storiesDetail').length !== 0) {
        addBanner('writestory');
        addBanner('newsletter');
        showStoryDetail(settings.block_refresh.args[1]);
        stripEmptyStrings();
      }

      // countries
      if ($(context).find('#countriesDetail').length !== 0) {
        addBanner('peopleCountry', settings.block_refresh.args[1]);
        addBanner('newsletter');
        showCountriesDetail(settings.block_refresh.args[1]);
      }
      if ($(context).find('#countriesPage').length !== 0) {
        addBanner('newsletter');
        showCountriesPage();
      }

      // themes
      if ($(context).find('#themesPage').length !== 0) {
        addBanner('newsletter');
        showThemesPage();
      }
      if ($(context).find('#themesDetail').length !== 0) {
        addBanner('newsletter');
        showThemesDetail(settings.block_refresh.args[2]);
      }

      // resources
      if ($(context).find('#groupResourcesPage').length !== 0) {
        addBanner('newsletter');
        showGroupResourcesPage();
      }
      if ($(context).find('#groupResourcesDetail').length !== 0) {
        addBanner('newsletter');
        showGroupResourcesDetail(settings.block_refresh.args[1]);
      }
      if ($(context).find('#resourcesDetail').length !== 0) {
        addBanner('newsletter');
        showResourcesDetail(settings.block_refresh.args[1]);
      }

      // document resources
      if ($(context).find('#documentResourcesPage').length !== 0) {
        addBanner('newsletter');
        showDocumentResourcePage();
        stripEmptyStrings();
      }

      if ($(context).find('#documentResourcesDetail').length !== 0) {
        addBanner('newsletter');
        stripEmptyStrings();
      }

      // commitments
      if ($(context).find('#modelCommitmentsDetail').length !== 0) {
        addBanner('newsletter');
        showModelCommitmentDetail(settings.block_refresh.args[1]);
      }
      if ($(context).find('#starredCommitmentsDetail').length !== 0) {
        addBanner('newsletter');
        showStarredCommitmentDetail(settings.block_refresh.args[1]); }
      if ($(context).find('#currentCommitmentsDetail').length !== 0) {
        addBanner('newsletter');
        showCurrentCommitmentDetail(settings.block_refresh.args[1]);
      }
      if ($(context).find('#irmCommitmentsDetail').length !== 0) {
        addBanner('newsletter');
        showIrmCommitmentDetail(settings.block_refresh.args[1]);
      }

      // People Involved
      if ($(context).find('#peopleInvolved').length !== 0) {
        addBanner('newsletter');
      }

      // News and Events

      if ($(context).find('#newsEventsPage').length !== 0) {
        showNewsEventsPage();
        addBanner('writestory');
        addBanner('newsletter');
      }

      if ($(context).find('#newsTemplate').length !== 0) {
        addBanner('writestory');
        addBanner('newsletter');
      }

      if ($(context).find('#eventsTemplate').length !== 0) {
        addBanner('writestory');
        addBanner('newsletter');
      }

      // Working Group
      if ($(context).find('#workingGroupList').length !== 0) {
        showGroupList();
        addBanner('newsletter');
      }

      if ($(context).find('#workingGroupDetail').length !== 0) {
        showWorkingGroupDetail(settings.block_refresh.args[1]);
        addBanner('newsletter');
      }

      // Pages
      if ($(context).find('#pagesList').length !== 0) {
        showPageList();
        addBanner('newsletter');
      }

      if ($(context).find('#irmReportsPage').length !== 0) {
        showIrmReports();
        addBanner('newsletter');
      }

      // Pages
      if ($(context).find('#loginPage').length !== 0) {
        addBanner('newsletter');
      }

      if ($(context).find('#aboutPage').length !== 0) {
        showAboutPages('newsletter');
        addBanner('newsletter');
      }

      if ($(context).find('#searchPage').length !== 0) {
        searchPage();
        addBanner('newsletter');
      }

      if ($(context).find('#resultSearchPage').length !== 0) {
        featuresResultPage();
      }

      //build subscribe modal
      buildSubscribeModal();

      //add comments
      if ($(context).find('#disqus_thread').length !== 0) {
        showComments(settings.block_refresh.args[1]);
      }

    }
  };
})(jQuery);
