const purchaseButton = document.querySelectorAll('.purchase-button');

const purchasePopUp = () => {
    alert("Contact the Seller to Purchase the Vehicle!");
}

purchaseButton.forEach((btnEl) => {
    btnEl.addEventListener('click', purchasePopUp);
});