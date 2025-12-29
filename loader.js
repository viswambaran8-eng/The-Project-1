const LoaderApp = document.querySelector(".body1");
const MainContent = document.querySelector(".the-main");

const LOADER_TIME = 2500; // 2.5 seconds

setTimeout(() => {
  LoaderApp.style.opacity = "0";

  setTimeout(() => {
    LoaderApp.style.display = "none";
    MainContent.style.visibility = "visible";
    MainContent.style.opacity = "1";

    /* Sync AOS */
    AOS.refreshHard();
    document.dispatchEvent(new Event("aos:ready"));
  }, 600);
}, LOADER_TIME);
