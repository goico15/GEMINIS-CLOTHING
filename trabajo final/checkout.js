document.addEventListener('DOMContentLoaded', function() {
    const cartTotal = localStorage.getItem('cartTotal') || '0';
    document.getElementById('cart-total').innerText = cartTotal;
});

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('full-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const postalCode = document.getElementById('postal-code').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardName = document.getElementById('card-name').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!fullName || !address || !city || !postalCode || !phone || !cardNumber || !cardName || !expiryDate || !cvv) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    if (!validateCardNumber(cardNumber) || !validateExpiryDate(expiryDate) || !validateCVV(cvv)) {
        alert('Por favor, verifica la información de la tarjeta.');
        return;
    }

    alert('Compra realizada con éxito. ¡Gracias por tu compra!');
    localStorage.removeItem('cartCount');
    localStorage.removeItem('cartTotal');
    window.location.href = 'index.html';
});

function validateCardNumber(number) {
    return /^\d{13,19}$/.test(number.replace(/\s+/g, ''));
}

function validateExpiryDate(date) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
}

function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}

// Formatear la fecha de expiración con un "/"
document.getElementById('expiry-date').addEventListener('input', function(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    event.target.value = value;
});
