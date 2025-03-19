window.onload = init;
function init() {
    // console.log("got here!!")
    const getElByDataAttribute = (attribute, value, scope = document) => {
        const el = scope.querySelector(`[data-${attribute}="${value}"]`);
        return el;
    };
    // const getAllElByClass = (className) => {
    //   const elements = document.querySelectorAll(`*[class*="${className}"]`);
    //   return elements;
    // };
    const getAllElementsByDataAttribute = (attribute, value, scope = document) => {
      const elements = scope.querySelectorAll(`[data-${attribute}="${value}"]`);
      return elements;
    };
        const allNavbars = getAllElementsByDataAttribute(
          "thq",
          "flx-navbar"
        );
        const bodyOverflow = document.body.style.overflow;
        allNavbars.forEach((navbar) => {
          const burgerBtn = getElByDataAttribute(
            "thq",
            "flx-burger-menu",
            navbar
          );
          const mobileMenu = getElByDataAttribute(
            "thq",
            "flx-mobile-menu",
            navbar
          );
          const closeBtn = getElByDataAttribute(
            "thq",
            "flx-close-menu",
            navbar
          );
          if (!burgerBtn || !mobileMenu || !closeBtn) {
            return;
          }
          burgerBtn.addEventListener("click", () => {
            window.addEventListener("click", function checkSameLinkClicked(event) {
              if (!event) {
                return;
              }
              let currentElement = event.target;
              while (currentElement !== document.body && !currentElement.href) {
                currentElement = currentElement.parentNode;
              }
              if (!currentElement.href) {
                return;
              }
              if (!mobileMenu) {
                return;
              }
              if (currentElement.href) {
                document.body.style.overflow = bodyOverflow;
              }
              if (currentElement.pathname === window.location.pathname) {
                mobileMenu.classList.remove("flx-show");
                // mobileMenu.classList.remove("flx-show");
                // mobileMenu.classList.remove("flx-translate-to-default");
              }
              this.removeEventListener("click", checkSameLinkClicked);
            });
            document.body.style.overflow = "hidden";
            mobileMenu.classList.add("flx-show");
            // mobileMenu.classList.add("flx-show");
            // mobileMenu.classList.add("flx-translate-to-default");
          });
          closeBtn.addEventListener("click", () => {
            document.body.style.overflow = bodyOverflow;
            mobileMenu.classList.remove("flx-show");
            // mobileMenu.classList.remove("flx-show");
            // mobileMenu.classList.remove("flx-translate-to-default");
          });
          mobileMenu.addEventListener("click", (event) => {
            const target = event.target;
            if (target instanceof HTMLAnchorElement) {
              mobileMenu.classList.remove("flx-show");
            //   mobileMenu.classList.remove("flx-show");
            //   mobileMenu.classList.remove("flx-translate-to-default");
            }
          });
        });
}
