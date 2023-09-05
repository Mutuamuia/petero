

console.log("Hello wordl")

const scrollLink = document.querySelector('.scroll-link');

scrollLink.addEventListener('click', (event) => {
event.preventDefault();

const targetSection = document.querySelector(event.target.getAttribute('href'));
targetSection.scrollIntoView({
    behavior: 'smooth'
});
});
document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('order-form');
    const amountInput = document.getElementById('amount');
    const packageSelect = document.getElementById('package');

    packageSelect.addEventListener('change', function () {
        const selectedPackage = packageSelect.value;
        let packageAmount = 0;
        
        if (selectedPackage === 'Basic Package') {
            packageAmount = 19.99;
        } else if (selectedPackage === 'Platinum Package') {
            packageAmount = 29.99;
        } else if (selectedPackage === 'Gold Package') {
            packageAmount = 39.99;
        }
        
        amountInput.value = packageAmount.toFixed(2);
    });

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Additional processing or validation can be added here.
        // For now, let's simulate a successful order submission.
        alert('Your order has been submitted successfully! We will contact you shortly.');
    });
});    
