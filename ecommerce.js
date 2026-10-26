let products = [];

const getProductsData = async()=>{

    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    products = data.products;
    console.log(products);

    products.map((product, i)=>{
        
        const productContainer = document.getElementById("products-container");

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "product-image-here";

        const title = document.createElement("h1");
        title.innerText = `Product ${i + 1}`;

        const price = document.createElement("h2");
        price.innerText = `$59`;

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        const span = document.createElement("span");
        span.innerText = "ADD";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(incrementBtn);
        div.appendChild(span);

        productContainer.appendChild(div);
    });

}

getProductsData();