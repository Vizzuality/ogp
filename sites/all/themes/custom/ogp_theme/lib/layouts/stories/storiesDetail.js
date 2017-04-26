function showStoryDetail(id) {
  (function ($) {

    // data for post
    $.getJSON(`/apiJSON/stories/${id}`, function (data) {
      // cache
      const story = data.data[0];
      const creationDate = moment.unix(parseInt(story.created)).format('D MMMM YYYY');
      let metaHtml = '';
      let authorsHtml = '<strong class="text -bold">Authors: </strong>';
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
            authorsHtml += `<a class="text -blank" href="/${author.alias}">${author.label}</a>`;
          } else {
            authorsHtml += `<a class="text -blank" href="/${author.alias}">${author.label}, </a>`;
          }
        });
        $('.author').append(authorsHtml);
      }

      if (story.topic[0]) {
        $('.topic').append('<strong class="text -bold">Topics: </strong>');
        story.topic.forEach(function(topic, index) {
          const pathTheme = `${topic.alias}`;
          if (index === story.topic.length - 1) {
            $('.topic').append(`<a class="text -blank" href="/${pathTheme}">${topic.label}</a>`);
          } else {
            $('.topic').append(`<a class="text -blank" href="/${pathTheme}">${topic.label}</a>, `);
          }
        });
      }

      if (story.tags) {
        console.log(story.tags);
        $('.tags').append('<strong class="text -bold">Tags: </strong>');
        story.tags.forEach(function(tag, index) {
          if (index === story.tags.length - 1) {
            $('.tags').append(`<span class="text -blank">${tag.label}</span>`);
          } else {
            $('.tags').append(`<span class="text -blank">${tag.label}</span>, `);
          }
        });
      }

      if (story.type) {
        $('.filed-under').append('<strong class="text -bold">Filed Under: </strong>');
        $('.filed-under').append(`<span class="text -blank">${story.type.label}</a>`);
      }

      removeLoader('#storiesDetail');
    });
  })(jQuery);
}
