function showStoryDetail(id) {
  (function ($) {

    // data for post
    $.getJSON(`/apiJSON/stories/${id}`, function (data) {
      // cache
      const story = data.data[0];
      const creationDate = moment.unix(parseInt(story.created)).format('D MMMM YYYY');
      let metaHtml = '';
      let authorsHtml = '<strong class="text">Authors: </strong>';
      // set country tags
      if (story.country.length) {
        const countries = story.country;
        countries.forEach(function(country, index) {
          const pathCountry = `${country.alias}`;
          if (index === countries.length - 1) {
            metaHtml += `<a href="/${pathCountry}">${country.label}</a><span class="text -post-meta"> | </span>`;
          } else {
            metaHtml += `<a href="/${pathCountry}">${country.label}, </a>`;
          }
        });
      }
      metaHtml += `<span class="text -post-meta">${creationDate}</span>`;
      $('.countries').html(metaHtml);

      // set body content
      if (story.content) {
        $('.-body-content').html(story.content.value);
      }

      // set author and topics
      if (story.author[0]) {
        story.author.forEach(function(author ,index) {
          if (index === story.author.length - 1) {
            authorsHtml += `<a class="text" href="${author.alias}">${author.label}</a>`;
          } else {
            authorsHtml += `<a class="text" href="${author.alias}">${author.label}, </a>`;
          }
        });
        $('.author').append(authorsHtml);
      }

      if (story.topic[0]) {
        $('.topic').append('<strong class="text">Topics: </strong>');
        story.topic.forEach(function(topic) {
          const pathTheme = `${topic.alias}`;
          $('.topic').append(`<a class="text" href="${pathTheme}">${topic.label}</a> `);
        });
      }

      $('p').each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        $this.remove();
      });

      removeLoader('#storiesDetail');
    });
  })(jQuery);
}