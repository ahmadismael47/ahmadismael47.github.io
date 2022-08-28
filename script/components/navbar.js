import { navLinks } from "../assets/dummyData.js"
export const rendNavbar = () => {
  const linkContainer = document.querySelector(".navbar")
  const link = document.createElement("ul")

  link.innerHTML = navLinks
    .map((item) => {
      const { name, path, icon, id } = item
      return ` <li><i class="${icon}"></i><a href="${path}">${name}</a></li>`
    })
    .join("")

  link.classList.add("links")
  linkContainer.append(link)
}
