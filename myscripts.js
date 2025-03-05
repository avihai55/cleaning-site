// �������� ����� ������ ��� ��������
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // ����� ����� ����
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`[onclick="filterProducts('${category}')"]`).classList.add('active');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'flex'; // ���� �� ������
        } else {
            product.style.display = 'none'; // ����� �� ������
        }
    });
}
