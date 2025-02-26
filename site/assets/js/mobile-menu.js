document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  const headerNav = document.getElementById("header-nav")

  if (menuToggle && headerNav) {
    menuToggle.addEventListener("click", () => {
      headerNav.classList.toggle("active")
      menuToggle.classList.toggle("active")

      // Toggle aria-expanded for accessibility
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false
      menuToggle.setAttribute("aria-expanded", !expanded)
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !headerNav.contains(event.target) &&
        !menuToggle.contains(event.target) &&
        headerNav.classList.contains("active")
      ) {
        headerNav.classList.remove("active")
        menuToggle.classList.remove("active")
        menuToggle.setAttribute("aria-expanded", "false")
      }
    })
  }
})
