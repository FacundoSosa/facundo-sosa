/* ============ NAV ============= */

const BtnMenu = document.getElementById("menu");

BtnMenu.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("nav--active");
});

window.addEventListener("resize", () => {
    const nav = document.getElementById("nav");
    if (window.innerWidth > 768) {
        nav.classList.remove("nav--active");
    };
})