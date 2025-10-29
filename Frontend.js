function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const icon = document.getElementById("menuIcon");
  nav.classList.toggle("show");
  // Change icon
    if (nav.classList.contains("show")) {
    icon.textContent = "✖";
    icon.classList.add("rotate");
  } else {
    icon.textContent = "☰";
    icon.classList.remove("rotate");
  }
}
// Close navbar when clicking outside
  document.addEventListener("click", function (event) {
    const nav = document.getElementById("navLinks");
    const icon = document.getElementById("menuIcon");

    // Check if click was outside menu and icon
    if (
      nav.classList.contains("show") &&
      !nav.contains(event.target) &&
      !icon.contains(event.target)
    ) {
      nav.classList.remove("show");
      icon.textContent = "☰";
      icon.classList.remove("rotate");
    }
  });
      // button scrolling
       document.querySelector(".fancy-button").addEventListener("click", function () {
    const target = document.getElementById("course");
    const offset = -50; // adjust as needed
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
          // Form js
   // Array to hold submitted data
    const savedData = [];

    document.getElementById("submitBtn").addEventListener("click", function () {
      const name = document.getElementById("name-input").value;
      const phone = document.getElementById("phone-input").value;
      const email = document.getElementById("email-input").value;

      // Optional validation
      if (!name || !phone || !email) {
        alert("Please fill in all fields.");
        return;
      }

      // Save to array as object (not visible on page)
      const formData = {
        name: name,
        phone: phone,
        email: email
      };

      savedData.push(formData);

      // Optional: clear form
      document.getElementById("name-input").value = "";
      document.getElementById("phone-input").value = "";
      document.getElementById("email-input").value = "";

      // Optional: confirm saved
      alert("Data saved internally in code.");
    });