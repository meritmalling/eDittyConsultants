document.addEventListener("DOMContentLoaded", function () {
  // Collection of tabs
  const tabs = [
    document.getElementById("t:about"),
    document.getElementById("t:consultants"),
    document.getElementById("t:services"),
  ];

  // Collection of views
  const views = document.querySelectorAll(".content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();

      // Hide all views
      views.forEach((view) => {
        view.classList.add("hidden");
      });

      // Show the selected view
      const selected = tab.getAttribute("data-content-id");
      const active = document.getElementById(selected);
      active.classList.remove("hidden");

      // Update tab styles
      tabs.forEach((tab) => {
        tab.classList.remove("primary");
        tab.classList.remove("underline");
      });
      tab.classList.add("primary");
      tab.classList.add("underline");
    });
  });
});

// when mobile add text-justify class
