function closeAccordionSection() {
  $('.c-accordion .accordion-section-title').removeClass('active');
  $('.c-accordion .accordion-section-content').slideUp(200).removeClass('open');
}

function getPageCount(dataCount, threshold) {
  return Math.ceil(dataCount / threshold);
}

function appendAccordionItems(view, data) {
  const accordion = $(`#${view} .c-accordion`);
  let html = '';
  data.forEach((item) => {
    html += `
      <div class="accordion-section">
        <a class="accordion-section-title text -small-bold -black" href="#accordion-${view}-${item.id}">${item.label}<svg class="icon -blue -small"><use xlink:href="#icon-down-arrow"></use></svg></a>
        <div id="accordion-${view}-${item.id}" class="accordion-section-content">
        <div class="text -body-content body-container">${item.body.value}</div>
        <div class="body-container -link">
          <a class="text -blue link-accordion" href="/${item.alias}">See more <svg class="icon -blue -medium"><use xlink:href="#icon-arrow"></use></svg></a>
        </div>
        </div>
      </div>
    `;
  });
  accordion.html(html);
}

function setAccordionListeners(view) {
  $(`#${view} .accordion-section-title`).click(function(e) {
    var currentAttrValue = $(this).attr('href');
    if($(e.target).is('.active')) {
      closeAccordionSection();
    } else {
      closeAccordionSection();
      $(this).addClass('active');
      $(`#${view} .c-accordion ${currentAttrValue}`).slideDown(200).addClass('open');
    }
    e.preventDefault();
  });
}

function initAccordion(view, data) {
  appendAccordionItems(view, data);
  setAccordionListeners(view);
}
