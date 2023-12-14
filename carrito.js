fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    const productosContainer = document.getElementById('productos');

    data.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.image}" alt="${producto.title}">
                <div>
                    <p>${producto.title}</p>
                    <p>Precio: $${producto.price.toFixed(2)}</p>
                </div>
            </div>
        `;

        productosContainer.innerHTML += productoHTML;
    });
})
.catch(error => console.error('Error fetching data:', error));