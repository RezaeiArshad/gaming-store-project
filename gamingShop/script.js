const main = document.querySelector("main");
const loaderDiv = document.querySelector("#loader-div");
const checkInternetPEl = document.getElementById("check-internet-p");
const sloganPEl = document.getElementById("slogan");

const backgroundImages = [
   {
    name: "dark-mode",
    url: "https://s6.uupload.ir/files/fuji-mountain-kawaguchiko-lake-sunset-autumn-seasons-fuji-mountain-yamanachi-japan_66x6.jpg"
   },
   {
    name: "light-mode",
    url: "https://s6.uupload.ir/files/autumn-season-mountain-fuji-kawaguchiko-lake-japan_drjy.jpg"
   }
];

const text = [
    {
        language: "english",
        checkInternetP: "check your internet connection",
        slogan: "Gaming Warmth"
    },
    {
        language: "persian"
    }
];

const setTheText = (lan) => {
   checkInternetPEl.innerText = lan.checkInternetP;
   sloganPEl.innerText = lan.slogan;
}

const setTheTransitions = () => {

}

setTheText(text[0])


const image = new Image();
image.src = backgroundImages[1].url;

setTimeout(() => {
    checkInternetPEl.classList.remove("hidden");
    checkInternetPEl.classList.add("fadeInFast");
}, 5000)

image.onload = () => {
    main.style.backgroundImage = `url(${image.src})`;
    main.style.display = "block";
    setTimeout(() => {
        main.classList.add("fadeInSlow")
    }, 1);
    loaderDiv.classList.add("fadeOutFast");
    loaderDiv.addEventListener("animationend", () => {
        loaderDiv.style.display = "none"
    }, { once: true})
};

image.onerror = () => {
    console.log("Failed to load the image")
}