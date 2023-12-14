document.addEventListener("DOMContentLoaded", function () {
    const productGallery = document.getElementById("product-gallery");

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("producto");

                const image = document.createElement("img");
                image.src = product.image;
                image.alt = product.title;

                const productInfo = document.createElement("div");
                productInfo.classList.add("producto-info");

                const description = document.createElement("p");
                description.textContent = product.title;

                const price = document.createElement("p");
                price.classList.add("precio");
                price.textContent = `$${product.price}`;

                productInfo.appendChild(description);
                productInfo.appendChild(price);

                // Agrega un evento de clic para redirigir a la página de detalles del producto
                productCard.addEventListener("click", function () {
                    window.location.href = `detalles.html?id=${product.id}`;
                });

                productCard.appendChild(image);
                productCard.appendChild(productInfo);

                productGallery.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});