
  const accordionItem = document.querySelectorAll(".c-accordions__item");
  const accordionHeading = document.querySelectorAll(".c-accordions__heading");
    for (i = 0; i < accordionHeading.length; i++) {
      accordionHeading[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
      let itemClass = this.parentNode.className;
        for (i = 0; i < accordionItem.length; i++) {
              accordionItem[i].className = 'c-accordions__item close';
    }
      if (itemClass == 'c-accordions__item close') {
        this.parentNode.className = 'c-accordions__item open';
      }
   }