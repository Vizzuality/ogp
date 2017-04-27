"use strict";

function getAbsolutePath() {
  var loc = window.location;
  var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
  return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

(function ($) {
  Drupal.behaviors.myBehavior = {
    attach: function attach(context, settings) {
      var page = settings.block_refresh.args[0];

      window.liveSettings = {
        api_key: "5a2bcd52efad4b169c9543330d3187a4",
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

      // General
      twitterLink();

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
        showStarredCommitmentDetail(settings.block_refresh.args[1]);
      }
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
        peopleInvolved(settings.block_refresh.args[1]);
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

      if ($(context).find('#tagDetail').length !== 0) {
        tagsPage();
        addBanner('newsletter');
      }

      if ($(context).find('#resultSearchPage').length !== 0) {
        featuresResultPage();
      }

      if ($(context).find('#page404').length !== 0) {
        addBanner('newsletter');
      }

      if ($(context).find('#node').length !== 0) {
        addBanner('newsletter');
      }

      //build subscribe modal
      buildSubscribeModal();

      //add comments
      if ($(context).find('#disqus_thread').length !== 0) {
        showComments(settings.block_refresh.args[1]);
      }

      if ($(context).find('#aboutMenu').length !== 0) {
        aboutMenu();
      }

      // convert all custom views_templates
      $('.form-select').select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-tall'
      });

      if ($(context).find('#loginPage').length !== 0) {
        loginPage();
      }
    }
  };
})(jQuery);
'use strict';

function convertPostDate(date, format) {
  var dateString = new Date(date * 1e3);
  var dd = dateString.getDate();
  var mm = dateString.getMonth() + 1; //January is 0!
  var yyyy = dateString.getFullYear();

  if (format === 'dd/mm/yyyy') {
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
  }

  dateString = dd + '/' + mm + '/' + yyyy;

  return dateString;
}

function convertEventDate(date) {
  var myDate = moment(date, 'YYYY-M-DD HH:mm:ss');
  return myDate.format('MMMM D, YYYY - hh:mm');
}

function dateDiff(date) {
  return moment().diff(date, 'days');
}
'use strict';

function smoothScroll() {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
}
'use strict';

function getAuthors(data) {
  var authorString = '';
  if (data[0]) {
    data.forEach(function (author, index) {
      if (index === data.length - 1) {
        authorString += '' + author.label;
      } else {
        authorString += author.label + ', ';
      }
    });
  }
  return authorString;
}

function stripEmptyStrings() {
  $('p').each(function () {
    var $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length == 0) $this.remove();
  });
}
'use strict';

function addDots(string, limit) {
  var dots = '...';
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }

  return string;
}
'use strict';

function aboutMenu() {
  (function ($) {

    $('.parent .icon').click(function () {
      var id = $(this).data('value');
      $('#' + id + '.sub-menu').toggleClass('-open');
      $('#' + id).toggleClass('-open');
    });
  })(jQuery);
}
'use strict';

function closeAccordionSection() {
  $('.c-accordion .accordion-section-title').removeClass('active');
  $('.c-accordion .accordion-section-content').slideUp(200).removeClass('open');
}

function getPageCount(dataCount, threshold) {
  return Math.ceil(dataCount / threshold);
}

function appendAccordionItems(view, data) {
  var accordion = $('#' + view + ' .c-accordion');
  var html = '';
  data.forEach(function (item) {
    html += '\n      <div class="accordion-section">\n        <a class="accordion-section-title text -small-bold -black" href="#accordion-' + view + '-' + item.id + '">' + item.label + '<svg class="icon -blue -small"><use xlink:href="#icon-down-arrow"></use></svg></a>\n        <div id="accordion-' + view + '-' + item.id + '" class="accordion-section-content">\n        <div class="text -body-content body-container">' + item.body.value + '</div>\n        <div class="body-container -link">\n          <a class="text -blue link-accordion" href="/' + item.alias + '">See more <svg class="icon -blue -medium"><use xlink:href="#icon-arrow"></use></svg></a>\n        </div>\n        </div>\n      </div>\n    ';
  });
  accordion.html(html);
}

function setAccordionListeners(view) {
  $('#' + view + ' .accordion-section-title').click(function (e) {
    var currentAttrValue = $(this).attr('href');
    if ($(e.target).is('.active')) {
      closeAccordionSection();
    } else {
      closeAccordionSection();
      $(this).addClass('active');
      $('#' + view + ' .c-accordion ' + currentAttrValue).slideDown(200).addClass('open');
    }
    e.preventDefault();
  });
}

function initAccordion(view, data) {
  appendAccordionItems(view, data);
  setAccordionListeners(view);
}
'use strict';

function addBanner(type, id) {
  switch (type) {
    case 'writestory':
      $('.banners-container').append('\n        <div class="l-full-width -blue -short -center">\n          <div class="row">\n            <div class="column small-12 medium-7 large-9">\n              <h3 class="text -title-small -white">Have a story worth sharing? </h3>\n              <p class="text -white">\n                Write your own story and tell us how your government and civil society are working\n                together to accomplish open government commitments.\n              </p>\n            </div>\n            <div class="column small-12 medium-5 large-3 vertical">\n              <a class="c-button -box -large -center" href="/submit-story">write story</a>\n            </div>\n          </div>\n        </div>\n      ');
      break;
    case 'newsletter':
      $('.banners-container').append('\n        <div class="l-full-width -black -short -center">\n          <div class="row">\n            <div class="column small-12 medium-7 large-9">\n              <h3 class="text -title-small -white">OGP\u2019s monthly newsletter</h3>\n              <p class="text -white">\n                Helps goverments, civil society actors and concerned citizens stay informed\n              </p>\n            </div>\n            <div class="column small-12 medium-5 large-3 vertical">\n                <span class="c-button -box -large -center js-subscribeModalOpen">Subscribe</span>\n            </div>\n          </div>\n        </div>\n      ');
      break;
    case 'involved':
      $('.banners-container').append('\n        <div class="l-full-width -black -short -center">\n          <div class="row">\n            <div class="column small-12 medium-7 large-9">\n              <h3 class="text -title-small -white">Get involved</h3>\n              <p class="text -white">\n                For the Open Government Partnership model to work, lots of people need to get involved\n              </p>\n            </div>\n            <div class="column small-12 medium-5 large-3 vertical">\n                <a class="c-button -box -large -center" href="/resources">Resources</a>\n            </div>\n          </div>\n        </div>\n      ');
      break;
    case 'peopleCountry':
      $.getJSON('/apiJSON/countries/' + id, function (data) {
        $('.banners-container').append('\n            <div class="l-full-width -blue -short -center">\n              <div class="row">\n                <div class="column small-12 medium-7 large-9">\n                  <h3 class="text -title-small -white">People involved from ' + data.data[0].label + '</h3>\n                  <p class="text -white">\n                    For the Open Government Partnership model to work, lots of people need to get involved\n                  </p>\n                </div>\n                <div class="column small-12 medium-5 large-3 vertical">\n                  <a class="c-button -box -large -center" href="/submit-story">EXPLORE PEOPLE</a>\n                </div>\n              </div>\n            </div>\n          ');
      });
      break;
    default:
      break;
  }
}
'use strict';

