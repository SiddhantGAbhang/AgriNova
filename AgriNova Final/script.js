// Smooth Scrolling
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ESP32 Status Fetch Simulation
function fetchESP32Status() {
    const statusElement = document.getElementById("esp32-status");
    statusElement.innerText = "🔄 Checking...";

    setTimeout(() => {
        const statuses = ["✅ Healthy 🌿", "⚠️ Early Disease Detected", "🚨 Severe Infection"];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        statusElement.innerText = randomStatus;
    }, 2000);
}

// Sensor Data Simulation
function fetchSensorData() {
    const temperature = (20 + Math.random() * 15).toFixed(1); // 20°C - 35°C
    const moisture = (30 + Math.random() * 50).toFixed(0);    // 30% - 80%
    const pumpStatus = Math.random() > 0.5 ? "💧 ON" : "🛑 OFF";

    document.getElementById("temperature-data").innerText = `${temperature} °C 🌡️`;
    document.getElementById("moisture-data").innerText = `${moisture}% 💧`;
    document.getElementById("pump-data").innerText = `Water Pump: ${pumpStatus}`;
}

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields.");
        return;
    }

    alert(`✅ Thank you, ${name}! Your message has been received.`);
    this.reset();
});

// Optional: Auto-fetch sensor data every 5 seconds
setInterval(fetchSensorData, 5000);
