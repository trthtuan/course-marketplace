document.addEventListener('DOMContentLoaded', () => {
    const btnCheckout = document.getElementById('btnCheckout');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d+$/;
        return re.test(phone) && phone.length >= 9;
    }

    function showError(groupId, show) {
        const group = document.getElementById(groupId);
        if (show) {
            group.classList.add('error');
        } else {
            group.classList.remove('error');
        }
    }

    btnCheckout.addEventListener('click', () => {
        let isValid = true;

        const name = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!name) {
            showError('nameGroup', true);
            isValid = false;
        } else {
            showError('nameGroup', false);
        }

        if (!email || !validateEmail(email)) {
            showError('emailGroup', true);
            isValid = false;
        } else {
            showError('emailGroup', false);
        }

        if (!phone || !validatePhone(phone)) {
            showError('phoneGroup', true);
            isValid = false;
        } else {
            showError('phoneGroup', false);
        }

        if (isValid) {
            // Generate random order ID
            const orderId = 'ORD' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
            
            // Create order object
            const order = {
                id: orderId,
                name: name,
                email: email,
                phone: phone,
                amount: 139999,
                status: 'pending',
                createdAt: new Date().getTime()
            };

            // Save to localStorage
            localStorage.setItem(`order_${orderId}`, JSON.stringify(order));

            // Redirect to payment page
            window.location.href = `payment.html?orderId=${orderId}`;
        }
    });
});