function showComments(id) {
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    var disqus_config = function disqus_config() {
        this.page.url = window.location.href; // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function () {
        // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document,
            s = d.createElement('script');

        s.src = '//opengovpartnership.disqus.com/embed.js'; // IMPORTANT: Replace EXAMPLE with your forum shortname!

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
}
'use strict';

function buildExploreMoreTiles(endPoint, filter, value) {
  var filters = '';
  if (filter) {
    filters = 'filter[' + filter + ']=' + value + '&';
  }
  $.getJSON('/apiJSON/' + endPoint + '?' + filters + 'page[size]=4', function (data) {
    if (data.data.length) {
      var tiles = data.data.slice(0, 4);
      appendTiles(tiles, $('.c-explore-more .container'), 4);
    }
    removeLoader('.c-explore-more');
  });
}
'use strict';

function buildLink(link) {
  var html = '\n    <div class="c-link">\n      <div class="link">\n        <svg class="icon -blue"><use xlink:href="#icon-external-link"></use></svg>\n        <a class="text -link -blue" href="/' + link.link.url + '" target="_blank" rel="nofollow">' + link.label + '</a>\n      </div>\n      ' + (link.description ? '<p class="text -footnote">Description lorem ipsum leo isus, porta ac consectetur ac, vestibulum at eras.</p>' : '') + '\n    </div>\n  ';
  return html;
}

function buildRelLink(link) {
  var html = '\n    <div class="c-link">\n      <div class="link">\n        <svg class="icon -blue"><use xlink:href="#icon-external-link"></use></svg>\n        <a class="text -link -blue" href="/' + link.alias + '" rel="nofollow">' + link.label + '</a>\n      </div>\n      ' + (link.description ? '<p class="text -footnote">Description lorem ipsum leo isus, porta ac consectetur ac, vestibulum at eras.</p>' : '') + '\n    </div>\n  ';
  return html;
}
'use strict';

function removeLoader(container, removeList, hide) {
  if (hide) {
    $(container + ' .c-loader').addClass('-hidden');
  } else {
    $(container + ' .c-loader').remove();
  }

  // additional items to remove -hidden class from
  if (removeList) {
    removeList.forEach(function (item) {
      $(item).removeClass('-hidden');
    });
  }
}

function showLoader(container) {
  $(container + ' .c-loader').removeClass('-hidden');
}
'use strict';

function initModal(id, template, customClass) {
  var html = '\n    <div id="' + id + '" class="c-modal ' + customClass + '">\n      <div class="modal-overlay"></div>\n      <div class="modal-container">\n        <svg class="icon close-icon js-close-modal"><use xlink:href="#icon-close"></use></svg>\n        <div class="modal-content">\n          ' + template + '\n        </div>\n      </div>\n    </div>\n  ';
  $('body').append(html);
  setModalListeners(id);
}

function closeModal(id) {
  $('#' + id).removeClass('-open');
}

function openModal(id) {
  $('#' + id).addClass('-open');
  $('body').addClass('-fixed');
}

function updateModalContainer(id, template) {
  $('#' + id + ' .modal-content').html(template);
}

function setModalListeners(id) {
  $('.js-' + id + 'Open').on('click', function () {
    openModal(id);
  });
  $('.js-close-modal').on('click', function () {
    closeModal(id);
  });
  $('.modal-overlay').on('click', function () {
    closeModal(id);
  });
  if (id === 'subscribeModal') {
    onChangeNewsletterListener();
  }
}

function onChangeNewsletterListener() {
  $('.newsletter-selector').on('click', function () {
    var newsletterId = 'http://opengovpartnership.us3.list-manage.com/subscribe/post?u=b25f647af089f5f52485a663d&id=' + $(this).data('option');
    $('.newsletter-selector').removeClass('-selected');
    $(this).addClass('-selected');
    $('#subscribeModal .c-form').attr('target', newsletterId);
  });
}

function buildSubscribeModal() {
  var subscribeModalTemplate = '\n    <form class="c-form validate" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" action="http://opengovpartnership.us3.list-manage.com/subscribe/post?u=b25f647af089f5f52485a663d&id=874e29c81c" method="POST">\n      <div class="content-wrapper">\n        <h3 class="text -module-title with-padding">Our Newsletters</h3>\n        <label class="text -small-bold -blue" for="email">Email</label>\n        <input type="email" required="required" placeholder="Your email address" id="mce-EMAIL" name="EMAIL">\n        <label class="text -small-bold -blue">Subscribe to</label>\n        <div class="selector-boxes">\n          <div class="text newsletter-selector -selected -interactive" data-option="874e29c81c">OGP Newsletter</div>\n          <div class="text newsletter-selector -interactive" data-option="20323ef712">OGP Gazette</div>\n          <div class="text newsletter-selector -interactive" data-option="ec2455b5b5">Bolet\xEDn de OGP</div>\n        </div>\n      </div>\n      <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="c-button -tall -green-back -white" value="subscribe">\n    </form>\n  ';
  initModal('subscribeModal', subscribeModalTemplate, '-subscribe');
}

function buildMapModal() {
  var mapModalTemplate = '';
  initModal('mapModal', mapModalTemplate, '-map');
}

function updateMapModal(countryId, type, countriesData) {
  $('#mapModal .modal-content').html('');
  setMapModalContent('mapModal', type, countryId, countriesData);
}

function setDataToModal(id, html) {
  updateModalContainer(id, html);
  removeLoader('.l-map', null, true);
  openModal(id);
}

function pushDefaultModal(id, query, countryData, dataLabel, buttonText, buttonLink, modalType, secondData) {
  $.getJSON('apiJSON/' + query, function (data) {
    var dataInfo = '';
    var id_people = [];
    if (dataLabel === 'people involved') {
      if (secondData.data.length > 0) {
        for (var i = 0; i < secondData.data.length; i += 1) {
          id_people[i] = secondData.data[i].id;
          dataInfo += '\n            <a class="text -small-bold -blue" href="' + secondData.data[i].alias + '">' + secondData.data[i].label + ' (point of contact)</a>\n            <p class="text -body-content">' + addDots(secondData.data[i].body.value, 100) + '</p>\n          ';
        }
      }
    }

    if (data.data.length > 0) {
      var trimmedData = modalType === 'slider' ? data.data.slice(0, 3) : data.data;
      trimmedData.forEach(function (data) {
        if (modalType === 'list') {
          dataInfo += '\n            <a href="' + data.alias + '">\n              <h2 class="text -title-x-small">' + data.label + '</h2>\n            </a>\n          ';
        } else if (modalType === 'grid') {
          if ($.inArray(data.id, id_people) === -1) {
            dataInfo += '\n              <a class="text -small-bold -blue" href="' + data.alias + '">' + data.label + '</a>\n              <p class="text -body-content">' + addDots(data.body.value, 100) + '</p>\n            ';
          }
        } else if (modalType === 'slider') {
          dataInfo += '\n            <div class="slide -stories">\n              <a href="' + (data.topic[0] ? data.topic[0].alias : '') + '" class="text -small-bold -blue">' + (data.topic[0] ? data.topic[0].label : '') + '</a>\n              <a href="/' + data.alias + '" class="text -section-title-small">' + data.label + '</a>\n              <span class="text date-text -small-bold">' + moment.unix(data.created).format('D MMMM YYYY') + '</span>\n              <p class="text -meta">' + (data.author[0] ? data.author[0].label : '') + '</p>\n            </div>\n          ';
        }
      });
    }

    if (dataLabel === 'starred-tab') {
      var html = '\n        <div class="modal-header">\n          <div class="header-info">\n            <h3 class="text -module-title">' + countryData.data[0].label + '</h3>\n            <p class="text -meta">Member since ' + moment.unix(countryData.data[0].memberSince).format('YYYY') + ', Action plan ' + countryData.data[0].action_plan_count + '</p>\n          </div>\n          <div class="c-data-number">\n            <h3 class="text -number">' + data.count + '</h3>\n            <p class="text -small-bold">' + dataLabel + '</p>\n          </div>\n        </div>\n        <div class="content-wrapper -scroll ' + (modalType === 'slider' ? 'stories-slider' : '') + '">\n          ' + dataInfo + '\n        </div>\n        <div class="button-container -fixed">\n          <a href="/' + buttonLink + '" class="c-button -tall -green-back -box">' + buttonText + '</a>\n          <a href="' + countryData.data[0].alias + '" class="c-button -tall -green-back -box">VIEW COUNTRY</a>\n        </div>\n      ';
      setDataToModal(id, html);
      removeLoader('body', null, true);
    } else {
      var _html = '\n        <div class="modal-header">\n          <div class="header-info">\n            <h3 class="text -module-title">' + countryData[0].label + '</h3>\n            <p class="text -meta">Member since ' + moment.unix(countryData[0].memberSince).format('YYYY') + ', Action plan ' + countryData[0].action_plan_count + '</p>\n          </div>\n          <div class="c-data-number">\n            <h3 class="text -number">' + data.count + '</h3>\n            <p class="text -small-bold">' + dataLabel + '</p>\n          </div>\n        </div>\n        <div class="content-wrapper -scroll ' + (modalType === 'slider' ? 'stories-slider' : '') + '">\n          ' + dataInfo + '\n        </div>\n        <div class="button-container -fixed">\n          <a href="/' + buttonLink + '" class="c-button -tall -green-back -box">' + buttonText + '</a>\n          <a href="' + countryData[0].alias + '" class="c-button -tall -green-back -box">VIEW COUNTRY</a>\n        </div>\n      ';
      setDataToModal(id, _html);
    }
  });
}

function pushTabStarredModal(id, dataStarred) {}

function pushSmallModal(id, query, countryData, firstDataLabel, secondDataLabel, buttonText, buttonLink) {

  $.getJSON('apiJSON/' + query, function (data) {
    var html = '\n      <div class="content-wrapper">\n        <h3 class="text -module-title">' + countryData[0].label + '</h3>\n        <p class="text -meta">Member since ' + moment.unix(countryData[0].memberSince).format('YYYY') + '</p>\n        <div class="data-container">\n          <div class="c-data-number -with-padding">\n            <h4 class="text -number">' + data.count + '</h4>\n            <span class="text -small-bold">' + firstDataLabel + '</span>\n          </div>\n          <div class="c-data-number -with-padding">\n            <h4 class="text -number">3</h4>\n            <span class="text -small-bold">' + secondDataLabel + '</span>\n          </div>\n        </div>\n      </div>\n      <div class="button-container">\n        <a class="c-button -box -tall -green-back -white" href="' + buttonLink + '">' + buttonText + '</a>\n        <a class="c-button -box -tall -green-back -white" href="' + countryData[0].alias + '">View country</a>\n      </div>\n    ';
    setDataToModal(id, html);
  });
}

function setMapModalContent(id, type, countryId, countriesData) {
  var themeCommitmentAlias = 'theme';
  if (type === 'starred-tab') {
    pushTabStarredModal(id, countryId);
    pushDefaultModal(id, 'starredcommitments?filter[country]=' + countryId, countriesData, 'starred-tab', 'latest stories', '/stories', 'list', '');
  } else {
    var countryData = countriesData.filter(function (country) {
      return country.id == countryId;
    });
    switch (type) {
      case 'actionPlan':
        pushSmallModal(id, 'irm_commitments?filter[country]=' + countryId, countryData, 'commitments', 'themes covered', 'latest stories', 'stories', '');
        break;
      case 'starred':
        pushDefaultModal(id, 'starredcommitments?filter[country]=' + countryId, countryData, 'starred commitments', 'latest stories', 'stories', 'list', '');
        break;
      case 'event':
        pushDefaultModal(id, 'events?filter[country]=' + countryId, countryData, 'events', 'go to events', 'news-and-events', 'list', '');
        break;
      case 'commitment':
        if ($('.select-legend-dropdown').find(':selected').data('value')) {
          themeCommitmentAlias = $('.select-legend-dropdown').find(':selected').data('value');
        }
        var currentFilter = $('.select-legend-dropdown').val() ? '&filter[theme_id]=' + $('.select-legend-dropdown').val() : '';
        pushDefaultModal(id, 'current_commitment?filter[country]=' + countryId + currentFilter, countryData, 'current commitments', 'explore this theme', '' + themeCommitmentAlias, 'list', '');
        break;
      case 'people':
        $.getJSON('apiJSON/people?filter[country_poc]=' + countryId, function (poc) {
          pushDefaultModal(id, 'people?filter[country]=' + countryId, countryData, 'people involved', 'latest stories', 'stories', 'grid', poc);
        });
        break;
      case 'stories':
        pushDefaultModal(id, 'stories?filter[country]=' + countryId + '&sort=-created', countryData, 'stories', 'latest stories', 'stories', 'slider', '');
        break;
      default:
        break;
    }
  }
}
'use strict';

function buildPagination(page, totalPages) {
  var numbersPager = '';
  if (page > 1) {
    numbersPager += '<li class="prev text -pagination onClickPagination" data-value="' + (page - 1) + '">back</li>';
  }
  // previous pages
  for (var j = page - 4; j < page; j += 1) {
    if (j < 1) continue;

    if (j === page - 4 && j >= 2) {
      numbersPager += '<li class="text -pagination onClickPagination" data-value="1">1</li>';
      numbersPager += '<li class="text -pagination onClickPagination" data-value="' + j + '">\u2026</li>';
      continue;
    }

    if (j <= totalPages) {
      if (j < page) {
        numbersPager += '<li class="text -pagination onClickPagination" data-value="' + j + '">' + j + '</li>';
      }
    }
  }
  // next pages
  for (var _j = page; _j < page + 5; _j += 1) {
    if (_j <= totalPages) {
      if (_j === page) {
        numbersPager += '<li class="-selected text -pagination onClickPagination" data-value="' + _j + '">' + _j + '</li>';
        continue;
      }

      if (_j < page + 4) {
        numbersPager += '<li class="text -pagination onClickPagination" data-value="' + _j + '">' + _j + '</li>';
      }

      if (_j === page + 4) {
        numbersPager += '<li class="text -pagination onClickPagination" data-value="' + _j + '">\u2026</li>';
        numbersPager += '<li class="text -pagination onClickPagination" data-value="' + totalPages + '">' + totalPages + '</li>';
      }
    }
  }
  if (page < totalPages) {
    numbersPager += '<li class="next text -pagination onClickPagination" data-value="' + (page + 1) + '">next</li>';
  }
  return numbersPager;
}

function initPagination(page, totalPages, containerId) {
  var container = $('#' + containerId + ' .c-pagination');
  if (totalPages > 1) {
    var paginationHtml = buildPagination(page, totalPages);
    container.html(paginationHtml);
  } else {
    container.html('');
  }
}
"use strict";

function showNoResults(container, text, size, color, iconSize, type) {
  var html = "\n    <div class=\"c-no-results -" + size + " column small-12\">\n      <svg class=\"icon -" + iconSize + "\"><use xlink:href=\"#icon-compass-" + type + "\"></use></svg>\n      <p class=\"text -" + color + "\">" + text + "</p>\n    </div>\n  ";
  $(container).html(html);
}

function hideNoResults(container) {
  $(container + " .c-no-results").remove();
}
'use strict';

function setSearchPlaceholder(container, label) {
  container.attr('placeholder', 'Search ' + label.toLowerCase() + '...');
}

function setSearchListeners() {
  $('.c-search-bar input').keyup(function () {
    var activeTab = $('#themesTiles .c-tabs .-selected').data('node');

    // listen for type ahead
    var valueInput = $(this).val();
    valueInput = valueInput.toLowerCase();
    $('.c-tile').each(function () {
      if (activeTab) {
        if ($('.tile', this).html().toLowerCase().indexOf(valueInput) !== -1 && $(this).data('group') === activeTab) {
          $(this).css('display', 'block');
        } else {
          $(this).css('display', 'none');
        }
      } else {
        if ($('.tile', this).html().toLowerCase().indexOf(valueInput) !== -1) {
          $(this).css('display', 'block');
        } else {
          $(this).css('display', 'none');
        }
      }
    });
    // check for zero results
    var results = $('.c-tile').filter(function () {
      return $(this).css('display') === 'block';
    }).length;

    // show empty results
    if (results === 0) {
      showNoResults('#noResultsContainer', 'No resources available', 'tall', 'grey', 'xxlarge', 'blue');
    } else {
      hideNoResults('#noResultsContainer');
    }
  });
}
"use strict";

function appendSelectOptions(selector, options) {
  options.forEach(function (option) {
    var html = "\n      <option value=\"" + option + "\" data-id=" + options.id + ">" + option + "</option>\n    ";
    $(selector).append(html);
  });
}

function appendSelectOptionsFromData(selector, options) {
  options.forEach(function (option) {
    var html = "\n      <option value=\"" + option.id + "\" data-value=\"" + option.alias + "\">" + option.label + "</option>\n    ";
    $(selector).append(html);
  });
}

function getSelectOptionsFromData(data, optionName, type) {
  var options = [];
  data.forEach(function (item) {
    if (item.type && type.some(function (index) {
      return item.type.indexOf(index) >= 0;
    }) && item.date) {
      var startDate = void 0,
          endDate = void 0;
      startDate = moment(item.date.value).year();
      if (options.indexOf(startDate) === -1) {
        options.push(startDate);
      }
      if (item.date.value2) {
        endDate = moment(item.date.value2).year();
        if (options.indexOf(endDate) === -1) {
          options.push(endDate);
        }
      }
    }
  });
  options.sort();
  options.reverse();

  return options;
}

function buildSelector(selector, options) {
  //build selector
  appendSelectOptions(selector, options);
}
'use strict';

function createTable(data, type) {
  var html = '';
  var tableContainer = $('.container-info-table');
  var length = data.data.length;
  switch (type) {
    case 'pages':
      for (var i = 0; i < length; i += 1) {
        if (data.data[i].body) {
          html += '\n            <tr class="text">\n              <th class="text -small-bold">' + data.data[i].label + '</th>\n              <th class="text">' + data.data[i].page_category.label + '</th>\n              <th class="text -blue -capitalize">' + moment.unix(data.data[i].date).startOf('month').fromNow() + '</th>\n              <th><a class="text -blue -capitalize" href="' + data.data[i].alias + '">Go to Page <svg class="icon -blue -medium"><use xlink:href="#icon-arrow"></use></svg></a></th>\n            </tr>\n          ';
        }
      }
      break;
    case 'groups':
      for (var _i = 0; _i < length; _i += 1) {
        html += '\n          <tr class="text">\n            <th class="text -small-bold">' + data.data[_i].label + '</th>\n            <th class="text -body">\n              ' + addDots(data.data[_i].body.value, 120) + '\n            </th>\n            <th class="text">' + data.data[_i].name.name + '</th>\n            <th class="text -blue -capitalize">' + moment.unix(data.data[_i].date).startOf('month').fromNow() + '</th>\n            <th><a class="text -blue -capitalize" href="' + data.data[_i].alias + '">Go to Working Group <svg class="icon -blue -medium"><use xlink:href="#icon-arrow"></use></svg></a></th>\n          </tr>\n        ';
      }
      break;
    default:
      break;
  }

  tableContainer.html(html);
}
'use strict';

function setTabListeners(callback) {
  $('.tab').click(function (e) {
    if (!$(e.target).hasClass('-selected')) {
      var id = e.target.dataset.node;
      var label = e.target.innerHTML;
      $('.tab').removeClass('-selected');
      $(e.target).addClass('-selected');
      callback(id, label);
    }
  });
}

function initTabs() {
  $('.tab').first().addClass('-selected');
}

function buildTabs(data, tabsContainer, callback) {
  data.forEach(function (item) {
    var html = '\n      <li class="tab text -tab" data-node="' + item.id + '">' + item.label + '</li>\n    ';
    tabsContainer.append(html);
  });
  initTabs();
  setTabListeners(callback);
}
'use strict';

// append tiles to div
function appendTilesWithoutBackground(data, container, gridNum, customClass) {
  var gridWidth = 12 / gridNum;
  if (data.length !== 0) {
    data.forEach(function (item) {
      var html = '\n        <div class="column small-12 medium-' + gridWidth + ' c-tile ' + (customClass ? customClass : '') + '" data-group="' + (item.group ? item.group : '') + '">\n          <a href="/' + item.alias + '" class="tile">\n            <span class="text -tile -white">\n              ' + item.label + '\n            </span>\n          </a>\n        </div>\n      ';
      container.append(html);
    });
  }
}

function appendTiles(data, container, gridNum, customClass) {
  var gridWidth = 12 / gridNum;
  if (data.length !== 0) {
    data.forEach(function (item) {
      var html = '\n        <div class="column small-12 medium-' + gridWidth + ' c-tile ' + (customClass ? customClass : '') + '" data-group="' + (item.group ? item.group : '') + '">\n          <a href="/' + item.alias + '" class="tile" style="background-image: url(\'' + (item.image ? item.image : '') + '\')">\n            <div class="' + (item.image ? 'overlay' : '') + '"></div>\n            <span class="text -tile -white">\n              ' + item.label + '\n            </span>\n          </a>\n        </div>\n      ';
      container.append(html);
    });
  }
}

function appendTilesStandards(data, container, gridNum, customClass) {
  var gridWidth = 12 / gridNum;
  if (data.length !== 0) {
    data.forEach(function (item) {
      var html = '\n        <div class="column small-12 medium-4 large-' + gridWidth + ' c-tile ' + (customClass ? customClass : '') + '" data-group="' + (item.group ? item.group : '') + '">\n          <a href="" class="tile" style="background-image: url(\'' + (item.image ? item.image : '') + '\')">\n            <div class="' + (item.image ? 'overlay' : '') + '"></div>\n            <span class="text -tile -white">\n              ' + item + '\n            </span>\n          </a>\n        </div>\n      ';
      container.append(html);
    });
  }
}

function appendSmallTiles(data, topContainer, gridNum, customClass) {
  var container = $(topContainer + ' .data-tiles');
  var gridWidth = 12 / gridNum;
  if (data.length > 0) {
    data.forEach(function (item) {
      var html = '\n        <div class="column small-12 large-' + gridWidth + ' c-tile ' + (customClass ? customClass : '') + '" data-group="' + (item.group ? item.group : '') + '">\n          <a href="/' + item.alias + '" class="tile" style="background-image: url(\'' + (item.image ? item.image : '') + '\')">\n            <div class="' + (item.image ? 'overlay' : '') + '"></div>\n            <span class="text -tile -white">\n              ' + item.label + '\n            </span>\n          </a>\n        </div>\n      ';
      container.append(html);
    });
  }
}

function appendTilesIRM(countries, topContainer) {
  var html = '';
  countries.forEach(function (country) {
    html += '\n      <div class="column small-12 medium-6">\n        <div class="c-country-tile" id="country-report-' + country.id + '">\n          <a class="text -title-x-small" href="' + country.alias + '">' + country.label + '<svg class="icon -blue -medium arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use></svg></a>\n          <div class="row data-tiles">\n    ';
    var reportsTrimmed = country.irm_reports.splice(0, 2);
    reportsTrimmed.forEach(function (report) {
      if (report.type) {
        html += '\n        <div class="column small-12 large-6 c-tile -short">\n          <a href="' + report.alias + '" class="tile">\n            <span class="text -tile -white">' + report.label + '</span>\n          </a>\n        </div>\n        ';
      }
    });
    html += '</div></div></div>';
  });
  removeLoader('#tab-loader', null, true);
  $('' + topContainer.selector).append(html);
}

function appendTilesComments(countries, topContainer) {
  var html = '';
  countries.forEach(function (country) {
    html += '\n      <div class="column small-12 medium-6">\n        <div class="c-country-tile" id="country-comment-' + country.id + '">\n          <a class="text -title-x-small" href="' + country.alias + '">' + country.label + '<svg class="icon -blue -medium arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use></svg></a>\n          <div class="row data-tiles">\n    ';
    var reportCommentsTrimmed = country.irm_report_comments.splice(0, 2);
    reportCommentsTrimmed.forEach(function (report) {
      if (report.type) {
        html += '\n          <div class="column small-12 large-6 c-tile -short">\n            <a href="' + report.alias + '" class="tile">\n              <span class="text -tile -white">' + report.label + '</span>\n            </a>\n          </div>\n        ';
      }
    });
    html += '</div></div></div>';
  });
  $('' + topContainer.selector).append(html);
}

function appendTilesEvent(data, container) {
  if (data.length > 0) {
    var html = '';
    data.forEach(function (item) {
      html += '\n        <div class="small-12 medium-3 event-tile-container">\n          <div>\n            <h3 class="text -title-x-small">' + moment(item.date.value).format('MMMM, DD') + '</h3>\n            <span class="text language-text">Language: ' + (item.language ? item.language : 'not specified') + '</span>\n          </div>\n          <div>\n            <a class="text -interactive -blue" href="' + item.alias + '">' + item.label + '</a>\n          </div>\n        </div>\n      ';
    });
    container.html(html);
  }
}

// append tiles to div
function appendTilesDetailed(data, container, gridNum) {
  var gridWidth = 12 / gridNum;
  var html = '';
  var limitTopics = 5;
  data.forEach(function (item) {
    // get variables
    var topicsHtml = '';
    var authorsHtml = '';

    // build topics
    if (item.topic[0]) {
      // item.topic.forEach(function(topic ,index) {
      //   if (index === limitTopics && item.topic.length > limitTopics) {
      //     topicsHtml += `<a href="#" class="disabled">...</a>`;
      //     return false;
      //   } else {
      //     topicsHtml += `<a href="/${topic.alias}">${topic.label}, </a>`;
      //   }
      // });
      for (var i = 0; i < item.topic.length && i <= limitTopics; i += 1) {
        if (i === limitTopics) {
          topicsHtml += '<a href="#" class="disabled">...</a>';
        } else {
          if (i === item.topic.length - 1) {
            topicsHtml += '<a href="/' + item.topic[i].alias + '">' + item.topic[i].label + '</a>';
          } else {
            topicsHtml += '<a href="/' + item.topic[i].alias + '">' + item.topic[i].label + ', </a>';
          }
        }
      }
    }

    if (item.author[0]) {
      item.author.forEach(function (author, index) {
        if (index === item.author.length - 1) {
          authorsHtml += '<a class="text -blue" href="/' + author.alias + '">' + author.label + '</a>';
        } else {
          authorsHtml += '<a class="text -blue" href="/' + author.alias + '">' + author.label + ', </a>';
        }
      });
    }

    html += '\n      <div class="column small-12 medium-' + gridWidth + ' c-tile">\n        <div class="tile-detailed" style="background-image: url(\'' + (item.image ? item.image : '') + '\')">\n          <div class="' + (item.image ? 'overlay' : '') + '"></div>\n          <div class="tile-content">\n            <div class="topics text -dynamic-link ' + (item.image ? '-white' : '') + '">' + topicsHtml + '</div>\n            <a href="/' + item.alias + '"><h3 class="text -tile-detail ' + (item.image ? '-white' : '') + '">' + (item.title ? item.title : '') + '</h3></a>\n            <div class="meta">\n              <span class="text -meta-large ' + (item.image ? '-white' : '') + '">' + moment.unix(parseInt(item.created)).format('D MMMM YYYY') + '</span>\n              <a class="text -meta-large ' + (item.image ? '-white' : '') + '">' + authorsHtml + '</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    ';
  });
  container.html(html);
}

function appendTilesDetailedNews(data, container, gridNum) {
  var gridWidth = 12 / gridNum;
  var html = '';
  data.forEach(function (item) {
    html += '\n      <div class="column small-12 medium-6 c-tile">\n        <div class="tile-detailed">\n          <div></div>\n          <span class="text -uppercase -blue -small-bold">News</span>\n          <div class="tile-content">\n            <a href="/' + item.alias + '"><h3 class="text -tile-detail ">' + (item.label ? item.label : '') + '</h3></a>\n            <div class="meta">\n              <span class="text -meta-large">' + moment.unix(parseInt(item.date)).format('DD MMMM YYYY ') + '</span>\n              <span class="text -meta-large">' + item.name.name + '</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    ';
  });
  container.html(html);
}

function appendCountriesInfoBars(item, topContainer) {
  var container = $(topContainer + ' .data-tiles');
  var html = '';
  html = '\n    <div class="column small-12">\n      <div class="c-country-info-bar">\n        <strong>Action Plan ' + item.year_action_plan + ' Potential Impact</strong>\n        <div class="' + (item.year_action_plan === null ? 'contain-legend-bars -hiden' : 'contain-legend-bars -show') + '">\n          <span class="box box-none"><div class="box-color"></div>None</span>\n          <span class="box box-minor"><div class="box-color"></div>Minor</span>\n          <span class="box box-moderate"><div class="box-color"></div>Moderate</span>\n          <span class="box box-transformative"><div class="box-color"></div>Transformative</span>\n        </div>\n        <div class="' + (item.year_action_plan === null ? 'contain-bars-potential -hiden' : 'contain-bars-potential -show') + '">\n          <div class="bar ' + (item.none_impact ? 'none-bar' : '-hiden') + '" style="flex-basis:' + item.none_impact + '%"><span>' + item.none_impact + '%</span></div>\n          <div class="bar ' + (item.minor_impact ? 'minor-bar' : '-hiden') + '" style="flex-basis:' + item.minor_impact + '%"><span>' + item.minor_impact + '%</span></div>\n          <div class="bar ' + (item.moderate_impact ? 'moderate-bar' : '-hiden') + '" style="flex-basis:' + item.moderate_impact + '%"><span>' + item.moderate_impact + '%</span></div>\n          <div class="bar ' + (item.transformative_impact ? 'transformative-bar' : '-hiden') + '" style="flex-basis:' + item.transformative_impact + '%"><span>' + item.transformative_impact + '%</span></div>\n        </div>\n        <div class="message-error ' + (item.year_action_plan === null ? '-show' : '-hiden') + '">\n          <span>Sorry, nothing to see</span>\n        </div>\n        <a href="http://www.opengovpartnership.org/explorer/all-data.html" target="_blank" class="text -blue">For data definitions and more data, see the OGP Explorer</a>\n      </div>\n    </div>\n  ';
  container.html(html);
}

function appendCountriesRelevance(item, topContainer) {
  var container = $(topContainer + ' .data-tiles');
  var html = void 0;
  html = '\n    <div class="column small-12">\n      <div class="c-country-relevance-bar">\n        <div class="relevance-bar">\n          <h4>Access to Information ' + (item.access_information ? '(' + item.access_information + '% )' : '') + '</h4>\n          <div class="' + (item.access_information ? 'bar-border' : 'bar-border -hiden') + '">\n            <div class="' + (item.access_information ? 'bar' : 'bar -hiden') + '" style="' + (item.access_information ? 'width:' + item.access_information + '%' : '') + '" >\n              <span class="' + (item.access_information ? 'bar-error -hiden' : 'bar-error') + '">Sorry, nothing to see.</span>\n            </div>\n          </div>\n          <h4>Civic Participation ' + (item.civic_participation ? '(' + item.civic_participation + '% )' : '') + '</h4>\n          <div class="' + (item.civic_participation ? 'bar-border' : 'bar-border -hiden') + '">\n            <div class="' + (item.civic_participation ? 'bar' : 'bar -hiden') + '" style="' + (item.civic_participation ? 'width:' + item.civic_participation + '%' : '') + '" >\n              <span class="' + (item.civic_participation ? 'bar-error -hiden' : 'bar-error') + '">Sorry, nothing to see.</span>\n            </div>\n          </div>\n          <h4>Public Accountability ' + (item.public_accountability ? '(' + item.public_accountability + '% )' : '') + '</h4>\n          <div class="' + (item.public_accountability ? 'bar-border' : 'bar-border -hiden') + '">\n            <div class="' + (item.public_accountability ? 'bar' : 'bar -hiden') + '" style="' + (item.public_accountability ? 'width:' + item.public_accountability + '%' : '') + '" >\n              <span class="' + (item.public_accountability ? 'bar-error -hiden' : 'bar-error') + '">Sorry, nothing to see.</span>\n            </div>\n          </div>\n          <h4>Unclear ' + (item.unclear ? '(' + item.unclear + '% )' : '') + '</h4>\n          <div class="' + (item.unclear ? 'bar-border' : 'bar-border -hiden') + '">\n            <div class="' + (item.unclear ? 'bar' : 'bar -hiden') + '" style="' + (item.unclear ? 'width:' + item.unclear + '%' : '') + '" >\n              <span class="' + (item.unclear ? 'bar-error -hiden' : 'bar-error') + '">Sorry, nothing to see.</span>\n            </div>\n          </div>\n        </div>\n        <a href="http://www.opengovpartnership.org/explorer/all-data.html" target="_blank" class="text -blue">For data definitions and more data, see the OGP Explorer</a>\n      </div>\n    </div>\n  ';
  container.html(html);
}

function appendCountriesThematicBars(item, topContainer) {
  var container = $(topContainer + ' .data-tiles');
  var html = '\n    <div class="column small-12">\n      <div class="c-country-thematic-bar">\n        <div class="thematic-bar">\n        <div class="thematic-bar">\n          <h4>' + item.current_themes[0] + ' ' + (item.current_percentage.length > 0 ? '(' + item.current_percentage[0] + '%)' : '') + '</h4>\n          <div class="' + (item.current_percentage[0] ? 'bar-border' : 'bar-border -hiden') + '">\n            <div class="' + (item.current_percentage[0] ? 'bar -green' : 'bar -hiden') + '" style="' + (item.current_percentage[0] ? 'width:' + item.current_percentage[0] + '%' : '') + '" >\n              <span class="' + (item.current_percentage[0] ? 'bar-error -hiden' : 'bar-error') + '">Sorry, nothing to see.</span>\n            </div>\n          </div>\n          <h4>' + item.current_themes[1] + ' ' + (item.current_percentage[1] ? '(' + item.current_percentage[1] + '%)' : '') + '</h4>\n          <div class="' + (item.current_percentage[1] ? 'bar-border' : 'bar-border -hiden') + '">\n            <div class="' + (item.current_percentage[1] ? 'bar -green' : 'bar -hiden') + '" style="' + (item.current_percentage[1] ? 'width:' + item.current_percentage[1] + '%' : '') + '" >\n              <span class="' + (item.current_percentage[1] ? 'bar-error -hiden' : 'bar-error') + '">Sorry, nothing to see.</span>\n            </div>\n          </div>\n          <h4>' + item.current_themes[2] + ' ' + (item.current_percentage[2] ? '(' + item.current_percentage[2] + '%)' : '') + '</h4>\n          <div class="' + (item.current_percentage[2] ? 'bar-border' : 'bar-border -hiden') + '">\n            <div class="' + (item.current_percentage[2] ? 'bar -green' : 'bar -hiden') + '" style="' + (item.current_percentage[2] ? 'width:' + item.current_percentage[2] + '%' : '') + '" >\n              <span class="' + (item.current_percentage[2] ? 'bar-error -hiden' : 'bar-error') + '">Sorry, nothing to see.</span>\n            </div>\n          </div>\n        </div>\n        </div>\n        <a href="http://www.opengovpartnership.org/explorer/all-data.html" target="_blank" class="text -blue">For data definitions and more data, see the OGP Explorer</a>\n      </div>\n    </div>\n  ';
  container.html(html);
}
'use strict';

function twitterLink() {
  (function ($) {
    var idStatus = $('.value-status').text();
    $('.link-twitter').attr('href', 'https://twitter.com/opengovpart/status/' + idStatus);
  })(jQuery);
}
'use strict';

function showAboutPages() {
  (function ($) {

    var tabsContainer = $('.tabs-container');
    var containerInfo = $('#containerInfo');

    // custom callback for tabs component
    var onChangeAboutPageTab = function onChangeAboutPageTab(id, label) {
      $('.tab-content').addClass('-hidden');
      $('.' + id).removeClass('-hidden');
    };

    function initAboutTabs(onChange) {
      initTabs();
      setTabListeners(onChange);
    }

    showLoader('#containerInfo');
    $.getJSON('/apiJSON/page?filter[page_category]=2925', function (data) {
      buildTabs(data.data, tabsContainer, onChangeAboutPageTab);
      initAboutTabs(onChangeAboutPageTab);
      for (var i = 0; i < data.data.length; i += 1) {
        containerInfo.append('\n        <div class="tab-content -hidden ' + data.data[i].id + '">\n          <h3 class="text -section-title">' + data.data[i].label + '</h3>\n          <div class="text -body-content">\n            <p class="text -body-content">\n              ' + data.data[i].body.value + '\n            </p>\n          </div>\n        </div>\n      ');
      }
      removeLoader('#containerInfo', null, true);
    });
  })(jQuery);
}
'use strict';

function showCurrentCommitmentDetail(id) {
  (function ($) {

    function buildCurrentCommitment() {
      $.getJSON('/apiJSON/current_commitment/' + id, function (data) {
        if (data.data[0].lead_institution[0]) {
          $('#currentCommitmentContent .lead').html(data.data[0].lead_institution[0]);
        }
        if (data.data[0].support_institution[0]) {
          $('#currentCommitmentContent .support').html(data.data[0].support_institution[0]);
        }
      });
    }

    $('#theme-menu').addClass('active');
    buildCurrentCommitment();
    buildExploreMoreTiles('current_commitment');
  })(jQuery);
}
'use strict';

function showIrmCommitmentDetail(id) {
  (function ($) {
    $('#theme-menu').addClass('active');
    buildExploreMoreTiles('irm_commitments');
  })(jQuery);
}
'use strict';

function showModelCommitmentDetail(id) {
  (function ($) {

    var onChangeTab = function onChangeTab(id, label) {
      $('.tab-container').addClass('-hidden');
      $('#' + id + ' .tab-container').removeClass('-hidden');
    };

    function fetchModelCommitmentDetail() {
      $.getJSON('/apiJSON/modelcommitments/' + id, function (data) {
        $('.strength-info').html('<strong>Strength: </strong>' + data.data[0].strength.label);
        $('.contributor-info').html('<strong>Contributors: </strong>' + data.data[0].contributors);
        $('#justification .container').html(data.data[0].justification);
        appendTilesStandards(data.data[0].standardsguidance, $('#standards .container'), 2);
        removeLoader('.l-section', null, true);
      });
    }

    // init view
    initTabs();
    setTabListeners(onChangeTab);
    fetchModelCommitmentDetail();
    buildExploreMoreTiles('modelcommitments');
  })(jQuery);
}
'use strict';

function showStarredCommitmentDetail(id) {
  (function ($) {
    $('#theme-menu').addClass('active');
    buildExploreMoreTiles('starredcommitments');
  })(jQuery);
}
'use strict';

function showCountriesDetail(id) {
  (function ($) {

    //cache
    var years = ['2014', '2015', '2016'];
    var docTypes = {
      actionPlans: ['2703'],
      letters: ['2779'],
      reports: ['2704', '2768', '2705']
    };
    var pageThreshold = 10;

    // selectors and containers
    var actionPlansContainer = '#actionPlansLinks';
    var reportsContainer = '#reportsLinks';
    var lettersContainer = '#lettersLinks';
    var eventsContainer = '#eventsBanner';
    var themesContainer = '.themes-container';
    var completionContainer = '.completion-container';

    // initial settings
    var page = 1;
    var currentPageCount = 0;
    var irmPageCount = 0;

    //data cache
    var lettersData = void 0;
    var actionPlansData = void 0;
    var reportsData = void 0;

    // init selectors
    $('select').select2({
      minimumResultsForSearch: Infinity,
      containerCssClass: '-hidden'
    });

    // local functions
    function _setDataCount(selector, count) {
      $(selector).html('' + count);
    }

    function _appendLoadingBar(view, data) {
      var container = $(view);
      data.forEach(function (data) {
        if (data.value) {
          var html = '\n          <div class="c-loading-bar">\n          <div class="text -small-bold -white">' + data.value + '% ' + data.theme + '</div>\n          <div class="bar -white" style="width: ' + data.value + '%;"></div>\n          </div>\n          ';
          container.append(html);
        }
      });
    }

    function _appendStories(view, stories) {
      var container = $(view);
      stories.forEach(function (story) {
        var html = '\n          <li class="story-item">\n            <div class="badge">\n              <svg class="icon -white"><use xlink:href="#icon-external-link"></use></svg>\n            </div>\n            <div class="notification">\n              A new OGP <b>Story</b> has been posted: <b><a href="/' + story.alias + '">' + story.label + '</a></b>\n            </div>\n          </li>\n        ';
        container.append(html);
      });
    }

    function _appendLinks(view, data, selector, type) {
      var activeFilter = $(selector).val();
      var container = $(view + ' .links-container');
      var html = '';
      data.forEach(function (link) {
        if (link.type && type.some(function (index) {
          return link.type.indexOf(index) >= 0;
        })) {
          if (link.date && moment(link.date.value).year() === parseInt(activeFilter) || link.date && moment(link.date.value2).year() === parseInt(activeFilter)) {
            html += buildRelLink(link);
          }
        }
      });
      if (html === '') {
        showNoResults(container, 'No documents available', 'short', 'grey', 'xlarge', 'grey');
      } else {
        container.html(html);
      }
    }

    function _appendEvents(event) {
      if (event.image) {
        $(eventsContainer + ' .banner-image').css('background-image', 'url(' + event.image + ')');
      }
      $(eventsContainer + ' .banner-title').html(event.label);

      var eventMeta = '';
      eventMeta += convertEventDate(event.date.value);
      if (event.date.value2) {
        var endDate = convertEventDate(event.date.value2);
        eventMeta += ' to ' + endDate + '.';
      }
      eventMeta += ' | ' + event.location.locality + ', ' + event.location.country;
      $(eventsContainer + ' .banner-date').html(eventMeta);
      $(eventsContainer + ' .c-button').attr('href', '/' + event.alias);
    }

    function setPaginationListerners(container, endPoint, pageCount) {
      $('#' + container + ' .onClickPagination').on('click', function (e) {
        var pageNum = $(this).data('value');
        showLoader('#' + container);
        $.getJSON('/apiJSON/' + endPoint + '?filter[country]=' + id + '&page[number]=' + pageNum + '&page[size]=' + pageThreshold + '&sort=label', function (data) {
          initAccordion(container, data.data);
          initPagination(pageNum, pageCount, container);
          setPaginationListerners(container, endPoint, pageCount);
          removeLoader('#' + container, null, true);
        });
      });
    }

    function setSelectorListener(view, selector, data, type) {
      _appendLinks(view, data, selector, type);
      $(selector).on('change', function () {
        _appendLinks(view, data, selector, type);
      });
    }

    function initLinksSelectorContainer(dataCache, container, filter, type) {
      if (dataCache.length) {
        var optionValues = getSelectOptionsFromData(dataCache, filter, type);
        if (optionValues.length) {
          $(container + ' select').removeClass('-hidden');
          buildSelector(container + ' select', optionValues);
          setSelectorListener('' + container, container + ' select', dataCache, type);
          $(container + ' .select2-selection').removeClass('-hidden');
        } else {
          _appendLinks('' + container, dataCache, container + ' select', type);
        }
      }
    }

    function bodyContentListener() {
      $('.js-view-more').on('click', function () {
        $('.body-view-more').toggleClass('-show');
        $(this).toggleClass('-open');
        if ($(this).hasClass('-open')) {
          $('span', this).html('VIEW LESS');
        } else {
          $('span', this).html('VIEW MORE');
        }
      });
    }

    /////////////
    // FETCH DATA
    /////////////

    // get country data
    $.getJSON('/apiJSON/countries?filter[id]=' + id, function (data) {
      if (data.data) {
        var country = data.data[0];
        // set banner counts
        _setDataCount('.c-commitment-count .content-count', country.current_commitments_count);
        _setDataCount('.irm-count', country.irm_commitments_count);
        _setDataCount('.starred-count', country.starred_commitments_count);
        _setDataCount('#currentCommitmentsAccordion .content-count', country.current_commitments_count);
        _setDataCount('#irmReviewedCommitmentsAccordion .content-count', country.irm_commitments_count);
        // loading bar data
        if (country.current_themes) {
          var themesData = [];
          for (var i = 0; i < country.current_themes.length; i++) {
            themesData.push({ theme: country.current_themes[i], value: country.current_percentage[i] });
          }
          _appendLoadingBar(themesContainer, themesData);
        }
        if (country.midterm_percentage || country.endofterm_percentage) {
          var completionData = [{ theme: 'Mid term percentage', value: country.midterm_percentage }, { theme: 'End of term percentage', value: country.endofterm_percentage }];
          _appendLoadingBar(completionContainer, completionData);
        } else {
          showNoResults('.completion-container', 'Not yet reviewed', 'short', 'white', 'xlarge', 'grey');
        }
      }
      removeLoader('#countryHeaderBanner', null, true);
    });

    // fetch current commitments
    $.getJSON('/apiJSON/current_commitment?filter[country]=' + id + '&sort=label&page[size]=' + pageThreshold + '&page[number]=1', function (data) {
      if (data.data.length) {
        initAccordion('currentCommitmentsAccordion', data.data);
        if (data.count > pageThreshold) {
          currentPageCount = getPageCount(data.count, pageThreshold);
          initPagination(page, currentPageCount, 'currentCommitmentsAccordion');
          setPaginationListerners('currentCommitmentsAccordion', 'current_commitment', currentPageCount);
        }
      } else {
        showNoResults('#currentCommitmentsAccordion .c-accordion', 'No current commitments', 'medium', 'grey', 'xxlarge', 'blue');
      }
      removeLoader('#currentCommitmentsAccordion', null, true);
    });

    // fetch review commitments
    $.getJSON('/apiJSON/irm_commitments?filter[country]=' + id + '&page[size]=' + pageThreshold + '&sort=label&page[number]=1', function (data) {
      if (data.data.length) {
        initAccordion('irmReviewedCommitmentsAccordion', data.data);
        if (data.count > pageThreshold) {
          irmPageCount = getPageCount(data.count, pageThreshold);
          initPagination(page, irmPageCount, 'irmReviewedCommitmentsAccordion');
          setPaginationListerners('irmReviewedCommitmentsAccordion', 'irm_commitments', irmPageCount);
        }
      } else {
        showNoResults('#irmReviewedCommitmentsAccordion .c-accordion', 'No reviewed commitments', 'medium', 'grey', 'xxlarge', 'blue');
      }
      removeLoader('#irmReviewedCommitmentsAccordion', null, true);
    });

    // fetch stories
    $.getJSON('/apiJSON/stories?filter[country]=' + id + '&page[size]=9&sort=-created', function (data) {
      if (data.data.length) {
        _appendStories('.c-activity-stream ul', data.data);
        $('.item-bridge').removeClass('-hidden');
      } else {
        showNoResults('.c-activity-stream ul', 'No recent activity', 'medium', 'white', 'xlarge', 'grey');
      }
      removeLoader('.c-activity-stream');
    });

    // fetch events
    $.getJSON('/apiJSON/events?filter[country]=' + id, function (data) {
      if (data.data.length) {
        if (dateDiff(data.data[0].date.value) <= 0) {
          _appendEvents(data.data[0]);
          $(eventsContainer).removeClass('-hidden');
        }
      }
    });

    $.getJSON('/apiJSON/documents?filter[country]=' + id, function (data) {
      var dataCache = data.data;
      initLinksSelectorContainer(dataCache, actionPlansContainer, ['date'], docTypes.actionPlans);
      initLinksSelectorContainer(dataCache, reportsContainer, ['date'], docTypes.reports);
      initLinksSelectorContainer(dataCache, lettersContainer, ['date'], docTypes.letters);
      removeLoader('#resourceDocsContainer', null, true);
    });

    // init selectors and views for actions, reports and letters data
    bodyContentListener();
  })(jQuery);
}
'use strict';

var layerMap = '';
function initCountriesMap() {
  var map = L.map('countriesMap', {
    zoomControl: false,
    center: [35, -60],
    zoom: 2,
    maxZoom: 6,
    minZoom: 2,
    scrollWheelZoom: false
  });
  var basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: ''
  }).addTo(map);
  $('#in').click(function () {
    map.setZoom(map.getZoom() + 1);
  });

  $('#out').click(function () {
    map.setZoom(map.getZoom() - 1);
  });
  return map;
}

