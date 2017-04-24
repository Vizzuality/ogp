function peopleInvolved(id) {
  (function($) {
    function getPeopleInvolvedStories(idPeople) {
      showLoader('.container-content-user');
      let content = '';
      $.getJSON(`/apiJSON/stories?filter[author]=${idPeople}`, function (data) {
        if (data.count !== 0){
          data.data.forEach(function(data) {
            content += `<div class="small-12 column  medium-4 blogs-detail">
                      <a href="/${data.alias}"><div class="contain-text">
                        <span class="text -white -title-x-small">${data.label}</span>
                        <span class="text -white">${moment.unix(parseInt(data.created)).format('D MMMM YYYY')}</span>
                      </div></a>
                    </div>`;
          });
        } else {
          $('.l-people-involved').removeClass('-no-bottom ');
          $('.container-content-user').remove();
        }
        removeLoader('.container-content-user');
        $('.containter-people-detail').append(content);
      });
    }

    getPeopleInvolvedStories(id);
  })(jQuery);
}
