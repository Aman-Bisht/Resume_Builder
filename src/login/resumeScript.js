/*function addNewWEField()

{

  //console.log("adding new field");

  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");

  newNode.classList.add("wefield");

  newNode.setAttribute("rows", 3);

  newNode.setAttribute("placeholder", "enter here");

  let weOb = document.getElementById("we");

  let weAddButtonOb = document.getElementById("weAddButton");



  weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField()

{
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");

  newNode.classList.add("eqfield");

  newNode.setAttribute("rows", 3);

  newNode.setAttribute("placeholder", "enter here");

  let aqOb = document.getElementById("aq");

  let aqAddButtonOb = document.getElementById("aqAddButton");



  aqOb.insertBefore(newNode, aqAddButtonOb);



}

//generating CV

function generatecv() {

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById('nameT1')

  nameT1.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  //contact

  document.getElementById("contactT1").innerHTML = document.getElementById("contactField").value;

  //address

  document.getElementById("addressT1").innerHTML = document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;

  //objective

  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

  //we

  let wes = document.getElementsByClassName("wefield");

  let str = "";

  for (let e of wes)

  {

    str = str + `<li> ${e.value} </li>`;

  }



  document.getElementById("weT").innerHTML = str;

  //aq

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs)

  {

    str1 += `<li> ${e.value}</li>`;

  }

  document.getElementById("aqT").innerHTML = str1;



  document.getElementById("cv-form").style.display = "none";

  document.getElementById("cv-template").style.display = "block";

}

//printCV

function printCV()

{

  window.print();

}
*/

function addNewWEField() {
  //console.log("adding new field");

  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");

  newNode.classList.add("wefield");

  newNode.setAttribute("rows", 3);

  newNode.setAttribute("placeholder", "enter here");

  let weOb = document.getElementById("we");

  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");

  newNode.classList.add("eqfield");

  newNode.setAttribute("rows", 3);

  newNode.setAttribute("placeholder", "enter here");

  let aqOb = document.getElementById("aq");

  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating CV

function generatecv() {
  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  //contact

  document.getElementById("contactT1").innerHTML =
    document.getElementById("contactField").value;

  //address

  document.getElementById("addressT1").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedinField").value;

  //objective

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //we

  let wes = document.getElementsByClassName("wefield");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //aq

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  // code for setting image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";

  document.getElementById("cv-template").style.display = "block";
}

//printCV

function printCV() {
  window.print();
}
