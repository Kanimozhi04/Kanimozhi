var tabs = document.querySelectorAll(".collapseTab");
for ( let i = 0; i < tabs.length; i++) {
tabs[i].addEventListener("click", function() {
    var content = tabs[i].nextElementSibling;
    if (content.style.maxHeight)
    {
       content.style.maxHeight = null;
    }
    else 
    {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
    tabs[i].classList.toggle("active");
});
}
