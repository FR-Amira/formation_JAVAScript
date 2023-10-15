// document.getElementsByTagName("h1")[0].style.color = "red" ; //h1 loula etwali red 
//document.getElementsByClassName("title")[0].innerText="amira" ; 
//document.getElementById ("special").style.background = "blue";
//document.getElementById ("logo").style.width = "200px";

//select
//manipulate
function changeDesign() {
    document.getElementsByTagName("h1")[0].style.color = "red" ; //h1 loula etwali red 
    document.getElementsByClassName("title")[0].innerText="amira" ; 
    document.getElementById ("special").style.background = "blue";
    document.getElementById ("logo").style.width = "200px";
}

//changeDesign(); kif ethot haki etwli et5dem fonction haki  

var counter = 0;

document.getElementById("btn").addEventListener("click",function() {
        counter = counter + 1;
    document.getElementById("counter").innerText="counter of click:" + counter;

 } ) ;



var counter = 0;
document.getElementById("btn2").addEventListener("click",function() {
    counter--;
    document.getElementById("counter").innerText="counter of click:" + counter;
  
 } ) ;



 //document.getElementById("info").addEventListener("click",function(){
 //   document.getElementById("info").src="https://p3.storage.canalblog.com/35/64/1060244/124930552_m.png"
// })



 document.getElementById("info").addEventListener("mouseover",function(){
   document.getElementById("info").src="https://p3.storage.canalblog.com/35/64/1060244/124930552_m.png"
})


document.getElementById("info").addEventListener("mouseout",function(){
   document.getElementById("info").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIJSpy9QiScV8r39Tre2S-iz5myIneJLR3w&usqp=CAU"
})




 document.getElementById("add").addEventListener("click",function() {
    var inputevalue = document.getElementById("text").value;
    //console.log(inputevalue);
    //document.getElementById("list").innerHTML += "<li>heloooooooo</li>";

    if (inputevalue.length==0)
      {
         alert("hey you need to have a todo")
      }
   else 
      {
         document.getElementById("list").innerHTML += "<li>"+ inputevalue + "</li>";
         document.getElementById("text").value="";
      }
   
 })



 var autocount = 0;

 function autoINC() {
   autocount++;
   document.getElementById("automatic").innerText=autocount;
 }

 setInterval(autoINC,1000);

 document.getElementById("reset").addEventListener("click",function(){
   autocount=0;
 })


