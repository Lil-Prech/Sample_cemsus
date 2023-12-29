
function submitForm() {
    // You can add form validation and submission logic here
    // For example, you can collect form data and send it to the server using AJAX or fetch
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        // Add more form fields as needed
    };

    // Display the collected data (you can replace this with your server-side logic)
    console.log("Form Data:", formData);
    alert("Form submitted!");
}
function checkAgeAndSubmit() {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    if (age < 21) {
        alert("Access denied. Users below 21 are not allowed to register.");
    } else {
        submitForm();
    }
}

function submitForm() {
    // You can add form validation and submission logic here
    // For example, you can collect form data and send it to the server using AJAX or fetch
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        // Add more form fields as needed
    };

    // Display the collected data (you can replace this with your server-side logic)
    console.log("Form Data:", formData);
    alert("Form submitted!");
}

