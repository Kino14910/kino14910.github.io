"use strict";
const active = document.querySelector(".active");
const navList = document.querySelector(".nav-list");
const main = document.querySelector("main");

navList.addEventListener("click", function (event) {
    if (event.target.tagName === "a") {
        const activeLink = navList.querySelector(".active");
        if (activeLink) {
            activeLink.classList.remove("active");
        }
        event.target.classList.add("active");
    }
});

const header = document.querySelector(".header");
const stickyThreshold = 100;

window.addEventListener("scroll", () => {
    if (window.scrollY > stickyThreshold) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
