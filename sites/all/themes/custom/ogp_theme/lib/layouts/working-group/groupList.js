function showGroupList() {
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
      showGroups(page, sortValue);
    });

    function setPaginationListerners() {
      $('.onClickPagination').on('click', function(e) {
        showLoader('#tableContainer');
        const pageNum = $(this).data('value');
        showGroups(pageNum, sortValue);
      })
    }

    function showGroups(page, sort) {
      let sortApi = '';

      if (sort === 'asc') {
        sortApi = 'sort=label'
      } else {
        sortApi = 'sort-=label'
      }

      $.getJSON(`/apiJSON/working_group?&page=${page}&${sortApi}`, function (working) {
        totalPages = getPageCount(working.count, 5);
        if (page === 1) {
          $.getJSON(`/apiJSON/working_group?date&page=${page}&${sortApi}`, function (workingTable) {
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
