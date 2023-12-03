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
  var printContents = document.querySelector(".printable").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();

  document.body.innerHTML = originalContents;
}
function openModal() {
  var modal = document.getElementById("myModal");
  var form = document.getElementById("addUserForm");
  form.elements["productService"].value = "";
  form.elements["inPrice"].value = "";
  form.elements["price"].value = "";
  form.elements["unit"].value = "";
  form.elements["inStock"].value = "";
  form.elements["description"].value = "";
  document.getElementById("modalTitle").innerText = "Add Product";
  modal.style.display = "flex";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}



function saveProduct() {
  var form = document.getElementById("addUserForm");
  var articleNo = form.elements["articleNo"].value;
  var productService = form.elements["productService"].value;
  var inPrice = form.elements["inPrice"].value;
  var price = form.elements["price"].value;
  var unit = form.elements["unit"].value;
  var inStock = form.elements["inStock"].value;
  var description = form.elements["description"].value;

  // Validate form fields if needed

  if (articleNo) {
    // Update existing user
    var row = document.querySelector('[data-user-id="' + articleNo + '"]');
    row.children[1].innerText = productService;
    row.children[2].innerText = inPrice;
    row.children[3].innerText = price;
    row.children[4].innerText = unit;
    row.children[5].innerText = inStock;
    row.children[6].innerText = description;
  } else {
    // Add new user
    var newId = new Date().getTime().toString().slice(-6);
    var tableBody = document.getElementById("tableBody");
    var newRow = document.createElement("tr");
    newRow.innerHTML =
    "<td>" + 
      "<h6 class='table-data-cell'>" +
      newId +
      "</h6>" +
    "</td>" +
    "<td>" +
      "<h6 class='table-data-cell'>" +
      productService +
      "</h6>" +
    "</td>" +
    "<td>" +
      "<h6 class='table-data-cell'>" +
      inPrice +
      "</h6>" +
    "</td>" +
    "<td>" +
      "<h6 class='table-data-cell'>" +
      price +
      "</h6>" +
    "</td>" +
    "<td>" +
      "<h6 class='table-data-cell'>" +
      unit +
      "</h6>" +
    "</td>" +
    "<td>" +
      "<h6 class='table-data-cell'>" +
      inStock +
      "</h6>" +
    "</td>" +
    "<td>" +
      "<h6 class='table-data-cell'>" +
      description +
      "</h6>" +
    "</td>";

    newRow.dataset.userId = newId; // Set user ID as a data attribute
    tableBody.appendChild(newRow);
  }

  // Close the modal
  closeModal();
}
