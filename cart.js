function increaseQty(id) {
    let qtyInput = document.getElementById(`quantity${id}`);
    qtyInput.value = parseInt(qtyInput.value) + 1;
    updateTotal();
}

function decreaseQty(id) {
    let qtyInput = document.getElementById(`quantity${id}`);
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
        updateTotal();
    }
}

function updateTotal() {
    let totalINR = 0;
    let quantities = document.querySelectorAll('.item-quantity input');
    let prices = document.querySelectorAll('.item-price p');

    quantities.forEach((qty, index) => {
        totalINR += parseInt(qty.value) * parseFloat(prices[index].innerText.replace('₹', ''));
    });

    // Display total in INR with the rupee symbol
    document.getElementById('total-price').innerText = `₹${totalINR.toFixed(2)}`;
}