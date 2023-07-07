menuListArray = ["Pizza Vegetariana","pizza de frango","pizza portuguesa","pizzza quato-queijos","pizza de calabresa","pizza extravaganza"]
                    ];

function getMenu(){
var htmldata
menuListArray.sort();
for(var i=0<menuListArray.lenght;i++){
    htmldata=htmldata+menuListArray[i] + '<br>'
}

function addItem(){
var htmldata;
var item= < img id="1m1"src="C79.jpeg"/>
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=" "
for(var i=0<menuListArray.lenght;i++){
    htmldata=htmldata+menuListArray[i] + '<br>'
}

//Completar o código

}

function addTop(){
var item=document.getElementById(additem).value;
 menuListArray.push(item);
 additem();