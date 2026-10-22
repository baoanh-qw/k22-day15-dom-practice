const mainImage = document.querySelector("#main-image");

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.src;

    mainImage.alt = thumbnail.alt;

    thumbnails.forEach((item) => {
      item.classList.remove("active");
    });

    thumbnail.classList.add("active");
  });
});
