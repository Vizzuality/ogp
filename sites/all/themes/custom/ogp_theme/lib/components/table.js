function createTable(data, type) {
  let html = '';
  const tableContainer = $('.container-info-table');
  const length = data.data.length;
  switch (type) {
    case 'pages':
      for (let i = 0; i < length; i += 1) {
        if (data.data[i].body) {
          html += `
            <tr class="text">
              <th class="text -small-bold">${data.data[i].label}</th>
              <th class="text">${data.data[i].page_category.label}</th>
              <th class="text -blue -capitalize">${moment.unix(data.data[i].date).startOf('month').fromNow()}</th>
              <th><a class="text -blue -capitalize" href="${data.data[i].alias}">Go to Page <svg class="icon -blue -medium"><use xlink:href="#icon-arrow"></use></svg></a></th>
            </tr>
          `;
        }
      }
      break;
    case 'groups':
      for (let i = 0; i < length; i += 1) {
        html += `
          <tr class="text">
            <th class="text -small-bold">${data.data[i].label}</th>
            <th class="text -body">
              ${addDots(data.data[i].body.value, 120)}
            </th>
            <th class="text">${data.data[i].name.name}</th>
            <th class="text -blue -capitalize">${moment.unix(data.data[i].date).startOf('month').fromNow()}</th>
            <th><a class="text -blue -capitalize" href="${data.data[i].alias}">Go to Working Group <svg class="icon -blue -medium"><use xlink:href="#icon-arrow"></use></svg></a></th>
          </tr>
        `;
      }
      break;
    default:
      break;
  }

  tableContainer.html(html);
}
