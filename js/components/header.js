/* =============== HEADER ============== */


window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        let header = document.getElementById("header");
        header.classList.add("header--scroll")
    } else {
        header.classList.remove("header--scroll")
    }
})