function initMapLayer(map, countriesData, layers, cartoQueryLink) {
  var over = false;

  cartodb.createLayer(map, {
    user_name: 'jmonaco',
    type: 'cartodb',
    sublayers: []
  }).addTo(map).done(function (layer) {
    layer.setInteraction(true);
    layer.createSubLayer(layers['action']);
    var hovers = [];

    layer.bind('featureOver', function (e, latlon, pxPos, data, layers) {
      hovers[layers] = 1;
      if (_.any(hovers)) {
        $('#countriesMap').css('cursor', 'pointer');
      }
    });

    layer.bind('featureOut', function (m, layers) {
      hovers[layers] = 0;
      if (!_.any(hovers)) {
        $('#countriesMap').css('cursor', 'auto');
      }
    });

    layer.on('featureClick', function (e, latlng, pos, data) {
      $('.tooltip').remove();
      if (layer.layers[0].options.name !== 'participants') {
        showLoader('.l-map');
      }
      switch (layer.layers[0].options.name) {
        case 'action':
          $.getJSON(cartoQueryLink + ' SELECT * FROM ggtqckcj2bioeepnuvxoow WHERE cartodb_id = ' + data.cartodb_id, function (actionPlanData) {
            updateMapModal(actionPlanData.rows[0].nid, 'actionPlan', countriesData);
          });
          break;
        case 'starred':
          $.getJSON(cartoQueryLink + ' SELECT * FROM zzpexx07fxnjtcvjpptz2q WHERE cartodb_id = ' + data.cartodb_id, function (starredData) {
            updateMapModal(starredData.rows[0].countryid, 'starred', countriesData);
          });
          break;
        case 'people':
          $.getJSON(cartoQueryLink + ' SELECT * FROM u4yhv_fq5_jb91rzuzgd8q WHERE cartodb_id = ' + data.cartodb_id, function (peopleInvolvedData) {
            updateMapModal(peopleInvolvedData.rows[0].countryid, 'people', countriesData);
          });
          break;
        case 'stories':
          $.getJSON(cartoQueryLink + ' SELECT * FROM cajq0nm1zsu0aav_wrnyvg WHERE cartodb_id = ' + data.cartodb_id, function (storiesData) {
            updateMapModal(storiesData.rows[0].countryid, 'stories', countriesData);
          });
          break;
        case 'event':
          $.getJSON(cartoQueryLink + ' SELECT * FROM ojy344p9szp9irh8dc1uaa WHERE cartodb_id = ' + data.cartodb_id + ' AND country IS NOT NULL', function (eventData) {
            updateMapModal(eventData.rows[0].countryid, 'event', countriesData);
          });
          break;
        case 'commitment':
          $.getJSON(cartoQueryLink + ' SELECT * FROM c73t2gfiumef0fs5de9huq WHERE cartodb_id = ' + data.cartodb_id, function (commitmentsData) {
            updateMapModal(commitmentsData.rows[0].countryid, 'commitment', countriesData);
          });
          break;
        case 'participants':
          $.getJSON(cartoQueryLink + ' SELECT * FROM table_4q9xwd8iroblyagpt_dx5q WHERE cartodb_id = ' + data.cartodb_id, function (participantsData) {
            document.location.href = '' + window.location.origin + participantsData.rows[0].path;
          });
          break;
        default:
      }
    });

    layer.on('featureOver', function (e, latlng, pos, data) {

      var country = data.country;
      var titleEvent = data.title;

      if (over === false) {
        if (country) {
          $('body').append('<div class="tooltip" style="padding: 5px; position: absolute; z-index: 10; background-color: rgba(255, 255, 255, 1); top:' + (e.pageY - 25) + 'px; left:' + (e.pageX + 25) + 'px">' + country + '</div>');
        }

        if (titleEvent) {
          $('body').append('<div class="tooltip" style="padding: 5px; position: absolute; z-index: 10; background-color: rgba(255, 255, 255, 1); top:' + (e.pageY - 25) + 'px; left:' + (e.pageX + 25) + 'px">' + titleEvent + '</div>');
        }
        over = true;
      } else {

        if (country) {
          $('.tooltip').html(country);
        }

        if (titleEvent) {
          $('.tooltip').html(titleEvent);
        }
        $('.tooltip').css('top', e.pageY - 25 + 'px');
        $('.tooltip').css('left', e.pageX + 25 + 'px');
      }
    });

    layer.on('featureOut', function (e, latlng, pos, data) {
      over = false;
      $('.tooltip').remove();
    });
    layerMap = layer;
    initEventFunctions(layer, layers);
    setMapLegendListeners(layer, layers);
  });
}

