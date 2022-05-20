export function openPage() {
    const addPostFormSection = document.getElementById("add-post-container");
    addPostFormSection.classList.add("add-post-on-screen");
    addPostFormSection.classList.remove("add-post-off-screen");

    const mainPage = document.getElementById("main-page");
    setTimeout(() => {
        addPostFormSection.style.position = "relative";
        mainPage.style.display = "none";
    }, 750);
}
