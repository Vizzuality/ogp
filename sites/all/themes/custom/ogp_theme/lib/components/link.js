function buildLink(link) {
  const html = `
    <div class="c-link">
      <div class="link">
        <svg class="icon -blue"><use xlink:href="#icon-external-link"></use></svg>
        <a class="text -link -blue" href="/${link.link.url}" target="_blank" rel="nofollow">${link.label}</a>
      </div>
      ${link.description ? '<p class="text -footnote">Description lorem ipsum leo isus, porta ac consectetur ac, vestibulum at eras.</p>' : ''}
    </div>
  `;
  return html;
}

function buildRelLink(link) {
  const html = `
    <div class="c-link">
      <div class="link">
        <svg class="icon -blue"><use xlink:href="#icon-external-link"></use></svg>
        <a class="text -link -blue" href="/${link.alias}" rel="nofollow">${link.label}</a>
      </div>
      ${link.description ? '<p class="text -footnote">Description lorem ipsum leo isus, porta ac consectetur ac, vestibulum at eras.</p>' : ''}
    </div>
  `;
  return html;
}