function removeLayers(layer) {
  layer.getSubLayers().forEach(function (sublayer) {
    sublayer.remove();
  });
}

function initEventFunctions(layer, layers) {
  $('.change-past-event-layer').click(function () {
    removeLayers(layer);
    $(this).html('LOOKING FOR UPCOMING EVENTS?');
    $('.legend-info-event').html('Past Events');
    $(this).removeClass('change-past-event-layer');
    $(this).addClass('change-upcoming-event-layer');
    layer.setInteraction(true);
    layer.createSubLayer(layers['pastevent']);
    initEventFunctions();
  });

  $('.change-upcoming-event-layer').click(function () {
    removeLayers(layer);
    $(this).html('LOOKING FOR PAST EVENTS?');
    $('.legend-info-event').html('Upcoming Events');
    $(this).removeClass('change-upcoming-event-layer');
    $(this).addClass('change-past-event-layer');
    layer.setInteraction(true);
    layer.createSubLayer(layers['upcomingevent']);
    initEventFunctions();
  });
}

function setMapLegendListeners(layer, layers) {
  $('.select-legend').click(function () {
    $('.tooltip').remove();
    var container = $(this).attr('data-value');
    var namelayer = $(this).attr('data-layer');
    removeLayers(layer);
    if ($(this).hasClass('-selected') === false) {
      $('.select-legend').each(function () {
        if ($(this).hasClass('-selected')) {
          $(this).prop('disabled', false);
          $(this).toggleClass('-selected');
          $('.' + container).toggleClass('-open-legend');
        }
      });

      $('.contain-info').each(function () {
        if ($(this).hasClass('-open-legend')) {
          $(this).toggleClass('-open-legend');
        }
      });
      if ($('.scroll-contain-legend').hasClass('-scroll') === false) {
        $('.scroll-contain-legend').toggleClass('-scroll');
      }
      $('.' + container).toggleClass('-open-legend');
      $(this).toggleClass('-selected');
      $(this).prop('disabled', true);
      layer.setInteraction(true);
      layer.createSubLayer(layers[namelayer]);
    }
  });
}

