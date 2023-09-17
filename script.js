document.addEventListener("DOMContentLoaded", function () {
  const contentDivs = document.querySelectorAll(".content-div");
  contentDivs.forEach((div) => {
    div.style.display = "none";
  });
  document.getElementById("content1").style.display = "block";
  const tabs = [
    document.getElementById("tab1"),
    document.getElementById("tab2"),
    document.getElementById("tab3"),
  ];

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();

      tabs.forEach((t) => t.removeAttribute("aria-current"));
      tabs.forEach(
        (t) =>
          (t.className =
            "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")
      );
      tab.setAttribute("aria-current", "page");
      tab.className =
        "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";

      contentDivs.forEach((div) => {
        div.style.display = "none";
      });

      const contentId = tab.getAttribute("data-content-id");
      const contentDiv = document.getElementById(contentId);
      if (contentDiv) {
        contentDiv.style.display = "block";
      }
    });
  });
});
