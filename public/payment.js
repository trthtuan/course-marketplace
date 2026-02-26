document.addEventListener('DOMContentLoaded', () => {
    // Get orderId from URL
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('orderId');

    if (!orderId) {
        alert('Order ID not found. Redirecting to checkout.');
        window.location.href = 'checkout.html';
        return;
    }

    // Load order from localStorage
    const orderData = localStorage.getItem(`order_${orderId}`);
    if (!orderData) {
        alert('Order not found. Redirecting to checkout.');
        window.location.href = 'checkout.html';
        return;
    }

    const order = JSON.parse(orderData);

    // Format currency
    function formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
    }

    // Format date
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('vi-VN') + ' ' + date.toLocaleTimeString('vi-VN');
    }

    // Populate order details
    document.getElementById('displayOrderId').textContent = order.id;
    document.getElementById('displayDate').textContent = formatDate(order.createdAt);
    document.getElementById('displayEmail').textContent = order.email;
    document.getElementById('displayPhone').textContent = order.phone;
    
    const formattedAmount = formatCurrency(order.amount);
    document.getElementById('displayAmount').textContent = formattedAmount;
    document.getElementById('bankAmount').textContent = formattedAmount;
    document.getElementById('bankMessage').textContent = order.id;

    // Generate VietQR URL
    function generateVietQR(bankId, accountNo, amount, orderId) {
        return `https://img.vietqr.io/image/${bankId}-${accountNo}-compact.png?amount=${amount}&addInfo=${orderId}`;
    }

    // Set QR Image
    const qrUrl = generateVietQR('MB', '123456789', order.amount, order.id);
    document.getElementById('qrImage').src = qrUrl;

    // Tab switching logic
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked
            tab.classList.add('active');
            const targetId = `tab-${tab.dataset.tab}`;
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Polling function to check payment status
    function checkPaymentStatus() {
        const currentOrderData = localStorage.getItem(`order_${orderId}`);
        if (currentOrderData) {
            const currentOrder = JSON.parse(currentOrderData);
            if (currentOrder.status === 'paid') {
                window.location.href = `success.html?orderId=${orderId}`;
            }
        }
    }

    // Check every 5 seconds
    setInterval(checkPaymentStatus, 5000);

    // Dev helper: Simulate Payment
    document.getElementById('btnSimulatePayment').addEventListener('click', () => {
        order.status = 'paid';
        localStorage.setItem(`order_${orderId}`, JSON.stringify(order));
        // The polling function will catch this and redirect
    });
});
