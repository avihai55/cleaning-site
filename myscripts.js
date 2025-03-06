// ������� ������ ������� ��� ��������
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // ���� ������ 'active' ��� ��������
    buttons.forEach(button => button.classList.remove('active'));

    // ����� ������ 'active' �� ������ �����
    const activeButton = document.querySelector(`[data-filter="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // ����� ������� ��� �������� ������
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'flex'; // ���� �� ������
        } else {
            product.style.display = 'none'; // ����� �� ������
        }
    });
}

// ����� ������ �� ������ ������
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterProducts(category);
    });
});
