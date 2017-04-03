function showPageList() {
  (function($) {
    let page = 1;
    let totalPages = 0;
    let sortValue = 'asc';
    const tableContainer = $('.container-info-table');

    $('.sort-field').click(function() {
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
      $('.onClickPagination').on('click', function(e) {
        showLoader('#tableContainer');
        const pageNum = $(this).data('value');
        showPages(pageNum, sortValue);
      })
    }

    function showPages(pageNumber, sort) {
      let sortApi = '';
      if (sort === 'asc') {
        sortApi = 'sort=label'
      } else {
        sortApi = 'sort-=label'
      }

      $.getJSON(`/apiJSON/page?&page=${pageNumber}&${sortApi}`, function (pageresult) {
        totalPages = getPageCount(pageresult.count, 5);
        if (page === 1) {
          $.getJSON(`/apiJSON/page?date&page=${pageNumber}&${sortApi}`, function (pageTable) {
            createTable(pageTable);
            initPagination(pageNumber, totalPages, 'pagesList');
            setPaginationListerners();
            removeLoader('#tableContainer', null, true);
          });
        } else {
          createTable(pageresult);
          removeLoader('#tableContainer', null, true);
          initPagination(pageNumber, totalPages, 'pagesList');
          setPaginationListerners();
        }
      });
    }

    function createTable(data) {
      let html = '';
      for (let i = 0; i < data.data.length; i += 1) {
        if (data.data[i].body) {
          html += `
            <tr class="text">
              <th class="text -small-bold">${data.data[i].label}</th>
              <th class="text">${data.data[i].page_category.label}</th>
              <th class="text -blue -capitalize">${moment(parseInt(data.data[i].date) * 1000).startOf('month').fromNow()}</th>
              <th><a class="text -blue -capitalize" href="${data.data[i].alias}">Go to Page <svg class="icon -blue -medium"><use xlink:href="#icon-arrow"></use></svg></a></th>
            </tr>
          `;
        }
      }
      tableContainer.html(html);
    }
    showPages(page, sortValue);
  })(jQuery);
}
