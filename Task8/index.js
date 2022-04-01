document.querySelector("#img").addEventListener("change",function(){
    const imgReader=new FileReader();  
    
    imgReader.addEventListener("load",function(){
    localStorage.setItem("uploadedImage", imgReader.result);
    }); 
    
    imgReader.readAsDataURL(this.files[0]);
    
    });
    document.querySelector("#imgDetails").addEventListener("change", function()
     {
      var file = document.getElementById("imgDetails").files[0];
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
      var detail = e.target.result;
      var data = JSON.parse(detail); 
      localStorage.setItem("myObject", JSON.stringify(data));
      };
      fileReader.readAsText(file);
    });