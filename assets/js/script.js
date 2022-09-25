let images = [];
for (i = 1; i < 9; i++) {
    images.push({
        id: `${i}`,
        categorie: 'sac',
        name: `IMG${i}`
    });
}
let products = document.getElementById('products');

images.forEach(image => {
    let product = document.createElement('div');
    let p = document.createElement('p');
    product.className = 'product';
    product.id = image.id;
    let img = document.createElement('img');
    img.src = `./assets/img/products/IMG${image.id}.jpg`;
    img.alt = image.categorie + image.id;
    img.width = 300;
    img.height = 300;
    product.appendChild(img);
    p.innerHTML = 'Prix: <span class="underlined">6000frs</span> 4500frs';
    product.appendChild(p);
    products.append(product);
});
