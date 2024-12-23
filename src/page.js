import { social } from "../utilities/social.js";
import { featuresItem } from "../utilities/features.js";

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

function featuresSection() {
  const featuresList = document.querySelectorAll(".Features-list");
  featuresList.forEach((listElement, indexElement) => {
    featuresItem.forEach((item) => {
      if (indexElement === 0 && item.id === 8) {
        return;
      }
      const list = document.createElement("li");
      list.id = item.id;
      list.textContent = item.text;
      list.className = "text-xl font-semibold text-gray-500 pt-6 pb-2";
      listElement.appendChild(list);
    });
  });
}

document.addEventListener("DOMContentLoaded", createFooter);
document.addEventListener("DOMContentLoaded", featuresSection);
