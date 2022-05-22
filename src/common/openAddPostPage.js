export function openPage() {
    const addPostContainer = document.getElementById("add-post-container");
    // handling animation
    addPostContainer.classList.add("add-post-on-screen");
    addPostContainer.classList.remove("add-post-off-screen");

    const mainPageContainer = document.getElementById("main-page-container");
    setTimeout(() => {
        addPostContainer.style.position = "relative"; // handling resposiveness
        mainPageContainer.style.display = "none"; // hiding main page as it was showing next to add post page after chaning display
    }, 750); // 750ms is slide-in animation duration
}
