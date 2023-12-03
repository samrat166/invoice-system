function toggleLanguageOptions() {
  var options = document.getElementById("languageOptions");
  options.style.display = options.style.display === "block" ? "none" : "block";
}

function selectLanguage(langCode, flagSrc, langName) {
  var selectedLanguage = document.getElementById("selectedLanguage");
  var flagImage = selectedLanguage.querySelector(".flag");
  var languageName = selectedLanguage.querySelector("span");

  flagImage.src = flagSrc;
  flagImage.alt = langName + " Flag";
  languageName.textContent = langName;

  console.log("Selected language: " + langCode);
  toggleLanguageOptions();
}

function onHamburgerClick() {
  console.log("Clicked hamburger");
}

function print() {
  var printContents = document.querySelector('.printable').innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();


  document.body.innerHTML = originalContents;
}
