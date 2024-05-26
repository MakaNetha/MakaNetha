document.addEventListener("DOMContentLoaded", function () {
  const toggleCareTipsBtn = document.getElementById("toggleCareTipsBtn");
  const careTips = document.getElementById("careTips");

  toggleCareTipsBtn.addEventListener("click", function () {
    if (careTips.style.display === "none" || careTips.style.display === "") {
      careTips.style.display = "block";
      toggleCareTipsBtn.textContent = "Hide Lipstick Care Tips";
    } else {
      careTips.style.display = "none";
      toggleCareTipsBtn.textContent = "Show Lipstick Care Tips";
    }
  });
});
