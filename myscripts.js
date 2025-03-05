// פונקציית סינון מוצרים לפי קטגוריות
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // עדכון כפתור פעיל
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`[onclick="filterProducts('${category}')"]`).classList.add('active');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'flex'; // מציג את הכרטיס
        } else {
            product.style.display = 'none'; // מסתיר את הכרטיס
        }
    });
}