function changeCommitmentLayer() {
  var theme = $('.select-legend-dropdown').val();
  removeLayers(layerMap);
  layerMap.setInteraction(true);
  layerMap.createSubLayer({
    sql: 'SELECT country,Min(countryid) countryid, Min(cc.cartodb_id) cartodb_id, count(country), st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM c73t2gfiumef0fs5de9huq cc INNER JOIN world_borders_hd wb on cc.country = wb.name WHERE country IS NOT NULL AND wb.the_geom_webmercator IS NOT NULL AND LENGTH(country) > 0 AND theme LIKE \'%' + theme + '%\' GROUP BY wb.the_geom_webmercator, country ORDER BY country DESC',
    cartocss: '#layer::z1 {marker-width: ramp([count], range(25, 45), quantiles(7));marker-fill: #ffa200;marker-fill-opacity: 1;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 0.1;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: ramp([count], range(25, 30), quantiles(3));}[zoom = 3] {marker-width: ramp([count], range(30, 35), quantiles(4));}[zoom = 4] {marker-width: ramp([count], range(30, 40), quantiles(5));}[zoom = 5] {marker-width: ramp([count], range(30, 45), quantiles(6));} [zoom = 6] {marker-width: ramp([count], range(35, 45), quantiles(7));}} #layer::z1 {text-name: [count];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
    interactivity: 'cartodb_id, the_geom_webmercator, country',
    name: 'commitment'
  });
}
'use strict';

function showCountriesPage() {
  (function ($) {

    // consts for map
    var cartoQueryLink = 'https://jmonaco.carto.com/api/v2/sql?q=';
    var layers = {
      action: {
        sql: 'SELECT  wb.the_geom_webmercator the_geom_webmercator, nid, member_since, at.path, actionplan, at.country, at.cartodb_id FROM ggtqckcj2bioeepnuvxoow at INNER JOIN world_borders_hd wb on at.country = wb.name',
        cartocss: '#layer {polygon-fill: ramp([actionplan], (#2d4f00, #66bc29, #2d4f00, #66bc29, #2d4f00, #2d4f00, #cc3300, #cc3300), ("Implementing 1st action plan and Developing 2nd action plan","Developing action plan", "Implementing 2nd action plan", "Developing 1st Action Plan", "Implementing 1st action plan", "Implementing action plan", , "Inactive"), "="); line-width: 1; line-color: #FFF; line-opacity: 0.5;}',
        interactivity: 'the_geom_webmercator, nid, country, cartodb_id',
        name: 'action'
      },
      starred: {
        sql: 'SELECT numberstarred,country, st.cartodb_id, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM zzpexx07fxnjtcvjpptz2q st INNER JOIN world_borders_hd wb on st.country = wb.name WHERE wb.the_geom_webmercator IS NOT NULL ORDER BY numberstarred',
        cartocss: '#layer::z1 {marker-width: 30;marker-fill: #ffffff;marker-fill-opacity: 1;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 0.2;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: 30;}[zoom = 3] {marker-width: 35;}[zoom = 4] {marker-width: 40;}[zoom = 5] {marker-width: 45;}[zoom = 6] {marker-width: 45;}} #layer::z1 {text-name: [numberstarred];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #000000;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
        interactivity: 'numberstarred, country, cartodb_id, the_geom_webmercator',
        name: 'starred'
      },
      people: {
        sql: 'SELECT numberpeopleinvolved,country,countryid, pi.cartodb_id, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM u4yhv_fq5_jb91rzuzgd8q pi INNER JOIN world_borders_hd wb on pi.country = wb.name WHERE wb.the_geom_webmercator IS NOT NULL',
        cartocss: '#layer {marker-width: 50;marker-height: 45;marker-fill: #007acb;marker-fill-opacity: 1;marker-file:url("https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg");marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 1;marker-comp-op: src-over;[zoom = 2] {marker-width: 30;marker-height: 25;}[zoom = 3] {marker-width: 35;marker-height: 30;}[zoom = 4] {marker-width: 45;marker-height: 40;} [zoom = 5] {marker-width: 50;marker-height: 45;}[zoom = 6] {marker-width: 55;marker-height: 50;}}',
        interactivity: 'numberpeopleinvolved,countryid, country, cartodb_id, the_geom_webmercator',
        name: 'people'
      },
      stories: {
        sql: 'SELECT numberstories,country, st.cartodb_id, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM cajq0nm1zsu0aav_wrnyvg st INNER JOIN world_borders_hd wb on st.country = wb.name WHERE st.the_geom_webmercator IS NOT NULL',
        cartocss: '#layer::z1{marker-width: 50;marker-height: 45;marker-fill: #0099ff;marker-fill-opacity: 1;marker-file:url("https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg");marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 1;marker-comp-op: src-over;[zoom = 2] {marker-width: 50;marker-height: 45;}[zoom = 3] {marker-width: 55;marker-height: 50;}[zoom = 4] {marker-width: 60;marker-height: 55;}[zoom = 5] {marker-width: 65;marker-height: 60;}[zoom = 6] {marker-width: 70;marker-height: 65;}} #layer::z1{text-name: [numberstories];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: -0.9;text-allow-overlap: true;text-placement: point;text-placement-type: simple;text-comp-op: screen;}',
        interactivity: 'numberstories, country, cartodb_id, the_geom_webmercator',
        name: 'stories'
      },
      upcomingevent: {
        sql: 'SELECT now(), country, countryid, count(country), Min(ec.cartodb_id) cartodb_id, Min(date) date, Min(end_date) end_date, Min(start_date) start_date, Min(title) title, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM ojy344p9szp9irh8dc1uaa ec INNER JOIN world_borders_hd wb on ec.country = wb.name WHERE title IS NOT NULL AND wb.the_geom_webmercator IS NOT NULL AND end_date > now() GROUP BY country, countryid, wb.the_geom_webmercator ORDER BY country',
        cartocss: '#layer::z1 {marker-width: 30;marker-fill: #66bc29;marker-fill-opacity: 1;marker-line-width: 0;marker-line-color: #151718;marker-line-opacity: 0.2;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: 30;}[zoom = 3] {marker-width: 35;}[zoom = 4] {marker-width: 40;}[zoom = 5] {marker-width: 45;}[zoom = 6] {marker-width: 45;}} #layer::z1 {text-name: [count];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
        interactivity: 'cartodb_id, the_geom_webmercator',
        name: 'event'
      },
      pastevent: {
        sql: 'SELECT now(), country, countryid, count(country), Min(ec.cartodb_id) cartodb_id, Min(date) date, Min(end_date) end_date, Min(start_date) start_date, Min(title) title, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM ojy344p9szp9irh8dc1uaa ec INNER JOIN world_borders_hd wb on ec.country = wb.name WHERE title IS NOT NULL AND wb.the_geom_webmercator IS NOT NULL AND end_date < now() GROUP BY country, countryid, wb.the_geom_webmercator ORDER BY country',
        cartocss: '#layer::z1 {marker-width: 30;marker-fill: #66bc29;marker-fill-opacity: 1;marker-line-width: 0;marker-line-color: #151718;marker-line-opacity: 0.2;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: 30;}[zoom = 3] {marker-width: 35;}[zoom = 4] {marker-width: 40;}[zoom = 5] {marker-width: 45;}[zoom = 6] {marker-width: 45;}} #layer::z1 {text-name: [count];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
        interactivity: 'cartodb_id, the_geom_webmercator, country',
        name: 'event'
      },
      commitment: {
        sql: 'SELECT country,Min(countryid) countryid, Min(cc.cartodb_id) cartodb_id, count(country), st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM c73t2gfiumef0fs5de9huq cc INNER JOIN world_borders_hd wb on cc.country = wb.name WHERE country IS NOT NULL AND wb.the_geom_webmercator IS NOT NULL AND LENGTH(country) > 0 GROUP BY wb.the_geom_webmercator, country ORDER BY country DESC',
        cartocss: '#layer::z1 {marker-width: 30;marker-fill: #ffa200;marker-fill-opacity: 1;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 0.1;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: 30;}[zoom = 3] {marker-width: 35;}[zoom = 4] {marker-width: 40;}[zoom = 5] {marker-width:45;} [zoom = 6] {marker-width: 45;}} #layer::z1 {text-name: [count];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
        interactivity: 'cartodb_id, the_geom_webmercator, country',
        name: 'commitment'
      },
      participants: {
        sql: 'SELECT * FROM table_4q9xwd8iroblyagpt_dx5q WHERE show_on_map IS TRUE',
        cartocss: '#layer {marker-width: 50;marker-height: 45;marker-fill: #FFB927;marker-fill-opacity: 1;marker-file: url("https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg");marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 1;marker-comp-op: src-over;[zoom = 2] {marker-width: 30;marker-height: 25;}[zoom = 3] {marker-width: 35;marker-height: 30;}[zoom = 4] {marker-width: 45;marker-height: 40;}[zoom = 5] {marker-width: 50;marker-height: 45;}[zoom = 6] {marker-width: 55;marker-height: 50;}}',
        interactivity: 'cartodb_id, title',
        name: 'participants'
      }
    };

    //consts for tabs
    var countriesContent = '#countriesContentContainer';
    var page = 1;
    var activeTab = 'starred';
    var pageThreshold = 10;

    // cache
    var countriesMap = void 0;
    var countriesData = void 0;
    var themesData = void 0;

    // custom callback for tabs component
    var onChangeCountryTab = function onChangeCountryTab(id, label) {
      setPageCount(1);
      $('.tab-content').addClass('-hidden');
      $('.' + id).removeClass('-hidden');
      showLoader('#countriesContentContainer');
      showCountriesData(countriesData, id, countriesContent, $('#countriesSearch select').val());
    };

    function cacheData() {
      $.getJSON('/apiJSON/countries?sort=label', function (countries) {
        countriesData = countries.data;
        initMapLayer(countriesMap, countriesData, layers, cartoQueryLink);
        countriesMap.invalidateSize();
        showCountriesData(countriesData, activeTab, countriesContent);
        buildCountrySelector($('#countriesSearch select'), countriesContent, countriesData, activeTab);
        onClickPagination(activeTab, countriesContent, countriesData);
        initCountryTabs(onChangeCountryTab);
        $.getJSON('/apiJSON/themes?sort=name&fields=id,label,alias', function (themes) {
          themesData = themes.data;
          appendSelectOptionsFromData('.select-legend-dropdown', themesData);
          removeLoader('.l-map', null, true);
        });
      });
    }

    function initViews() {
      countriesMap = initCountriesMap();
      $('.select-legend-dropdown').select2({
        minimumResultsForSearch: Infinity,
        placeholder: 'All themes'
      });
      $('#countriesSearch select').select2({
        containerCssClass: '-tall',
        placeholder: 'Search country...'
      });
      $('.select-legend-dropdown').change(function () {
        changeCommitmentLayer();
      });
    }

    // let's begin
    initViews();
    cacheData();
    buildMapModal();
  })(jQuery);
}
'use strict';

function buildCountrySelector(selector, container, countries, activeTab) {
  selector.append('<option value="0">All countries</option>');
  selector.append('<svg class="icon -medium -blue"><use xlink:href="#icon-search"></use></svg>');
  appendSelectOptionsFromData(selector, countries);
  setCountrySelectorListeners(selector, container, countries, activeTab);
}

function setCountrySelectorListeners(selector, container, countriesData, activeTab) {
  selector.on('change', function () {
    setPageCount(1);
    showLoader(container);
    var filterValue = $(this).val();
    showCountriesData(countriesData, activeTab, container, filterValue);
  });
}

function setPageCount(val) {
  $('.page-count').data('value', val);
}

function getCurrentPage() {
  var pageCount = $('.page-count').data('value');
  return pageCount;
}

function onClickPagination(activeTab, container, countriesData) {
  $('.c-pagination-click').on('click', function () {
    setPageCount(getCurrentPage() + 1);
    showCountriesData(countriesData, activeTab, container);
  });
}

function showOnClickPagination() {
  $('.c-pagination-click').removeClass('-hidden');
}

function hideOnClickPagination() {
  $('.c-pagination-click').addClass('-hidden');
}

function initModalStarred() {
  $('.show-modal-starred').click(function () {
    var country = $(this).data('value');
    $.getJSON('/apiJSON/countries?filter[id]=' + country, function (countriesData) {
      showLoader('body');
      setMapModalContent('mapModal', 'starred-tab', country, countriesData);
    });
  });
}

function setCountryDataTiles(container, country) {
  var activeTab = $('.tabs-container').find('.-selected').data('node');
  $('#country-' + country.id + ' .data-tiles').html('');
  if (activeTab === 'starred') {
    if (country.starred_commitments.length > 0) {
      var trimCommitments = country.starred_commitments.slice(0, 2);
      appendSmallTiles(trimCommitments, '#country-' + country.id, 2, '-short -country');
      $('#country-' + country.id + ' > .c-country-tile').append('\n        <span data-value="' + country.id + '" class="show-modal-starred text -interactive -blue">Show all starred commitments</span>\n      ');
    } else {
      showNoResults('#country-' + country.id + ' .data-tiles', 'No starred commitments', 'medium', 'grey', 'xlarge', 'grey');
    }
  } else if (activeTab === 'potential') {
    if (country.year_action_plan !== null) {
      appendCountriesInfoBars(country, '#country-' + country.id);
    } else {
      showNoResults('#country-' + country.id + ' .data-tiles', 'No data available', 'medium', 'grey', 'xlarge', 'grey');
    }
  } else if (activeTab === 'relevance') {
    if (country.access_information || country.civic_participation || country.public_accountability || country.unclear) {
      appendCountriesRelevance(country, '#country-' + country.id);
    } else {
      showNoResults('#country-' + country.id + ' .data-tiles', 'No data available', 'medium', 'grey', 'xlarge', 'grey');
    }
  } else if (activeTab === 'thematic') {
    if (country.current_themes) {
      appendCountriesThematicBars(country, '#country-' + country.id);
    } else {
      showNoResults('#country-' + country.id + ' .data-tiles', 'No data available', 'medium', 'grey', 'xlarge', 'grey');
    }
  } else {
    showNoResults('#country-' + country.id + ' .data-tiles', 'No data available', 'medium', 'grey', 'large', 'grey');
  }
  removeLoader('#countriesContentContainer', null, true);
}

function initCountryBox(container, country, activeTab) {
  var html = '\n    <div class="column small-12 medium-6" id="country-' + country.id + '">\n      <div class="c-country-tile">\n        <a class="text -title-x-small" href="/' + country.alias + '">' + country.label + '&nbsp;<svg class="icon -blue -medium arrow"><use xlink:href="#icon-arrow"></use></svg></a>\n        <div class="first-info text">\n          <span>Current Commitments ' + parseInt(country.current_commitments_count) + '</span>\n          <span>Reviewed Commitments ' + parseInt(country.irm_commitments_count) + '</span>\n        </div>\n        <div class="text border-line">\n          <span>Starred Commitments ' + parseInt(country.starred_commitments_count) + '</span>\n        </div>\n        <div class="first-info text">\n          <span>Action Plans ' + country.action_plan_count + '</span>\n          <span>Member since ' + moment.unix(country.memberSince).format('YYYY') + '</span>\n        </div>\n        <div class="row data-tiles"></div>\n      </div>\n    </div>\n  ';
  $('.content-tiles', container).append(html);
}

function showCountriesData(countriesData, activeTab, container, countryId) {
  hideOnClickPagination();
  var page = getCurrentPage();
  // get filter country data
  var filteredCountries = '';
  if (page === 1) {
    $('.content-tiles', container).html('');
  }
  if (countryId && countryId > 0) {
    filteredCountries = countriesData.filter(function (country) {
      return country.id == countryId;
    });
  } else {
    var sliceStart = (page - 1) * 10;
    filteredCountries = countriesData.slice(sliceStart, sliceStart + 10);
  }

  filteredCountries.forEach(function (country, index) {
    initCountryBox(container, country, activeTab);
    setCountryDataTiles(container, country);
  });

  if (page < Math.ceil(countriesData.length / 10) && filteredCountries.length > 1) {
    showOnClickPagination();
  }
  removeLoader(container, null, true);
  initModalStarred();
}

