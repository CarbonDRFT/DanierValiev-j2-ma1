export function renderHTMLToTheDom(html, domElm) {
  if (typeof html !== "string") {
    return;
  }
  document.querySelector(domElm).innerHTML += html;
}
