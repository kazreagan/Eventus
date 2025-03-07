document.addEventListener("DOMContentLoaded", () => {
    const events = [
        {name: "Halal Women's Conference", date: "2025-03-29"},
        {name: "Eid Special", date: "2025-04-02"},
        {name: "Men's Conference", date: "2025-10-21"}
    ];

    const eventList = document.getElementById("event-list");
    const eventSelect = document.getElementById("eventSelect");

    if (eventList && eventSelect) {
        //events
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");
            eventCard.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p>`;
            eventList.appendChild(eventCard);

            const option = document.createElement("option");
            option.value = event.name;
            option.textContent = event.name;
            eventSelect.appendChild(option);
        });
    }

    //registration
    const eventForm = document.getElementById("eventForm");
    if (eventForm) {
        eventForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Registration Successful!");
        });
    }

    //dark mode
    const toggleDarkMode = document.getElementById("toggleDarkMode");
    if (toggleDarkMode) {
        toggleDarkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    } else {
        console.error("Element with ID 'toggleDarkMode' not found.");
    }
});