function initCountryTabs(onChangeCountryTab) {
  initTabs();
  setTabListeners(onChangeCountryTab);
}
'use strict';

function showDocumentResourcePage() {
  (function ($) {
    // cache dom
    var tileContainer = $('#resourceDocsTiles');
    var searchEl = $('.c-tile');
    var searchText = $('.c-tile .tile');
    var searchContainer = $('#resourceTilesSearch input');

    // fetch content and append
    $.getJSON('/apiJSON/resource', function (data) {
      setSearchPlaceholder(searchContainer, data.data[0].label);
      setSearchListeners(searchEl, searchText);
      if (data.data.length) {
        appendTiles(data.data, tileContainer, 4);
      } else {
        showNoResults();
      }
    });
  })(jQuery);
}
'use strict';

function showNewsEventsPage() {
  (function ($) {
    // cache
    var countryFilter = 0;
    var typeFilter = 0;
    var page = 1;
    var totalPages = 0;
    var totalPagesEvents = 0;
    var pageEvents = 1;

    //selectors
    var countrySelector = $('.country-filter');
    var typeSelector = $('.type-filter');
    var coverEvents = $('.c-content-banner');
    var eventsContainer = $('#eventsTiles');
    var newsContainer = $('#newsTiles');

    // public functions
    function buildHighlightedEvent(event) {
      if (event.image) {
        $('.c-content-banner').css('background-image', 'url(' + event.image + ')');
      }
      if (moment() > moment(event.date.value)) {
        $('.banner-type-date-event').html('Past Event');
      } else {
        $('.banner-type-date-event').html('Upcoming Event');
      }
      $('.banner-link', coverEvents).attr('href', event.alias);
      $('.banner-title', coverEvents).html(event.label);
      $('.banner-date', coverEvents).html(moment(event.date.value).format('MMMM DD, hh:mm a'));
      $('.c-content-banner').removeClass('-hidden');
    }

    function setPageCount(val) {
      $('.page-count').data('value', val);
    }

    function getCurrentPage() {
      var pageCount = $('.page-count').data('value');
      return pageCount;
    }

    function onClickPagination() {
      $('.page-count').on('click', function () {
        setPageCount(getCurrentPage() + 1);
        pageEvents = getCurrentPage();
        if (totalPagesEvents > getCurrentPage()) {
          showLoader('#eventsContainer');
          showEvents(countryFilter, typeFilter, getCurrentPage());
        }
      });
    }

    function buildSelector(selector, placeholder, endpoint, query) {
      selector.select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-green -tall',
        dropdownCssClass: '-green',
        placeholder: '' + placeholder
      });
      selector.append('<option value="0">' + placeholder + '</option>');

      $.getJSON('/apiJSON/' + endpoint + '?' + query, function (data) {
        data.data.forEach(function (data) {
          var option = '<option value="' + data.id + '">' + data.label + '</option>';
          selector.append(option);
        });

        selector.on('change', function () {
          // showLoader('#newsContainer');
          showLoader('#eventsContainer');
          countryFilter = countrySelector.val();
          typeFilter = typeSelector.val();
          page = 1;
          // showNews(countryFilter, typeFilter, page);
          showEvents(countryFilter, typeFilter, page);
        });
      });
    }

    function setPaginationListerners() {
      countryFilter = countrySelector.val();
      typeFilter = typeSelector.val();
      $('.onClickPagination').on('click', function (e) {
        showLoader('#newsContainer');
        var pageNum = $(this).data('value');
        showNews(countryFilter, typeFilter, pageNum);
      });
    }

    function showEvents(country, type, page) {
      var activeCountry = parseInt(country) > 0 ? 'filter[country]=' + country + '&' : '';
      var activeType = parseInt(type) > 0 ? 'filter[category]=' + type + '&' : '';
      var activeFilters = '' + activeCountry + activeType + '&page=' + page;
      $.getJSON('/apiJSON/events?' + activeFilters + '&sort=-date', function (events) {
        totalPagesEvents = getPageCount(events.count, 4);
        if (events.data.length > 0) {
          if (pageEvents === 1) {
            $.getJSON('/apiJSON/events?sort=-date', function (highlightedEvent) {
              buildHighlightedEvent(highlightedEvent.data[0]);
              appendTilesEvent(events.data, eventsContainer);
              removeLoader('#eventsContainer', null, true);
            });
          } else {
            appendTilesEvent(events.data, eventsContainer);
            removeLoader('#eventsContainer', null, true);
          }
        } else {
          showNoResults('#eventsContainer', 'No events with these filters', 'tall', 'grey', 'xxlarge', 'blue');
          removeLoader('#eventsContainer', null, true);
        }
      });
    }

    function showNews(country, type, page) {
      var activeCountry = parseInt(country) > 0 ? 'filter[country]=' + country + '&' : '';
      var activeType = parseInt(type) > 0 ? 'filter[category]=' + type + '&' : '';
      var activeFilters = '' + activeCountry + activeType + '&page=' + page;
      $.getJSON('/apiJSON/news?' + activeFilters + '&sort=-date&range=4', function (news) {
        if (news.data.length > 0) {
          totalPages = getPageCount(news.count, 4);
          if (page === 1) {
            $.getJSON('/apiJSON/news?sort=-date&range=4', function (highlightedNews) {
              buildHighlightedEvent(highlightedNews.data[0]);
              appendTilesDetailedNews(news.data, newsContainer, 2);
              initPagination(page, totalPages, 'newsEventsPage');
              setPaginationListerners();
              removeLoader('#newsContainer', null, true);
            });
          } else {
            appendTilesDetailedNews(news.data, newsContainer, 2);
            removeLoader('#newsContainer', null, true);
            initPagination(page, totalPages, 'newsEventsPage');
            setPaginationListerners();
          }
        } else {
          showNoResults('#newsTiles', 'No news with these filters', 'tall', 'grey', 'xxlarge', 'blue');
          $('.c-pagination').html('');
          removeLoader('#newsContainer', null, true);
        }
      });
    }

    // build page
    buildSelector(countrySelector, 'All countries', 'countries', 'fields=id,label&sort=label');
    buildSelector(typeSelector, 'All story types', 'stories_categories', 'fields=id,label&sort=label');
    showEvents(countryFilter, typeFilter, page);
    showNews(countryFilter, typeFilter, page);
    onClickPagination();
  })(jQuery);
}
'use strict';

function showHomePage() {
  (function ($) {

    var map = L.map('maphome', {
      zoomControl: false,
      center: [35, -60],
      zoom: 2,
      maxZoom: 6,
      minZoom: 2,
      scrollWheelZoom: false
    });
    var over = false;

    $('#in').click(function () {
      map.setZoom(map.getZoom() + 1);
    });

    $('#out').click(function () {
      map.setZoom(map.getZoom() - 1);
    });

    var basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map);

    cartodb.createLayer(map, {
      user_name: 'jmonaco',
      type: 'cartodb',
      sublayers: [{
        sql: 'SELECT  wb.the_geom_webmercator the_geom_webmercator, nid, member_since, at.path, actionplan, at.country, at.cartodb_id FROM ggtqckcj2bioeepnuvxoow at INNER JOIN world_borders_hd wb on at.country = wb.name',
        cartocss: '#layer {polygon-fill: ramp([actionplan], (#2d4f00, #66bc29, #2d4f00, #66bc29, #2d4f00, #2d4f00, #cc3300, #cc3300), ("Implementing 1st action plan and Developing 2nd action plan","Developing action plan", "Implementing 2nd action plan", "Developing 1st Action Plan", "Implementing 1st action plan", "Implementing action plan", , "Inactive"), "="); line-width: 1; line-color: #FFF; line-opacity: 0.5;}',
        interactivity: 'the_geom_webmercator, nid, country, cartodb_id'
      }]
    }).addTo(map).done(function (layer) {
      layer.setInteraction(true);
      var hovers = [];
      layer.on('featureClick', function (e, latlng, pos, data) {
        $.getJSON('https://jmonaco.carto.com/api/v2/sql?q= SELECT * FROM countries_homepage WHERE cartodb_id =  ' + data.cartodb_id, function (datapath) {
          document.location.href = '' + window.location.origin + datapath.rows[0].path;
        });
      });

      layer.bind('featureOver', function (e, latlon, pxPos, data, layers) {
        hovers[layers] = 1;
        if (_.any(hovers)) {
          $('#maphome').css('cursor', 'pointer');
        }
      });

      layer.bind('featureOut', function (m, layers) {
        hovers[layers] = 0;
        if (!_.any(hovers)) {
          $('#maphome').css('cursor', 'auto');
        }
      });

      layer.on('featureOver', function (e, latlng, pos, data) {
        if (over === false) {
          $('body').append('<div class="tooltip" style="padding: 5px; position: absolute; z-index: 10; background-color: rgba(255, 255, 255, 1); top:' + (e.pageY - 25) + 'px; left:' + (e.pageX + 25) + 'px">' + data.country + '</div>');
          over = true;
        } else {
          $('.tooltip').html(data.country);
          $('.tooltip').css('top', e.pageY - 25 + 'px');
          $('.tooltip').css('left', e.pageX + 25 + 'px');
        }
      });

      layer.on('featureOut', function (e, latlng, pos, data) {
        over = false;
        $('.tooltip').remove();
      });
      map.invalidateSize();
    });
  })(jQuery);
}
'use strict';

function showSliderHomePage() {
  (function ($) {

    function getSlideConten(dataContent, dataSlide, imageContent, i) {
      var textLink = 'Explore the content';
      var imageSlide = void 0;
      if (dataSlide.text_link) {
        textLink = '' + dataSlide.text_link;
      }
      if (imageContent) {
        if (dataSlide.image) {
          imageSlide = '<div class="c-slider-home-page slider-image-' + i + ' ' + (dataSlide.image ? '-image' : '') + '">';
        } else {
          imageSlide = '<div class="c-slider-home-page slider-image-' + i + ' ' + (dataContent.image ? '-image' : '') + '">';
        }
      } else {
        imageSlide = '<div class="c-slider-home-page slider-image-' + i + ' ' + (dataSlide.image ? '-image' : '') + '">';
      }
      var slideContent = '\n        ' + imageSlide + '\n          <div class="row">\n            <div class="column small-12 medium-9">\n              <div class="container slider-0">\n                <div>\n                  <h1 class="title-text -white">\n                    <a href="' + dataSlide.alias + '">' + dataContent.label + '</a>\n                  </h1>\n                  <div class="small-12 medium-5 large-4">\n                    <a class="c-button -box" href="' + dataSlide.alias + '">' + textLink + '</a>\n                  <div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      ';
      return slideContent;
    }

    $.getJSON('/apiJSON/slider_home_page', function (stories) {
      showLoader('.slider-cover-home');
      for (var i = 0; i < stories.count; i += 1) {
        if (stories.data[i].show) {
          var slide = '';

          if (stories.data[i].information_current) {
            slide = getSlideConten(stories.data[i].information_current, stories.data[i], false, i);
          }

          if (stories.data[i].information_event) {
            slide = getSlideConten(stories.data[i].information_event, stories.data[i], false, i);
          }

          if (stories.data[i].information_irm) {
            slide = getSlideConten(stories.data[i].information_irm, stories.data[i], false, i);
          }

          if (stories.data[i].information_model) {
            slide = getSlideConten(stories.data[i].information_model, stories.data[i], false, i);
          }

          if (stories.data[i].information_news) {
            slide = getSlideConten(stories.data[i].information_news, stories.data[i], false, i);
          }

          if (stories.data[i].information_page) {
            slide = getSlideConten(stories.data[i].information_page, stories.data[i], false, i);
          }

          if (stories.data[i].information_starred) {
            slide = getSlideConten(stories.data[i].information_starred, stories.data[i], false, i);
          }

          if (stories.data[i].information_stories) {
            slide = getSlideConten(stories.data[i].information_stories, stories.data[i], true, i);
          }

          if (stories.data[i].information_working) {
            slide = getSlideConten(stories.data[i].information_working, stories.data[i], false, i);
          }

          if (stories.data[i].information_working_page) {
            slide = getSlideConten(stories.data[i].information_working_page, stories.data[i], false, i);
          }

          $('.slider-cover-home').append(slide);
        }

        if (stories.data[i].information_stories) {
          if (stories.data[i].image) {
            $('.slider-image-' + i).css('background-image', 'url(' + stories.data[i].image + ')');
          }
          if (stories.data[i].information_stories.image) {
            $('.slider-image-' + i).css('background-image', 'url(' + stories.data[i].information_stories.image + ')');
          }
        } else {
          if (stories.data[i].image) {
            $('.slider-image-' + i).css('background-image', 'url(' + stories.data[i].image + ')');
          }
        }
      }
      removeLoader('.slider-cover-home');
      $('.slider-cover-home').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'dots-slider',
        adaptiveHeight: true
      });
    });
  })(jQuery);
}
'use strict';

function showIrmReports() {
  (function ($) {

    // cache
    var countryFilter = 0;
    var typeFilter = 0;
    var page = 1;
    var totalPages = 0;

    //selectors
    var countrySelectorDownload = $('.country-filter-download');
    var countrySelectorComments = $('.country-filter-comments');
    var tabsContainer = $('.tabs-container');
    var containerInfo = $('#container-info');
    var irmContainer = $('#downloadContainer');
    var commentsContainer = $('#commentsContainer');

    // custom callback for tabs component
    var onChangeIRMTabs = function onChangeIRMTabs(id, label) {
      $('.tab-content').addClass('-hidden');
      $('.' + id).removeClass('-hidden');
    };

    function initIRMTabs(onChange) {
      initTabs();
      setTabListeners(onChange);
    }

    function setPageCount(val) {
      $('.reload-thematic-download').data('value', val);
    }

    function setPageCountComments(val) {
      $('.reload-thematic-comments').data('value', val);
    }

    function getCurrentPage() {
      var pageCount = $('.reload-thematic-download').data('value');
      return pageCount;
    }

    function getCurrentPageComments() {
      var pageCount = $('.reload-thematic-comments').data('value');
      return pageCount;
    }

    function onClickPagination() {
      $('.c-pagination-click-download').on('click', function () {
        setPageCount(getCurrentPage() + 1);
        showLoader('#container-info');
        showTilesIrmReports(countryFilter, getCurrentPage());
      });
    }

    function onClickPaginationComments() {
      $('.c-pagination-click-comments').on('click', function () {
        setPageCountComments(getCurrentPageComments() + 1);
        showLoader('#container-info');
        showTilesComments(countryFilter, getCurrentPageComments());
      });
    }

    function showTilesIrmReports(country, pageNext) {
      var activeCountry = parseInt(country) > 0 ? 'filter[id]=' + country + '&' : '';
      $.getJSON('/apiJSON/countries?' + activeCountry + 'sort=label', function (countries) {
        appendTilesIRM(countries.data, irmContainer);
        appendTilesComments(countries.data, commentsContainer);
        removeLoader('#container-info', null, true);
      });
    }

    // function showTilesComments(country, pageNext) {
    //   const activeCountry = parseInt(country) > 0 ? `filter[id]=${country}&` : '';
    //   $.getJSON(`/apiJSON/countries?${activeCountry}sort=label`, function (countries) {
    //     for (let i = 0; i < countries.data.length; i += 1) {
    //
    //     }
    //   });
    // }

    function buildSelectorDownload(selector, placeholder, endpoint, query) {
      selector.select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-green -tall',
        dropdownCssClass: '-green',
        placeholder: '' + placeholder
      });
      selector.append('<option value="0">' + placeholder + '</option>');
      $.getJSON('/apiJSON/' + endpoint + '?' + query, function (data) {
        data.data.forEach(function (data) {
          var option = '<option value="' + data.id + '">' + data.label + '</option>';
          selector.append(option);
        });

        $(countrySelectorDownload).on('change', function () {
          $(irmContainer).html('');
          showLoader('#tab-loader');
          countryFilter = countrySelectorDownload.val();
          page = 1;
          showTilesIrmReports(countryFilter, page);
        });
      });
    }

    function buildSelectorComments(selector, placeholder, endpoint, query) {
      selector.select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-green -tall',
        dropdownCssClass: '-green',
        placeholder: '' + placeholder
      });
      selector.append('<option value="0">' + placeholder + '</option>');
      $.getJSON('/apiJSON/' + endpoint + '?' + query, function (data) {
        data.data.forEach(function (data) {
          var option = '<option value="' + data.id + '">' + data.label + '</option>';
          selector.append(option);
        });

        $(countrySelectorComments).on('change', function () {
          $(irmContainer).html('');
          showLoader('#tab-loader-comments');
          countryFilter = countrySelectorComments.val();
          page = 1;
          showTilesComments(countryFilter, page);
        });
      });
    }

    buildSelectorDownload(countrySelectorDownload, 'All countries', 'countries', 'fields=id,label&sort=label');
    buildSelectorComments(countrySelectorComments, 'All countries', 'countries', 'fields=id,label&sort=label');
    onClickPagination();
    onClickPaginationComments();
    initIRMTabs(onChangeIRMTabs);
    showTilesIrmReports(countryFilter, page);
    // showTilesComments(countryFilter, page);

  })(jQuery);
}
'use strict';

