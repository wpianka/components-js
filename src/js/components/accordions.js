/* Solution 1*/
const accordionItem = document.querySelectorAll(".accordions__item");
const accordionHeading = document.querySelectorAll(".accordions__heading");
  for (i = 0; i < accordionHeading.length; i++) {
    accordionHeading[i].addEventListener('click', toggleItem, false);
  }
  function toggleItem() {
    let itemClass = this.parentNode.className;
      for (i = 0; i < accordionItem.length; i++) {
            accordionItem[i].className = 'accordions__item close';
  }
    if (itemClass == 'accordions__item close') {
      this.parentNode.className = 'accordions__item open';
    }
 }
/* Solution 2*/
function addClass(el, klass) {
    el.classList.add(klass);
  }

  function removeClass(el, klass) {
    el.classList.remove(klass);
  }

const accordionItems = document.querySelectorAll(".accordion__item");
const accordionContentPanes = document.querySelectorAll(".accordion__content");

// Show first by default
accordionItems[0]
  .querySelector(".accordion__content")
  .classList.remove("hidden");

  // Hide each besides target accordion on click
accordionItems.forEach(function(accordion) {
    // Clicked accordions clickable target
    const accordionTitleRow = accordion.firstElementChild;
    accordionTitleRow.addEventListener("click", toggleAccordion);
  });

  function toggleAccordion(e) {
    accordionContentPanes.forEach(function(content) {
      // Check if clicked row matches the content's previous element sibling
      if (content.previousElementSibling === e.target) {
        removeClass(content, "hidden");
        addClass(content.parentElement, "active");
      } else {
        removeClass(content.parentElement, "active");
        addClass(content, "hidden");
      }
    })
  }
