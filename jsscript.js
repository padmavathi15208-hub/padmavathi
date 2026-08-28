/* =========================================================
   SKILLBRIDGE
   Academia - Industry Collaboration Portal
   SIH26044
   ========================================================= */


/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */

function toggleMenu() {

    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
        sidebar.classList.toggle("show");
    }
}


/* =========================================================
   SIDEBAR NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".menu a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            links.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

            // Close mobile sidebar
            const sidebar =
                document.getElementById("sidebar");

            if (window.innerWidth <= 850) {
                sidebar.classList.remove("show");
            }
        });

    });

});


/* =========================================================
   INTERNSHIP APPLICATION
   ========================================================= */

function apply(position) {

    const modal =
        document.getElementById("applicationModal");

    const positionText =
        document.getElementById("modalPosition");

    if (positionText) {
        positionText.innerText = position;
    }

    if (modal) {
        modal.classList.add("show");
    }
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

    const modal =
        document.getElementById("applicationModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


/* =========================================================
   CONFIRM APPLICATION
   ========================================================= */

function confirmApplication() {

    const position =
        document.getElementById("modalPosition");

    if (position) {

        alert(
            "Application submitted successfully for " +
            position.innerText +
            "!"
        );

    }

    closeModal();
}


/* =========================================================
   IMPROVE SKILLS
   ========================================================= */

function improveSkills() {

    const skills =
        document.getElementById("skills");

    if (skills) {

        skills.scrollIntoView({
            behavior: "smooth"
        });

    }

    setTimeout(function () {

        alert(
            "Recommended focus areas:\n\n" +
            "• Cloud Computing\n" +
            "• Advanced SQL\n" +
            "• Docker\n" +
            "• System Design"
        );

    }, 600);
}


/* =========================================================
   INTERNSHIP SEARCH
   ========================================================= */

function searchInternships() {

    const input =
        document.getElementById("searchInput");

    const list =
        document.getElementById("internshipList");

    if (!input || !list) {
        return;
    }

    const searchValue =
        input.value.toLowerCase().trim();

    const cards =
        list.querySelectorAll(".internship-card");

    let found = 0;

    cards.forEach(function (card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(searchValue)) {

            card.style.display = "";
            found++;

        } else {

            card.style.display = "none";

        }

    });

    showSearchMessage(found);

}


/* =========================================================
   SEARCH MESSAGE
   ========================================================= */

function showSearchMessage(count) {

    let message =
        document.getElementById("searchMessage");

    if (!message) {

        message =
            document.createElement("p");

        message.id = "searchMessage";

        message.style.color = "#64748b";
        message.style.fontSize = "13px";
        message.style.marginTop = "12px";

        const list =
            document.getElementById("internshipList");

        if (list) {
            list.parentNode.appendChild(message);
        }
    }

    if (count === 0) {

        message.innerText =
            "No matching internships found.";

    } else {

        message.innerText =
            count +
            " internship opportunity" +
            (count > 1 ? "ies" : "y") +
            " found.";
    }
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const notification =
        document.querySelector(".notification");

    if (notification) {

        notification.addEventListener(
            "click",
            function () {

                alert(
                    "Notifications\n\n" +
                    "✓ Your application was shortlisted.\n" +
                    "✓ 3 new internships match your skills.\n" +
                    "✓ Skill assessment available."
                );

            }
        );
    }

});


/* =========================================================
   VIEW DETAILS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const buttons =
        document.querySelectorAll(".view-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const text =
                this.innerText.toLowerCase();

            if (text.includes("skill")) {

                document
                    .getElementById("skills")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            } else {

                alert(
                    "More opportunities and detailed analytics will be available here."
                );

            }

        });

    });

});


/* =========================================================
   CAREER SCORE ANIMATION
   ========================================================= */

function animateCareerScore() {

    const scoreElement =
        document.querySelector(".score");

    if (!scoreElement) {
        return;
    }

    let current = 0;
    const target = 86;

    const timer =
        setInterval(function () {

            current++;

            scoreElement.innerText =
                current + "%";

            if (current >= target) {
                clearInterval(timer);
            }

        }, 20);
}


/* =========================================================
   PROGRESS BAR ANIMATION
   ========================================================= */

function animateProgressBars() {

    const bars =
        document.querySelectorAll(".progress-bar");

    bars.forEach(function (bar) {

        const targetWidth =
            bar.style.width;

        bar.style.width = "0%";

        setTimeout(function () {

            bar.style.width =
                targetWidth;

        }, 200);

    });
}


/* =========================================================
   RUN ANIMATIONS
   ========================================================= */

window.addEventListener("load", function () {

    animateCareerScore();

    animateProgressBars();

});


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("applicationModal");

    if (modal && event.target === modal) {
        closeModal();
    }

});


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});
