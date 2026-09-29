let currentScreen = 1;

let countdownTimer = null;

let countdownValue = 10;


// ==============================
// NEXT SCREEN
// ==============================

function nextScreen() {

    clearInterval(countdownTimer);

    const current =
        document.getElementById(
            `screen${currentScreen}`
        );

    current.classList.remove("active");


    currentScreen++;


    if (currentScreen > 5) {
        currentScreen = 5;
        return;
    }


    const next =
        document.getElementById(
            `screen${currentScreen}`
        );

    next.classList.add("active");


    // Start 10 second countdown
    if (currentScreen >= 2 && currentScreen < 5) {

        startCountdown();

    }

}


// ==============================
// COUNTDOWN
// ==============================

function startCountdown() {

    clearInterval(countdownTimer);

    countdownValue = 10;


    const buttons =
        document.querySelectorAll(".countdown");


    buttons.forEach(button => {

        button.textContent = countdownValue;

    });


    countdownTimer = setInterval(() => {

        countdownValue--;


        const buttons =
            document.querySelectorAll(".countdown");


        buttons.forEach(button => {

            button.textContent = countdownValue;

        });


        if (countdownValue <= 0) {

            clearInterval(countdownTimer);

            nextScreen();

        }

    }, 1000);

}


// ==============================
// FINAL CELEBRATION
// ==============================

function celebrate() {

    clearInterval(countdownTimer);


    const finalMessage =
        document.getElementById(
            "final-message"
        );


    finalMessage.style.display = "block";


    createConfetti(180);


    // Hide button after clicking
    const button =
        document.querySelector(
            ".celebrate-btn"
        );


    button.style.display = "none";

}


// ==============================
// CONFETTI
// ==============================

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const symbols = [
        "🎉",
        "✨",
        "🎈",
        "🎂",
        "💫",
        "⭐",
        "🎁"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");


        confetti.className =
            "confetti";


        confetti.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (Math.random() * 20 + 12)
            + "px";


        confetti.style.animationDuration =
            (Math.random() * 2 + 2)
            + "s";


        confetti.style.animationDelay =
            Math.random() * 0.7 + "s";


        container.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 4500);

    }

}


// ==============================
// PAGE LOAD
// ==============================

window.addEventListener("load", () => {

    // Small opening effect
    setTimeout(() => {

        createConfetti(20);

    }, 800);

});