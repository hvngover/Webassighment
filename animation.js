const listItems = document.querySelectorAll(".list-group-item");
const modal = document.querySelector(".modal");
const modalImage = document.getElementById("modal-image");

listItems.forEach(item => {
    item.addEventListener("click", () => {
        const imgPath = item.getAttribute("data-img");
        modalImage.src = imgPath;
        modal.style.display = "block";
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

modalImage.addEventListener("click", (e) => {
    e.stopPropagation();
});
