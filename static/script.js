document.addEventListener("DOMContentLoaded", () => {
    const detailsForm = document.getElementById("details-form");
    const paymentForm = document.getElementById("payment-form");

    detailsForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const phoneNumber = document.getElementById("phone-number").value;
        const email = document.getElementById("email").value;
        const selectedPackage = document.getElementById("selected-package").value;

        if (!phoneNumber || !selectedPackage) {
            alert("Please fill in all required fields.");
            return;
        }

        alert(`Details submitted:\nPhone: ${phoneNumber}\nEmail: ${email}\nPackage: ${selectedPackage}`);
        document.getElementById("user-details").style.display = "none";
        document.getElementById("payment").style.display = "block";
    });

    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const cardNumber = document.getElementById("card-number").value;
        const expirationDate = document.getElementById("expiration-date").value;
        const cvv = document.getElementById("cvv").value;

        if (!cardNumber || !expirationDate || !cvv) {
            alert("Please fill in all payment details.");
            return;
        }

        alert("Payment submitted successfully!");
        // Handle payment processing here
    });
});

function selectPackage(packageName) {
    document.getElementById("selected-package").value = packageName;
    document.getElementById("packages").style.display = "none";
    document.getElementById("user-details").style.display = "block";
}
