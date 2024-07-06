const container = document.querySelector(".container");
const toggleSignUP = document.querySelector("#register");
const toggleSignIn = document.querySelector("#login");
toggleSignUP.addEventListener("click", () => {
    container.classList.toggle("active");
});
toggleSignIn.addEventListener("click", () => {
    container.classList.remove("active");
})