document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const userIcon = document.querySelector('.user-icon');
    const cartBadge = document.querySelector('.cart-badge');

    // Update cart counter
    function updateCartCounter() {
        if (!cartBadge) return;
        
        try {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const count = cart.length;
            
            cartBadge.textContent = count;
            cartBadge.style.display = count > 0 ? 'block' : 'none';
        } catch (e) {
            console.error('Error parsing cart data', e);
        }
    }

    // Initial update
    updateCartCounter();

    // Listen for storage changes (if modified in another tab)
    window.addEventListener('storage', (e) => {
        if (e.key === 'cart') {
            updateCartCounter();
        }
    });

    // Listen for custom event (if modified in same tab)
    window.addEventListener('cartUpdated', updateCartCounter);

    // Navigation
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            // Redirect to React cart route or static cart.html
            window.location.href = '/cart'; 
        });
    }

    if (userIcon) {
        userIcon.addEventListener('click', () => {
            window.location.href = '/user.html';
        });
    }
});
