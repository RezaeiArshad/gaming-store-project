const allElements = document.querySelectorAll("*");
const main = document.querySelector("main");
const loaderDiv = document.querySelector("#loader-div");

const checkInternetPEl = document.getElementById("check-internet-p");
const sloganH1El = document.getElementById("slogan");
let currentLanIsEn = true;

const changeThemeBtn = document.getElementById("theme-btn");
let themeIsLight = false;

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
   sloganH1El.innerText = lan.slogan;
}

const removeEffects = () => {
    setTimeout(() => {
        allElements.forEach((element) => {
   element.classList.remove("fadeInSlow");
   element.classList.remove("fadeInFast");
   element.classList.remove("fadeOutSlow");
   element.classList.remove("fadeOutFast");
   element.classList.remove("slideIntoPlace");
   })
}, 1000)
}

const setTheTheme = () => {
    document.documentElement.style.setProperty("--body-color", `${themeIsLight ? "white" : "black"}`);
    document.documentElement.style.setProperty("--special-color", `${themeIsLight ? "#0000" : "#fff0"}`)
}

const setTheTransitions = () => {
// to be written . . .
}

const image = new Image();
image.src = backgroundImages[1].url;
const image2 = new Image();
image2.src = backgroundImages[0].url;

setTimeout(() => {
    checkInternetPEl.classList.remove("hidden");
    checkInternetPEl.classList.add("fadeInFast");
}, 5000)

image.onload = () => {
    image2.onload = () => {
      setTheTheme()
      setTheText(currentLanIsEn ? text[0] : text[1]);
      if (themeIsLight) main.style.backgroundImage = `url(${image.src})`;
      else if (!themeIsLight) main.style.backgroundImage = `url(${image2.src})`
      main.style.display = "block";
      main.classList.add("fadeInSlow");
      loaderDiv.classList.add("fadeOutFast");
      loaderDiv.addEventListener("animationend", () => {
        loaderDiv.style.display = "none"
      }, { once: true});
      setTheTransitions();
      removeEffects()
    }
};

image.onerror = () => {
    console.log("Failed to load the image")
}

image2.onerror = () => {
    console.log("Failed to load the image")
}