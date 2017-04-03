function showPageList() {
  (function($) {
    let page = 1;
    let totalPages = 0;
    let sortValue = 'asc';

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
