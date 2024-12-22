import { social } from "../utilities/social.js";

document.getElementById("current-year").textContent = new Date().getFullYear();
function createFooter() {
  const socialsList = document.getElementById("socials-list");
  social.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.className =
      "flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6";
    const img = document.createElement("img");
    img.src = item.iconUrl;
    img.width = 16;
    img.height = 16;
    img.alt = item.title;
    link.appendChild(img);
    socialsList.appendChild(link);
  });
}
document.addEventListener("DOMContentLoaded", createFooter);
