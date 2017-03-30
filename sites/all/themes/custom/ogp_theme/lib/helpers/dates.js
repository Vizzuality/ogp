function convertPostDate(date, format) {
  var dateString = new Date(date * 1e3);
  var dd = dateString.getDate();
  var mm = dateString.getMonth() + 1; //January is 0!
  var yyyy = dateString.getFullYear();

  if (format === 'dd/mm/yyyy') {
    if ( dd < 10 ) {
      dd = `0${dd}`;
    }

    if ( mm < 10 ) {
      mm = `0${mm}`;
    }
  }

  dateString = `${dd}/${mm}/${yyyy}`;

  return dateString;
}

function convertEventDate(date) {
  var myDate = moment(date, 'YYYY-M-DD HH:mm:ss');
  return myDate.format('MMMM D, YYYY - hh:mm');
}

function dateDiff(date) {
  return moment().diff(date, 'days');
}