function loginPage() {
  (function ($) {

    $('#edit-name').attr('placeholder', 'Enter your Open Government Partnership username');
    $('#edit-pass').attr('placeholder', 'Enter the password that accompanies your username.');
  })(jQuery);
}
'use strict';

function showNewsEventsPage() {
  (function ($) {
    // cache
    var countryFilter = 0;
    var typeFilter = 0;
    var page = 1;
    var totalPages = 0;
    var totalPagesEvents = 0;
    var pageEvents = 1;

    //selectors
    var countrySelector = $('.country-filter');
    var typeSelector = $('.type-filter');
    var coverEvents = $('.c-content-banner');
    var eventsContainer = $('#eventsTiles');
    var newsContainer = $('#newsTiles');

    // public functions
    function buildHighlightedEvent(event) {
      if (event.image) {
        $('.c-content-banner').css('background-image', 'url(' + event.image + ')');
      }
      if (moment() > moment(event.date.value)) {
        $('.banner-type-date-event').html('Past Event');
      } else {
        $('.banner-type-date-event').html('Upcoming Event');
      }
      $('.banner-link', coverEvents).attr('href', event.alias);
      $('.banner-title', coverEvents).html(event.label);
      $('.banner-date', coverEvents).html(moment(event.date.value).format('MMMM DD, hh:mm a'));
      $('.c-content-banner').removeClass('-hidden');
    }

    function setPageCount(val) {
      $('.page-count').data('value', val);
    }

    function getCurrentPage() {
      var pageCount = $('.page-count').data('value');
      return pageCount;
    }

    function onClickPagination() {
      $('.page-count').on('click', function () {
        setPageCount(getCurrentPage() + 1);
        pageEvents = getCurrentPage();
        if (totalPagesEvents > getCurrentPage()) {
          showLoader('#eventsContainer');
          showEvents(countryFilter, typeFilter, getCurrentPage());
        }
      });
    }

    function buildSelector(selector, placeholder, endpoint, query) {
      selector.select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-green -tall',
        dropdownCssClass: '-green',
        placeholder: '' + placeholder
      });
      selector.append('<option value="0">' + placeholder + '</option>');

      $.getJSON('/apiJSON/' + endpoint + '?' + query, function (data) {
        data.data.forEach(function (data) {
          var option = '<option value="' + data.id + '">' + data.label + '</option>';
          selector.append(option);
        });

        selector.on('change', function () {
          // showLoader('#newsContainer');
          showLoader('#eventsContainer');
          countryFilter = countrySelector.val();
          typeFilter = typeSelector.val();
          page = 1;
          // showNews(countryFilter, typeFilter, page);
          showEvents(countryFilter, typeFilter, page);
        });
      });
    }

    function setPaginationListerners() {
      countryFilter = countrySelector.val();
      typeFilter = typeSelector.val();
      $('.onClickPagination').on('click', function (e) {
        showLoader('#newsContainer');
        var pageNum = $(this).data('value');
        showNews(countryFilter, typeFilter, pageNum);
      });
    }

    function showEvents(country, type, page) {
      var activeCountry = parseInt(country) > 0 ? 'filter[country]=' + country + '&' : '';
      var activeType = parseInt(type) > 0 ? 'filter[category]=' + type + '&' : '';
      var activeFilters = '' + activeCountry + activeType + '&page[number]=' + page + '&page[size]=8';
      $.getJSON('/apiJSON/events?' + activeFilters + '&sort=-date', function (events) {
        totalPagesEvents = getPageCount(events.count, 4);
        if (events.data.length > 0) {
          if (pageEvents === 1) {
            $.getJSON('/apiJSON/events?sort=-date', function (highlightedEvent) {
              buildHighlightedEvent(highlightedEvent.data[0]);
              appendTilesEvent(events.data, eventsContainer);
              removeLoader('#eventsContainer', null, true);
            });
          } else {
            appendTilesEvent(events.data, eventsContainer);
            removeLoader('#eventsContainer', null, true);
          }
        } else {
          showNoResults('#eventsContainer', 'No events with these filters', 'tall', 'grey', 'xxlarge', 'blue');
          removeLoader('#eventsContainer', null, true);
        }
      });
    }

    function showNews(country, type, page) {
      var activeCountry = parseInt(country) > 0 ? 'filter[country]=' + country + '&' : '';
      var activeType = parseInt(type) > 0 ? 'filter[category]=' + type + '&' : '';
      var activeFilters = '' + activeCountry + activeType + '&page=' + page;
      $.getJSON('/apiJSON/news?' + activeFilters + '&sort=-date', function (news) {
        if (news.data.length > 0) {
          totalPages = getPageCount(news.count, 4);
          if (page === 1) {
            $.getJSON('/apiJSON/news?sort=-date', function (highlightedNews) {
              buildHighlightedEvent(highlightedNews.data[0]);
              appendTilesDetailedNews(news.data, newsContainer, 2);
              initPagination(page, totalPages, 'newsEventsPage');
              setPaginationListerners();
              removeLoader('#newsContainer', null, true);
            });
          } else {
            appendTilesDetailedNews(news.data, newsContainer, 2);
            removeLoader('#newsContainer', null, true);
            initPagination(page, totalPages, 'newsEventsPage');
            setPaginationListerners();
          }
        } else {
          showNoResults('#newsTiles', 'No news with these filters', 'tall', 'grey', 'xxlarge', 'blue');
          $('.c-pagination').html('');
          removeLoader('#newsContainer', null, true);
        }
      });
    }

    // build page
    buildSelector(countrySelector, 'All countries', 'countries', 'fields=id,label&sort=label');
    buildSelector(typeSelector, 'All story types', 'stories_categories', 'fields=id,label&sort=label');
    showEvents(countryFilter, typeFilter, page);
    showNews(countryFilter, typeFilter, page);
    onClickPagination();
  })(jQuery);
}
'use strict';

function showPageList() {
  (function ($) {
    var page = 1;
    var totalPages = 0;
    var sortValue = 'asc';

    $('.sort-field').click(function () {
      if (sortValue === 'asc') {
        $('.triangle-sort').css('transform', 'rotate(180deg)'); // use this functions, because jquery method addClass not work with svg.
        sortValue = 'desc';
      } else {
        $('.triangle-sort').css('transform', 'rotate(0deg)');
        sortValue = 'asc';
      }
      page = 1;
      showLoader('#tableContainer');
      showPages(page, sortValue);
    });

    function setPaginationListerners() {
      $('.onClickPagination').on('click', function (e) {
        showLoader('#tableContainer');
        var pageNum = $(this).data('value');
        showPages(pageNum, sortValue);
      });
    }

    function showPages(pageNumber, sort) {
      var sortApi = '';
      if (sort === 'asc') {
        sortApi = 'sort=label';
      } else {
        sortApi = 'sort-=label';
      }

      $.getJSON('/apiJSON/page?&page=' + pageNumber + '&' + sortApi, function (pageresult) {
        totalPages = getPageCount(pageresult.count, 5);
        if (page === 1) {
          $.getJSON('/apiJSON/page?date&page=' + pageNumber + '&' + sortApi, function (pageTable) {
            createTable(pageTable, 'pages');
            initPagination(pageNumber, totalPages, 'pagesList');
            setPaginationListerners();
            removeLoader('#tableContainer', null, true);
          });
        } else {
          createTable(pageresult, 'pages');
          removeLoader('#tableContainer', null, true);
          initPagination(pageNumber, totalPages, 'pagesList');
          setPaginationListerners();
        }
      });
    }

    showPages(page, sortValue);
  })(jQuery);
}
'use strict';

function peopleInvolved(id) {
  (function ($) {
    function getPeopleInvolvedStories(idPeople) {
      var content = '';
      $.getJSON('/apiJSON/stories?filter[author]=' + idPeople, function (data) {
        showLoader('.container-content-user');
        if (data.count !== 0) {
          data.data.forEach(function (data) {
            content += '<div class="small-12 column  medium-4 blogs-detail">\n                      <a href="/' + data.alias + '"><div class="contain-text">\n                        <span class="text -white -title-x-small">' + data.label + '</span>\n                        <span class="text -white">' + moment.unix(parseInt(data.created)).format('D MMMM YYYY') + '</span>\n                      </div></a>\n                    </div>';
          });
          removeLoader('.container-content-user');
          $('.containter-people-detail').append(content);
        } else {
          removeLoader('.container-content-user');
          $('.containter-people-detail').append('<div class="small-12 column"><span class="text -white -small-bold">No results found</span></div>');
        }
      });
    }

    function getPeopleInvolvedNews(idPeople) {
      var content = '';
      $.getJSON('/apiJSON/news?filter[author]=' + idPeople, function (data) {
        showLoader('.container-content-user-news');
        if (data.count !== 0) {
          data.data.forEach(function (data) {
            content += '<div class="small-12 column  medium-4 news-detail">\n                      <a href="/' + data.alias + '"><div class="contain-text">\n                        <span class="text -white -title-x-small">' + data.label + '</span>\n                        <span class="text -white">' + moment.unix(parseInt(data.created)).format('D MMMM YYYY') + '</span>\n                      </div></a>\n                    </div>';
          });
          removeLoader('.container-content-user-news');
          $('.containter-people-detail-news').append(content);
        } else {
          removeLoader('.container-content-user-news');
          $('.containter-people-detail-news').append('<div class="small-12 column"><span class="text -white -small-bold">No results found</span></div>');
        }
      });
    }

    function getPicture(idPeople) {
      $.getJSON('/apiJSON/people/' + idPeople + '?fields=image', function (data) {
        showLoader('.image-profile');
        $('.image-profile').css('background-image', 'url(' + data.data[0].image + ')');
        removeLoader('.image-profile');
      });
    }

    getPeopleInvolvedStories(id);
    getPeopleInvolvedNews(id);
    getPicture(id);
  })(jQuery);
}
'use strict';

function showGroupResourcesDetail(id) {
  (function ($) {

    // cache dom
    var currentNode = $('#groupResourcesDetail').data('node');
    var tabsContainer = $('#groupResourcesTabs .tabs-container');
    var searchContainer = $('#resourceTilesSearch input');
    var tilesContainer = $('#tilesContainer');
    var searchEl = $('.c-tile');
    var searchText = $('.c-tile .tile');

    // custom callback for tabs component
    var onChangeTab = function onChangeTab(sub_group_id, label) {
      hideNoResults('#noResultsContainer');
      showLoader('.l-section');
      tilesContainer.html('');
      searchContainer.val('');
      var filterGroup = currentNode === 2920 ? '' : 'filter[group_resource]=' + currentNode + '&';
      $.getJSON('/apiJSON/resources?' + filterGroup + 'filter[sub_group]=' + sub_group_id + '&sort=-post_highlighted', function (data) {
        if (data.data.length) {
          appendTiles(data.data, tilesContainer, 4);
        } else {
          showNoResults('#noResultsContainer', 'No resources available', 'tall', 'grey', 'xxlarge', 'blue');
        }
        removeLoader('.l-section', null, true);
      });
      setSearchPlaceholder(searchContainer, label);
    };

    // fetch content and append
    $.getJSON('/apiJSON/sub_group_resource', function (data) {
      buildTabs(data.data, tabsContainer, onChangeTab);
      setSearchPlaceholder(searchContainer, data.data[0].label);
      setSearchListeners(searchEl, searchText);
      var filterGroup = currentNode === 2920 ? '' : 'filter[group_resource]=' + currentNode + '&';
      $.getJSON('/apiJSON/resources?' + filterGroup + 'filter[sub_group]=' + data.data[0].id + '&sort=-post_highlighted', function (resources) {
        if (resources.data.length) {
          appendTiles(resources.data, tilesContainer, 4);
        } else {
          showNoResults('#noResultsContainer', 'No resources available', 'tall', 'grey', 'xxlarge', 'blue');
        }
        removeLoader('.l-section', null, true);
      });
    });
  })(jQuery);
}
'use strict';

function showGroupResourcesPage() {
  (function ($) {
    // cache dom
    var tileContainer = $('#groupResourcesTiles');

    // fetch content and append
    $.getJSON('/apiJSON/group_resources', function (data) {
      data.data.forEach(function (resource) {
        var html = '\n          <div class="column small-12 medium-4 c-tile">\n            <a href="/' + resource.alias + '" class="tile -tall">\n              <span class="text -tile -white">\n                ' + resource.label + '\n              </span>\n            </a>\n          </div>\n        ';
        tileContainer.append(html);
      });
      removeLoader('.l-section', null, true);
    });
  })(jQuery);
}
'use strict';

function showResourcesDetail(id) {
  (function ($) {
    $.getJSON('/apiJSON/resources?filter[id]=' + id, function (data) {
      buildExploreMoreTiles('resources', 'group_resource', data.data[0].group_resource[0]);
    });
  })(jQuery);
}
'use strict';

function featuresResultPage() {
  (function ($) {

    $('#value-search').html('Search for: ' + $('#edit-keys').val());
  })(jQuery);
}
'use strict';

function searchPage() {
  (function ($) {

    $('.search-form input').attr('placeholder', 'Type what you are searching for...');
  })(jQuery);
}
'use strict';

