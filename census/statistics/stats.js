document.addEventListener("DOMContentLoaded", function () {
    // Sample user data for testing
    const userData = [
        { firstName: "Nyaih", lastName: "Bathelomew", address: "Bamenda", region: "North West" },
        { firstName: "John", lastName: "Boniface", address: "Buea", region: "South West" },
    ];

    // Calculate population statistics
    const statistics = calculateStatistics(userData);

    // Display the statistics
    displayStatistics(statistics);
});

// Function to calculate population statistics
function calculateStatistics(users) {
    const statistics = {};

    users.forEach((user) => {
        if (!statistics[user.region]) {
            statistics[user.region] = { males: 0, females: 0 };
        }

        if (user.gender === "Male") {
            statistics[user.region].males++;
        } else if (user.gender === "Female") {
            statistics[user.region].females++;
        }
    });

    return statistics;
}

// Function to display the statistics
function displayStatistics(statistics) {
    const statisticsList = document.getElementById("statisticsList");

    // Clear existing statistics list
    statisticsList.innerHTML = "";

    // Populate the statistics list
    for (const region in statistics) {
        const listItem = document.createElement("li");
        listItem.textContent = `${region}: ${statistics[region].males} males, ${statistics[region].females} females`;
        statisticsList.appendChild(listItem);
    }
}
