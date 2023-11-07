document.addEventListener("DOMContentLoaded", function () {
  const contentDivs = document.querySelectorAll(".content-div");

  const tabs = [
    document.getElementById("about"),
    document.getElementById("consultants"),
    document.getElementById("services"),
  ];

  console.log(tabs);

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
        tab.classList.remove("orange");
      });
      tab.classList.add("orange");
    });
  });
});

// when mobile add text-justify class
