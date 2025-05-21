window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    const appendMilliseconds = document.getElementById("milliseconds");
    const appendSeconds = document.getElementById("seconds");
    const appendMinutes = document.getElementById("minutes");

    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');

    const toggle = document.getElementById("dark-mode-toggle");
    const icon = document.getElementById("mode-icon");

    let Interval;

    // Load saved theme
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
        icon.textContent = "🌙";
    } else {
        icon.textContent = "🌞";
    }

    // Toggle theme
    toggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        if (isDark) {
            localStorage.setItem("darkMode", "enabled");
            icon.textContent = "🌙";
        } else {
            localStorage.setItem("darkMode", "disabled");
            icon.textContent = "🌞";
        }
    });

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        appendMilliseconds.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendMinutes.innerHTML = "00";
    };

    function startTimer() {
        milliseconds++;

        if (milliseconds > 99) {
            seconds++;
            milliseconds = 0;
        }

        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }

        appendMilliseconds.innerHTML = milliseconds < 10 ? "0" + milliseconds : milliseconds;
        appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    }
};