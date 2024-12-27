import { social } from "../public/utilities/social.js";
import { featuresItem } from "../public/utilities/features.js";

//document.getElementById("current-year").textContent = new Date().getFullYear();

// function createFooter() {
//   const socialsList = document.getElementById("socials-list");
//   social.forEach((item) => {
//     // Add links for Footer
//     const link = document.createElement("a");
//     link.href = item.url;
//     link.target = "_blank";
//     link.className =
//       "flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6";
//     // Add images for Footer
//     const img = document.createElement("img");
//     img.src = item.iconUrl;
//     img.width = 16;
//     img.height = 16;
//     img.alt = item.title;
//     link.appendChild(img);
//     socialsList.appendChild(link);
//   });
// }

// function featuresSection() {
//   const featuresList = document.querySelectorAll(".Features-list");
//   featuresList.forEach((listElement, indexElement) => {
//     featuresItem.forEach((item) => {
//       // Basic plain dosen't have the 8th features
//       if (indexElement === 0 && item.id === 8) {
//         return;
//       }
//       const list = document.createElement("li");
//       list.id = item.id;
//       list.textContent = item.text;
//       list.className =
//         "text-lg md:text-xl font-semibold md:font-semibold pt-6 pb-4 md:pb-2";
//       if (item.id === 8) {
//         list.className += " text-blue-700";
//       } else {
//         list.className += " text-gray-700";
//       }

//       listElement.appendChild(list);
//     });
//   });
// }

// window.addEventListener("DOMContentLoaded", createFooter);

// Call the function to create the features section when the DOM is fully loaded
// window.addEventListener("DOMContentLoaded", featuresSection);

// Call two functions when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Set the current year
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
  // Function to create the footer
  const footer = () => {
    const socialsList = document.getElementById("socials-list");
    social.forEach((item) => {
      // Add links for Footer
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.className =
        "flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6";
      // Add images for Footer
      const img = document.createElement("img");
      img.src = item.iconUrl;
      img.width = 16;
      img.height = 16;
      img.alt = item.title;
      link.appendChild(img);
      socialsList.appendChild(link);
    });
  };
  // Function to create features section
  const features = () => {
    const featuresList = document.querySelectorAll(".Features-list");
    featuresList.forEach((listElement, indexElement) => {
      featuresItem.forEach((item) => {
        // Basic plain dosen't have the 8th features
        if (indexElement === 0 && item.id === 8) {
          return;
        }
        const list = document.createElement("li");
        list.id = item.id;
        list.textContent = item.text;
        list.className =
          "text-lg md:text-xl font-semibold md:font-semibold pt-6 pb-4 md:pb-2";
        if (item.id === 8) {
          list.className += " text-blue-700";
        } else {
          list.className += " text-gray-700";
        }

        listElement.appendChild(list);
      });
    });
  };

  footer();
  features();
});
