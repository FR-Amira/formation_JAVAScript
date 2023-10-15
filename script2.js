
//DOM Element

var btnn = document.getElementById("bouton1");
var btnn2 = document.getElementById("bouton2");
var count = document.getElementById("counter2");
var logo = document.getElementById("info");
var add = document.getElementById("add");
var text = document.getElementById("text");
var list = document.getElementById("list");
var auto = document.getElementById("automatic");
var reset=document.getElementById("reset");

//Global variables
var count2 = 0;
var autocount2 = 0;

//click to increment the counter 
btnn.addEventListener("click",function(){
   count2++;
    count.innerText = "count of click : " + count2 ; 


})


//click to decrement the counter 
btnn2.addEventListener("click",function(){
   count2--;
    count.innerText = "count of click : " + count2 ; 
    

})

//hover to change logo
logo.addEventListener("mouseover",function(){
   logo.src="https://p3.storage.canalblog.com/35/64/1060244/124930552_m.png"

})


info.addEventListener("mouseout",function(){
   info.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIJSpy9QiScV8r39Tre2S-iz5myIneJLR3w&usqp=CAU"
})



//add a new todo
add.addEventListener("click",function() {
    var inputevalue = text.value;
    //console.log(inputevalue);
    //document.getElementById("list").innerHTML += "<li>heloooooooo</li>";

    if (inputevalue.length==0)
      {
         alert("hey you need to have a todo")
      }
   else 
      {
     list.innerHTML += "<li>"+ inputevalue + "</li>";
        text.value="";
      }
   
 })



// automatic increment 
 setInterval(function () {
      autocount2++;
      automatic.innerText = autocount2;
    },1000);

    //reset button
 reset.addEventListener("click",function(){
   autocount2=0;
 })


 //step 1 : learning front end 
 // html css 
  // Css Framworks :Bootstarap 
 //practice 1 week create project 
 //javascript simple platform
 //practice week create project 
 //API'S and asyncranos code (HTML CSS JS )
  // SCSS
 //practice  (HTML SCSS JS API)
 //libraries
 //jQuery js
 //practice  (HTML SCSS JQUERY JS API)
 //Framworks JS : Angular / React / vue ... (JUST PICK ONE)
 // Practice ANGULAR
//NOW YOU ARE FRONT END DEVELOPER
//PRACTICE
 //Backend : node js nest
 // database



 //// library is a group of functions that you can use in ary way
 /// framwork is the sane thing as library but it has 
 //// a specific way to write code

