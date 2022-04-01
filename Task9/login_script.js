    var myform=document.querySelector(".detail");
        myform.addEventListener("submit",function(evnt){
            var mydata=localStorage.getItem("details");
            var name=document.querySelector("#username").value;
            var password=document.querySelector("#password").value;
            var obj=JSON.parse(mydata);
            console.log(obj.Name);
            if(!(obj.Name==name&&obj.Password==password)){
                evnt.preventDefault();
                alert("Check the details");
            }
        });