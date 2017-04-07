function getAuthors(data) {
  let authorString = '';
  if (data[0]) {
    data.forEach(function (author, index) {
      if (index === data.length - 1) {
        authorString += `${author.label}`;
      } else {
        authorString += `${author.label}, `;
      }
    });
  }
  return authorString;
}

function stripEmptyStrings() {
  $('p').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
    $this.remove();
  });
}
