import { rendNavbar } from "./navbar.js"
import { productsList } from "../assets/dummyData.js"
rendNavbar()
const productsCont = document.querySelector(".product-list")
const prodItem = document.createElement("ul")

prodItem.innerHTML = productsList
  .map((item) => {
    const { id, pName, pPrice, pImg, pSold, pStars, pCategory } = item
    return `
              <li class="product-list_items-item ${pCategory}">
                  <div class="product-info">
                      <img
                      class="product-info_media"
                      alt=""
                      src=${pImg}
                      />
                      <div class="product-info_details">
                          <h5>${pName}</h5>
                          <span>Php ${pPrice}</span>
                          <p>${pStars} ${pSold} sold</p>
                      </div>
                  </div>
              </li>
          `
  })
  .join("")
prodItem.classList.add("product-list_items")
productsCont.append(prodItem)

const equipBtn = document.querySelector(".btn--equip")
const lason = document.querySelector(".btn--qwerty")
const allCatBtn = document.querySelector(".btn--all")
const qwerty = document.querySelectorAll(".qwerty")
const equipments = document.querySelectorAll(".equipment")
const btnCont = document.querySelectorAll(".products-btn")

const removeActive = () => {
  btnCont.forEach((b) => b.classList.remove("tab--active"))
}
const renderEquipments = (e) => {
  for (let qwe of qwerty) {
    qwe.classList.add("none")
  }
  equipments.forEach((i) => i.classList.remove("none"))
  console.log("equipss only")
  const clicked = e.target
  removeActive()
  equipBtn.classList.add("tab--active")
}

const renderLason = (e) => {
  for (let qwe of qwerty) {
    qwe.classList.remove("none")
  }
  equipments.forEach((i) => i.classList.add("none"))
  const clicked = e.target
  removeActive()
  lason.classList.add("tab--active")
}
const renderAll = () => {
  equipments.forEach((i) => i.classList.remove("none"))
  qwerty.forEach((i) => i.classList.remove("none"))
  btnCont.forEach((b) => b.classList.remove("tab--active"))
  allCatBtn.classList.add("tab--active")
}

equipBtn.addEventListener("click", renderEquipments)
allCatBtn.addEventListener("click", renderAll)
lason.addEventListener("click", renderLason)
