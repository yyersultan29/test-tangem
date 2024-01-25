const bottomBanner = document.querySelector(".bottom-banner");
const topBanner = document.querySelector(".top-banner");
const bottomBannerCloseBtn = document.querySelector(".bottom-banner-close-btn");

function init() {
  document.addEventListener("scroll", showBottomBanner);

  bottomBannerCloseBtn.addEventListener("click", removeBottomBanner);
}

init();

function showBottomBanner() {
  const topBannerPosition = document
    .querySelector(".top-banner")
    .getBoundingClientRect();

  const isBottomBannerDisplayed = sessionStorage.getItem(
    "bottom-banner-display"
  );

  if (
    topBannerPosition.bottom <= 0 &&
    (!isBottomBannerDisplayed || isBottomBannerDisplayed === "false")
  ) {
    bottomBanner.style.opacity = "1";
    sessionStorage.setItem("bottom-banner-display", "false");
  }
}

function removeBottomBanner() {
  bottomBanner.style.display = "none";
  sessionStorage.setItem("bottom-banner-display", "true");
}
