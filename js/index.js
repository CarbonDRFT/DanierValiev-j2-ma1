import { fetchapi } from "./lib/fetchApi.js";
import { filteringArr } from "./lib/filteringArr.js";
import { renderHTMLToTheDom } from "./lib/oneDisplayHTML.js";

let data = await fetchapi("https://fakestoreapi.com/products");
console.log(data);

const loading = document.querySelector(".loading");
const search = document.querySelector(".search");

const container = document.querySelector(".container");
console.log(container);

search.onkeyup = function () {
  container.innerHTML = "";

  let filteredArr = filteringArr(data, search.value);
  console.log(typeof search.value);
  console.log(filteredArr);

  filteredArr.forEach((element) => {
    loading.innerHTML = ``;
    document.querySelector(".container").innerHTML += `
    <div class="product__Containers">
    <h4>${element.title}</h4>
    <img src="${element.image}" class="productImage" alt="productImage">
    <p>${"$" + element.price}</p>
    </div>`;
  });
  console.log(filteredArr);
};
// renderHTMLToTheDom(".container");
