document.addEventListener("DOMContentLoaded",()=>{
    const imageDataUrl=localStorage.getItem("uploadedImage");
    if(imageDataUrl)
    {
     document.querySelector("#image").setAttribute("src",imageDataUrl);
    }
    });
    let Object = localStorage.getItem("myObject");
    var obj=JSON.parse(Object); 
    for (var key in obj) { 
    if (obj.hasOwnProperty(key)) {
    var tag = document.createElement("p");
    tag.setAttribute("class","para") ;
      var text = document.createTextNode(key + " - " + obj[key]); 
      tag.appendChild(text); 
      var element = document.getElementById("imgContainer");
      element.appendChild(tag);
    }
    }