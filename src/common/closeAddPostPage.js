export function closePage() {
    const mainPageContainer = document.getElementById("main-page-container");
    mainPageContainer.style.display = "block"; // changing to default

    const addPostContainer = document.getElementById("add-post-container");
    // handling animation
    addPostContainer.classList.remove("add-post-on-screen");
    addPostContainer.classList.add("add-post-off-screen");

    addPostContainer.style.position = "absolute"; // changing to default
}
