function getAuthors(data) {
  let authorString = ''
  data.forEach(function(author, index) {
    if (index === data.length - 1) {
      authorString += `${author.label}`;
    } else {
      authorString += `${author.label}, `;
    }
  });
  return authorString;
}