function showStoryDetail(id) {
  (function ($) {

    // data for post
    $.getJSON('/apiJSON/stories/' + id, function (data) {
      // cache
      var story = data.data[0];
      var creationDate = moment.unix(parseInt(story.created)).format('D MMMM YYYY');
      var metaHtml = '';
      var authorsHtml = '<strong class="text -bold">Authors: </strong>';
      // set country tags
      if (story.country.length) {
        var countries = story.country;
        countries.forEach(function (country, index) {
          var pathCountry = '' + country.alias;
          if (index === countries.length - 1) {
            metaHtml += '<a href="/' + pathCountry + '">' + country.label + '</a><span class="text -post-meta"> | </span>';
          } else {
            metaHtml += '<a href="/' + pathCountry + '">' + country.label + ', </a>';
          }
        });
      }
      metaHtml += '<span class="text -post-meta">' + creationDate + '</span>';
      $('.countries').html(metaHtml);

      // set body content
      if (story.content) {
        $('.-body-content').html(story.content.value);
      }

      // set author and topics
      if (story.author[0]) {
        story.author.forEach(function (author, index) {
          if (index === story.author.length - 1) {
            authorsHtml += '<a class="text -blank" href="/' + author.alias + '">' + author.label + '</a>';
          } else {
            authorsHtml += '<a class="text -blank" href="/' + author.alias + '">' + author.label + ', </a>';
          }
        });
        $('.author').append(authorsHtml);
      }

      if (story.topic[0]) {
        $('.topic').append('<strong class="text -bold">Topics: </strong>');
        story.topic.forEach(function (topic, index) {
          var pathTheme = '' + topic.alias;
          if (index === story.topic.length - 1) {
            $('.topic').append('<a class="text -blank" href="/' + pathTheme + '">' + topic.label + '</a>');
          } else {
            $('.topic').append('<a class="text -blank" href="/' + pathTheme + '">' + topic.label + '</a>, ');
          }
        });
      }

      if (story.tags) {
        $('.tags').append('<strong class="text -bold">Tags: </strong>');
        story.tags.forEach(function (tag, index) {
          if (index === story.tags.length - 1) {
            $('.tags').append('<span class="text -blank">' + tag.label + '</span>');
          } else {
            $('.tags').append('<span class="text -blank">' + tag.label + '</span>, ');
          }
        });
      }

      if (story.type) {
        $('.filed-under').append('<strong class="text -bold">Filed Under: </strong>');
        $('.filed-under').append('<span class="text -blank">' + story.type.label + '</a>');
      }

      removeLoader('#storiesDetail');
    });
  })(jQuery);
}
'use strict';

function showStoriesPage() {
  (function ($) {

    // cache
    var countryFilter = 0;
    var typeFilter = 0;
    var page = 1;
    var totalPages = 0;
    var authorsHtml = '';

    //selectors
    var countrySelector = $('.country-filter');
    var typeSelector = $('.type-filter');
    var coverEvents = $('.c-content-banner');
    var storiesContainer = $('#storiesTiles');

    // public functions
    function buildHighlightedEvent(story) {
      if (story.image) {
        $('.c-content-banner').css('background-image', 'url(' + story.image + ')');
      }
      if (story.author[0]) {
        story.author.forEach(function (author, index) {
          if (index === story.author.length - 1) {
            authorsHtml += '<a class="text -white" href="/' + author.alias + '">' + author.label + '</a>';
          } else {
            authorsHtml += '<a class="text -white" href="/' + author.alias + '">' + author.label + ', </a>';
          }
        });
      }
      $('.banner-link', coverEvents).attr('href', story.alias);
      $('.banner-title', coverEvents).html(story.label);
      $('.banner-date', coverEvents).html(moment.unix(story.created).format('D MMMM YYYY'));
      if (story.author[0]) {
        $('.banner-author', coverEvents).html(authorsHtml);
      }
      $('.c-content-banner').removeClass('-hidden');
    }

    function buildSelector(selector, placeholder, endpoint, query) {
      selector.select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-green -tall',
        dropdownCssClass: '-green',
        placeholder: '' + placeholder
      });
      selector.append('<option value="0">' + placeholder + '</option>');

      $.getJSON('/apiJSON/' + endpoint + '?' + query, function (data) {
        data.data.forEach(function (data) {
          var option = '<option value="' + data.id + '">' + data.label + '</option>';
          selector.append(option);
        });

        selector.on('change', function () {
          showLoader('#storiesContainer');
          countryFilter = countrySelector.val();
          typeFilter = typeSelector.val();
          page = 1;
          showStories(countryFilter, typeFilter, page);
        });
      });
    }

    function setPaginationListerners() {
      countryFilter = countrySelector.val();
      typeFilter = typeSelector.val();
      $('.onClickPagination').on('click', function (e) {
        showLoader('#storiesContainer');
        var pageNum = $(this).data('value');
        showStories(countryFilter, typeFilter, pageNum);
      });
    }

    function showStories(country, type, page) {
      var activeCountry = parseInt(country) > 0 ? 'filter[country]=' + country + '&' : '';
      var activeType = parseInt(type) > 0 ? 'filter[category]=' + type + '&' : '';
      var activeFilters = '' + activeCountry + activeType + '&page[number]=' + page + '&page[size]=8';
      $.getJSON('/apiJSON/stories?' + activeFilters + '&sort=-created', function (stories) {
        if (stories.data.length > 0) {
          totalPages = getPageCount(stories.count, 8);
          // if (page === 1) {
          //   $.getJSON(`/apiJSON/stories?sort=-created`, function (highlightedStory) {
          //     if (highlightedStory.data[0]) {
          //       buildHighlightedEvent(highlightedStory.data[0]);
          //     }
          //     appendTilesDetailed(stories.data, storiesContainer, 2);
          //     initPagination(page, totalPages, 'storiesPage');
          //     setPaginationListerners();
          //     removeLoader('#storiesContainer', null, true);
          //   });
          // } else {
          appendTilesDetailed(stories.data, storiesContainer, 2);
          removeLoader('#storiesContainer', null, true);
          initPagination(page, totalPages, 'storiesPage');
          setPaginationListerners();
          // }
        } else {
          showNoResults('#storiesTiles', 'No stories with these filters', 'tall', 'grey', 'xxlarge', 'blue');
          $('.c-pagination').html('');
          removeLoader('#storiesContainer', null, true);
        }
      }).error(function () {
        showNoResults('#storiesTiles', 'Sorry, stories counld not be found', 'tall', 'grey', 'xxlarge', 'blue');
        $('.c-pagination').html('');
        removeLoader('#storiesContainer', null, true);
      });
    }

    // build page
    buildSelector(countrySelector, 'All countries', 'countries', 'fields=id,label&sort=label');
    buildSelector(typeSelector, 'All story types', 'stories_categories', 'fields=id,label&sort=label');
    showStories(countryFilter, typeFilter, page);
  })(jQuery);
}
'use strict';

function showStoriesSubmitPage(id) {
  (function ($) {

    // cache
    var themeSelector = '.type-select';
    var countrySelector = '.country-select';

    $('#stories-menu').addClass('active');

    $(themeSelector).select2({
      minimumResultsForSearch: Infinity,
      containerCssClass: '-tall',
      placeholder: 'All story types'
    });
    $(countrySelector).select2({
      minimumResultsForSearch: Infinity,
      containerCssClass: '-tall',
      placeholder: 'All countries'
    });

    $.getJSON('/apiJSON/countries?fields=id,name,label&sort=label', function (data) {
      appendSelectOptionsFromData(countrySelector, data.data);
      $.getJSON('/apiJSON/themes?sort=label&fields=id,label', function (data) {
        appendSelectOptionsFromData(themeSelector, data.data);
        removeLoader('.c-form', null, true);
      });
    });

    $('.js-submit-story').click(function () {
      var title = $('.-title').val();
      var countryId = $('.country-select').val();
      var topicId = $('.type-select').val();
      var date = $('.-date').val();
      var image = $('.-image').val();
      var content = $('.-content').val();
      var email = $('.-email').val();
      var author = $('.-author').val();
      $.ajax({
        url: '/sites/all/themes/custom/ogp_theme/phpFunctions/createNode.php',
        type: 'POST',
        dataType: 'json',
        data: {}
      }).done(function (data) {});
    });
  })(jQuery);
}
"use strict";

function tagsPage() {
  (function ($) {})(jQuery);
}
'use strict';

function showThemesDetail(id) {
  (function showAPIThemes($) {

    //cache
    var countrySelector = $('.country-selector');
    var contentContainer = $('#contentContainer .content-tiles');
    var contributorText = $('#contributorsText');
    var countryFilter = void 0;

    // local functions
    function setContributorsText(log, author, email) {
      var html = '\n        <b>Contributors:</b> This topic has been developed for the Open Gov Guide by the National Democratic Institute. The lead author was Patrick Merloe with contributions from Michelle Brown and Tova Wang. Please send comments to pat@ndi.org.\n      ';
      contributorText.html(html);
    }

    function setSelectCountryListerners() {
      countrySelector.on('change', function () {
        hideNoResults();
        showLoader('#themesDetail');
        var activeTab = $('.c-tabs .-selected').data('node');
        var countryModel = $(this).val();
        if (parseInt(countryModel) === 0) {
          showContent(contentContainer, activeTab);
        } else {
          showContent(contentContainer, activeTab, countryModel);
        }
      });
    }

    // init selector
    function initSelectors() {
      countrySelector.select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-green -tall',
        dropdownCssClass: '-green',
        placeholder: 'All countries'
      });
      $('.select2').addClass('-green-select');
      $.getJSON('/apiJSON/countries?fields=id,label&sort=label', function (data) {
        data.data.forEach(function (country) {
          var option = '<option value="' + country.id + '">' + country.label + '</option>';
          countrySelector.append(option);
        });
      });
      setSelectCountryListerners();
    }

    // custom callback for tabs component
    var onChangeTab = function onChangeTab(id, label) {
      hideNoResults();
      showLoader('#themesDetail');
      $('#themesDetail .-body-content').addClass('-hidden');
      $('#themesDetail .' + id).removeClass('-hidden');
      var activeCountry = countrySelector.val();
      if (parseInt(activeCountry) === 0) {
        showContent(contentContainer, id);
      } else {
        showContent(contentContainer, id, activeCountry);
      }
      setContributorsText();
      if (id === 'modelcommitments') {
        contributorText.removeClass('-hidden');
      } else {
        contributorText.addClass('-hidden');
      }
    };

    function showContent(container, endpoint, countryFilter) {
      container.html('');
      var countryQuery = countryFilter && endpoint !== 'modelcommitments' ? '&filter[country]=' + countryFilter : '';
      var sorting = endpoint === 'stories' ? '-created' : 'label';
      $.getJSON('/apiJSON/' + endpoint + '?filter[theme]=' + id + countryQuery + '&sort=' + sorting, function (data) {
        hideNoResults();
        if (data.data.length) {
          appendTilesWithoutBackground(data.data, container, 2, '-themes');
        } else {
          showNoResults(container, 'No content available', 'tall', 'grey', 'xxlarge', 'blue');
        }
        removeLoader('#themesDetail', null, true);
      });
    }
    // init page
    initTabs();
    setTabListeners(onChangeTab);
    initSelectors();
    showContent(contentContainer, 'starredcommitments');
    buildExploreMoreTiles('themes');
  })(jQuery);
}
'use strict';

function showThemesPage() {
  (function showAPIThemes($) {

    //consts
    var themesContainer = $('#tilesContainer');
    var searchContainer = $('#themesTilesSearch input');
    var searchEl = $('.c-tile');
    var searchText = $('.c-tile .tile');
    var themesTitle = $('.tiles-heading');

    // local functions
    function showThemesTiles() {
      $.getJSON('/apiJSON/themes?sort=label', function (data) {
        if (data.data.length) {
          appendTiles(data.data, themesContainer, 3);
        } else {
          showNoResults('#tilesNoResults', 'No themes available', 'tall', 'grey', 'xxlarge', 'blue');
        }
        removeLoader('.l-section', null, true);
      });
    }

    // custom callback for tabs component
    var onChangeTab = function onChangeTab(id, label) {
      themesTitle.html(label);
      var currentSearch = searchContainer.val();
      currentSearch = currentSearch.toLowerCase();
      var parseId = parseInt(id);
      $('.c-tile').each(function () {
        if (currentSearch) {
          if ($(this).data('group') === parseId && $(this).html().toLowerCase().indexOf(currentSearch) > -1 || id === '0' && $('.tile', this).html().toLowerCase().indexOf(currentSearch) > -1) {
            $(this).css('display', 'block');
          } else {
            $(this).css('display', 'none');
          }
        } else {
          if ($(this).data('group') === parseId || parseId === 0) {
            $(this).css('display', 'block');
          } else {
            $(this).css('display', 'none');
          }
        }
      });

      // check for zero results
      var results = $('.c-tile').filter(function () {
        return $(this).css('display') === 'block';
      }).length;

      // show empty results
      if (results === 0) {
        showNoResults('#noResultsContainer', 'No themes available', 'tall', 'grey', 'xxlarge', 'blue');
      } else {
        hideNoResults('#noResultsContainer');
      }
    };

    // init page
    showThemesTiles();
    initTabs();
    setTabListeners(onChangeTab);
    setSearchListeners(searchEl, searchText);
  })(jQuery);
}
'use strict';

function showGroupList() {
  (function ($) {
    var page = 1;
    var totalPages = 0;
    var sortValue = 'asc';
    var tableContainer = $('.container-info-table');

    $('.sort-field').click(function () {
      if (sortValue === 'asc') {
        $('.triangle-sort').css('transform', 'rotate(180deg)'); // use this functions, because jquery method addClass not work with svg.
        sortValue = 'desc';
      } else {
        $('.triangle-sort').css('transform', 'rotate(0deg)');
        sortValue = 'asc';
      }
      page = 1;
      showLoader('#tableContainer');
      showGroups(page, sortValue);
    });

    function setPaginationListerners() {
      $('.onClickPagination').on('click', function (e) {
        showLoader('#tableContainer');
        var pageNum = $(this).data('value');
        showGroups(pageNum, sortValue);
      });
    }

    function showGroups(page, sort) {
      var sortApi = '';

      if (sort === 'asc') {
        sortApi = 'sort=label';
      } else {
        sortApi = 'sort-=label';
      }

      $.getJSON('/apiJSON/working_group?&page=' + page + '&' + sortApi, function (working) {
        totalPages = getPageCount(working.count, 5);
        if (page === 1) {
          $.getJSON('/apiJSON/working_group?date&page=' + page + '&' + sortApi, function (workingTable) {
            createTable(workingTable, 'groups');
            initPagination(page, totalPages, 'workingGroupList');
            setPaginationListerners();
            removeLoader('#tableContainer', null, true);
          });
        } else {
          createTable(working, 'groups');
          removeLoader('#tableContainer', null, true);
          initPagination(page, totalPages, 'workingGroupList');
          setPaginationListerners();
        }
      });
    }
    showGroups(page, sortValue);
  })(jQuery);
}
'use strict';

function showWorkingGroupDetail(id) {
  (function ($) {
    var tabsContainer = $('.tabs-container');
    var containerInfo = $('#container-info');

    // custom callback for tabs component
    var onChangeWorkinPageTab = function onChangeWorkinPageTab(id, label) {
      $('.tab-content').addClass('-hidden');
      $('.' + id).removeClass('-hidden');
    };

    function initWorkingTabs(onChange) {
      initTabs();
      setTabListeners(onChange);
    }
    showLoader('.working-group-content');
    $.getJSON('/apiJSON/working_group_page?filter[working_group]=' + id + '&filter[show]=1&sort=order', function (data) {
      buildTabs(data.data, tabsContainer, onChangeWorkinPageTab);
      initWorkingTabs(onChangeWorkinPageTab);
      for (var i = 0; i < data.data.length; i += 1) {
        containerInfo.append('\n          <div class="tab-content -hidden ' + data.data[i].id + '">\n            <h3 class="text -section-title">' + data.data[i].label + '</h3>\n            <div class="text -body-content">\n              ' + data.data[i].body.value + '\n            </div>\n          </div>\n        ');
      }
      removeLoader('.working-group-content', null, true);
    });
  })(jQuery);
}
//# sourceMappingURL=bundle.js.map
