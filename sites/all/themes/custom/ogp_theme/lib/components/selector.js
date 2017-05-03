function appendSelectOptions(selector, options) {
  options.forEach(function(option) {
    const html = `
      <option value="${option}" data-id=${options.id}>${option}</option>
    `;
    $(selector).append(html);
  });
}

function appendSelectOptionsFromData(selector, options) {
  options.forEach(function(option) {
    console.log(option);
    const html = `
      <option value="${option.id}" data-value="${option.alias}">${option.label}</option>
    `;
    $(selector).append(html);
  });
}

function getSelectOptionsFromData(data, optionName, type) {
  let options = [];
  data.forEach(function(item) {
    if (item.type && type.some(index => item.type.indexOf(index) >= 0) && item.date) {
      let startDate, endDate;
      startDate = moment(item.date.value).year();
      if ( options.indexOf(startDate) === -1 ) {
        options.push(startDate);
      }
      if (item.date.value2) {
        endDate = moment(item.date.value2).year();
        if ( options.indexOf(endDate) === -1 ) {
          options.push(endDate);
        }
      }
    }
  });
  options.sort();
  options.reverse();

  return options;
}

function buildSelector(selector, options) {
  //build selector
  appendSelectOptions(selector, options);
}
