document.addEventListener("DOMContentLoaded", function () {
    // Sample user data for testing
    const userData = [
        { firstName: "Nyaih", lastName: "Bathelomew", address: "Bamenda", region: "North West" },
        { firstName: "John", lastName: "Boniface", address: "Buea", region: "South West" },
    ];

    // Display the user list
    displayUserList(userData);
});

// Function to display the user list
function displayUserList(users) {
    const userList = document.getElementById("userList");

    // Clear existing user list
    userList.innerHTML = "";

    // Populate the user list
    users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.firstName} ${user.lastName} - ${user.address}, ${user.region}`;
        userList.appendChild(listItem);
    });
}

// Function to download the user list as a text file
function downloadUserList() {
    const userData = [
        { firstName: "Nyaih", lastName: "Bathelomew", address: "Bamenda", region: "North West" },
        { firstName: "John", lastName: "Boniface", address: "Buea", region: "South West" },
        // Add more user data as needed
    ];

    const userListText = userData.map(user => `${user.firstName} ${user.lastName} - ${user.address}, ${user.region}`).join('\n');

    const blob = new Blob([userListText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "user_list.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
