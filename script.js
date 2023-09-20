document.addEventListener("DOMContentLoaded", function () {
  const contentDivs = document.querySelectorAll(".content-div");

  const tabs = [
    document.getElementById("tab1"),
    document.getElementById("tab2"),
    document.getElementById("tab3"),
  ];

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();

      contentDivs.forEach((div) => {
        div.classList.add("hidden");
      });

      const contentId = tab.getAttribute("data-content-id");
      const contentDiv = document.getElementById(contentId);
      contentDiv.classList.remove("hidden");

      tabs.forEach((tab) => {
        tab.classList.remove("selected");
      });
      tab.classList.add("selected");
    });
  });
});
