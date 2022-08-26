let tabs = document.querySelectorAll(".tab")
const tabContainer = document.querySelector(".tab-container")
const contentT = document.querySelectorAll(".content")

tabContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".tab")
  if (!clicked) return

  tabs.forEach((t) => t.classList.remove("tab--active"))
  clicked.classList.add("tab--active")

  contentT.forEach((c) => c.classList.remove("content--active"))
  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.add("content--active")
})
