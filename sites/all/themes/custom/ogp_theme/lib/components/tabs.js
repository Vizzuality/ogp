function setTabListeners(callback) {
  $('.tab').click((e) => {
    if (!$(e.target).hasClass('-selected')) {
      const id = e.target.dataset.node;
      const label = e.target.innerHTML;
      $('.tab').removeClass('-selected');
      $(e.target).addClass('-selected');
      callback(id, label);
    }
  });
}

function initTabs() {
  $('.tab').first().addClass('-selected');
}

function buildTabs(data, tabsContainer, callback) {
  data.forEach((item) => {
    const html = `
      <li class="tab text -tab" data-node="${item.id}">${item.label}</li>
    `;
    tabsContainer.append(html);
  });
  initTabs();
  setTabListeners(callback);
}
