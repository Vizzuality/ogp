function peopleInvolved(id) {
  (function($) {
    function getPeopleInvolvedStories(idPeople) {
      let content = '';
      $.getJSON(`/apiJSON/stories?filter[author]=${idPeople}`, function (data) {
        showLoader('.container-content-user');
        if (data.count !== 0) {
          data.data.forEach(function(data) {
            content += `<div class="small-12 column  medium-4 blogs-detail">
                      <a href="/${data.alias}"><div class="contain-text">
                        <span class="text -white -title-x-small">${data.label}</span>
                        <span class="text -white">${moment.unix(parseInt(data.created)).format('D MMMM YYYY')}</span>
                      </div></a>
                    </div>`;
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
      let content = '';
      $.getJSON(`/apiJSON/news?filter[author]=${idPeople}`, function (data) {
        showLoader('.container-content-user-news');
        if (data.count !== 0) {
          data.data.forEach(function(data) {
            content += `<div class="small-12 column  medium-4 news-detail">
                      <a href="/${data.alias}"><div class="contain-text">
                        <span class="text -white -title-x-small">${data.label}</span>
                        <span class="text -white">${moment.unix(parseInt(data.created)).format('D MMMM YYYY')}</span>
                      </div></a>
                    </div>`;
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
      $.getJSON(`/apiJSON/people/${idPeople}?fields=image`, function (data) {
        showLoader('.image-profile');
        $('.image-profile').css('background-image', `url(${data.data[0].image})`);
        removeLoader('.image-profile');
      });
    }

    getPeopleInvolvedStories(id);
    getPeopleInvolvedNews(id);
    getPicture(id);
  })(jQuery);
}
