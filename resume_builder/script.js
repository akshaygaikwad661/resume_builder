function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here');
    
    let weAddButtonOb= document.getElementById("weAddButton");
    let weOb=document.getElementById("we");
    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here');
    
    let aqAddButtonOb= document.getElementById("aqAddButton");
    let aqOb=document.getElementById("aq");
    aqOb.insertBefore(newNode,aqAddButtonOb);
}
    
function generateCV(){
    c = true;
    let nameField= document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

     let wes= document.getElementsByClassName("weField");
     let str='';
     for(let e of wes){
         str = str +`<li> ${e.value} </li>`;
     }
     document.getElementById('weT').innerHTML=str;

     let aqs= document.getElementsByClassName("eqField");
     let str1='';
     for(let e of aqs){
         str1+=`<li> ${e.value} </li>`;
     }
     document.getElementById('aqT').innerHTML=str1;


     document.getElementById('cv-form').style.display='none';
     document.getElementById('cv-template').style.display='block';



}
function printCV(){
    window.print();
}
    
function previewPhoto() {
    let photoUpload = document.getElementById("photoUpload");
    let photoPreview = document.getElementById("photoPreview");

    // Check if a file is selected
    if (photoUpload.files.length > 0) {
        let reader = new FileReader();

        // Set the callback function to display the image
        reader.onload = function (e) {
            photoPreview.src = e.target.result;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(photoUpload.files[0]);
    }
}