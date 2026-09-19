document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const avatar = document.querySelector(".avatar");
if (avatar) {
  avatar.addEventListener("contextmenu", (event) => event.preventDefault());
  avatar.addEventListener("dragstart", (event) => event.preventDefault());
}
