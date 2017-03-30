function showNoResults(container, text, size, color, iconSize) {
  const html = `
    <div class="c-no-results -${size} column small-12">
      <svg class="icon -${iconSize}"><use xlink:href="#icon-compass"></use></svg>
      <p class="text -${color}">${text}</p>
    </div>
  `;
  $(container).html(html);
}

function hideNoResults(container) {
  $(`${container} .c-no-results`).remove();
}
