// פונקציה לסינון המוצרים לפי קטגוריות
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // הסרת המחלקה 'active' מכל הכפתורים
    buttons.forEach(button => button.classList.remove('active'));

    // הוספת המחלקה 'active' רק לכפתור שנלחץ
    const activeButton = document.querySelector(`[data-filter="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // סינון המוצרים לפי הקטגוריה שנבחרה
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'flex'; // מציג את הכרטיס
        } else {
            product.style.display = 'none'; // מסתיר את הכרטיס
        }
    });
}

// האזנה ללחיצה על כפתורי הסינון
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterProducts(category);
    });
});
