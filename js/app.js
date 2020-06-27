window.addEventListener('DOMContentLoaded', () => {
    // Musiałem użyć selektorów klas, ponieważ selektory id zwracały null.

    // Form
    const quantity = document.querySelector('.quantity');
    const months = document.querySelector('.months');
    const package = document.querySelector('.package');
    const packageBtn = document.querySelector('.package_btn');
    const packageList = document.querySelector('.package__options__list');
    const packageListElments = document.querySelectorAll('.option-variant');
    const accounting = document.querySelector('.accounting');
    const rental = document.querySelector('.rental');
    const productPrice = 0.5;
    const orderPrice = 0.25;
    const accountingPrice = 35;
    const rentalPrice = 15;
    const professionalPrice = 25;
    const premiumPrice = 60;


    // Result
    const productsCount = document.querySelector('.products-price-calc');
    const productsSum = document.querySelector('.products-price-sum');
    const ordersCount = document.querySelector('.orders-price-calc');
    const ordersSum = document.querySelector('.orders-price-sum');
    const packageOption = document.querySelector('.package-option');
    const packageSum = document.querySelector('.package-price-sum');
    const accountingSum = document.querySelector('.accounting-price-sum');
    const rentalSum = document.querySelector('.terminal-price-sum');
    const totalSum = document.querySelector('.total-sum');

    // Listeners
    quantity.addEventListener('input', () => {
        const productsAmount = quantity.value * productPrice;
        productsCount.innerHTML = `${quantity.value} &#42 $${productPrice}`;
        productsSum.innerText = '$' + productsAmount;
        updateTotalPrice(productsAmount);
        show(productsCount);
    });

    months.addEventListener('input', () => {
        const ordersAmount = months.value * orderPrice;
        ordersCount.innerHTML = `${months.value} &#42 $${orderPrice}`;
        ordersSum.innerText = '$' + ordersAmount;
        updateTotalPrice(ordersAmount);
        show(ordersCount);
    });

    packageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        packageList.classList.toggle('dis-none');
        show(packageOption);
        packageBtn.classList.toggle('rotate');
    });

    packageListElments.forEach(element => {
        const option = element.innerText;
        element.addEventListener('click', () => {
            package.value = option;
            packageList.classList.add('dis-none');
            packageOption.innerText = option;
            if (option === "Basic") {
                packageSum.innerText = "$0";
            } else if (option === "Professional") {
                packageSum.innerText = "$25";
                updateTotalPrice(professionalPrice);
            } else {
                packageSum.innerText = "$60";
                updateTotalPrice(premiumPrice)
            }
            packageBtn.classList.toggle('rotate');
        });
    });

    accounting.addEventListener('click', () => {
        if (accounting.checked) {
            accountingSum.innerText = '$' + accountingPrice;
            updateTotalPrice(accountingPrice);
            show(accountingSum);
        } else {
            accountingSum.innerText = '';
        }
    });

    rental.addEventListener('click', () => {
        if (rental.checked) {
            rentalSum.innerText = '$' + rentalPrice;
            updateTotalPrice(rentalPrice);
            show(rentalSum);
        } else {
            rentalSum.innerText = '';
        }
    });

    const show = (element) => {
        element.parentElement.classList.remove('hiden')
    };

    let totalPrice = 0;
    const updateTotalPrice = (param) => {

        totalPrice += param;
        totalSum.innerText = '$' + totalPrice;
    };
});