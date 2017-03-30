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
    const html = `
      <option value="${option.id}">${option.label}</option>
    `;
    $(selector).append(html);
  });
}

function getSelectOptionsFromData(data, optionName, type) {
  let options = [];
  if (optionName.length > 1) {
    data.forEach(function(item) {
      if (type.indexOf(item.type) > -1) {
        const optionStart = item[optionName[0]];
        const optionEnd = item[optionName[1]];
        const option = `${optionStart}-${optionEnd}`;
        if ( options.indexOf(option) === -1 ) {
          options.push(option);
        }
      }
    });
  } else {
    data.forEach(function(item) {
      if (type.indexOf(item.type) > -1) {
        const option = item[optionName];
        if ( options.indexOf(option) === -1 ) {
          options.push(option);
        }
      }
    });
  }
  options.sort();

  return options;
}

function buildSelector(selector, options) {
  //build selector
  appendSelectOptions(selector, options);
}
