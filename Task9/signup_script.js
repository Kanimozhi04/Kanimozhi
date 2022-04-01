var myform=document.querySelector(".detail");
myform.addEventListener("submit",function(evnt){
var name=document.querySelector("#username").value;
var password=document.querySelector("#password").value;
var repassword=document.querySelector("#re-password").value;
   if(password==repassword){
     var obj={
       Name:name,
       Password: password
     };
     var myjson=JSON.stringify(obj);
     console.log(myjson);
     window.localStorage.setItem("details",myjson);
     alert("Account created Successfully!!");
    }
    else{
       alert("Please enter the correct password");
       evnt.preventDefault();
    }
});
