export function closePage() {
    const mainPage = document.getElementById("main-page");
    mainPage.style.display = "block";

    const addPostFormSection = document.getElementById("add-post-container");
    addPostFormSection.classList.remove("add-post-on-screen");
    addPostFormSection.classList.add("add-post-off-screen");
    addPostFormSection.style.position = "absolute";
}
