var btns = document.querySelectorAll('.btn');
var storeProducts = document.querySelectorAll('.store-product');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
    e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter == ''){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// Search Filter
var search = document.getElementById("search");
var productName = document.querySelectorAll(".product-details h2");

// Filter Products
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.style.display = "block"
        } else {
            product.parentElement.style.display = "none"
        }
    })
}



