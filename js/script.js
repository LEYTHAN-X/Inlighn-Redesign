// 🟡 Skeleton Loader and Main Content Reveal
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById("skeleton-loader");
        loader.classList.add("opacity-0", "pointer-events-none", "transition-opacity", "duration-700");

        document.body.classList.add("loaded"); // Show <main>
        animateCounters(); // Start counters after loader
    }, 4000); // Simulate loading duration
});

// 🔵 Toggle Mobile Menu
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}

// 🟢 Counter Animation for Status Section
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    });
}

// 🔴 Mouse Trail Animation
const trailContainer = document.getElementById("trail-container");
const trailLength = 5;
const trailDots = [];

for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement("div");
    dot.className = "trail-dot";
    trailContainer.appendChild(dot);
    trailDots.push({ element: dot, x: 0, y: 0 });
}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let lastMoveTime = Date.now();

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    lastMoveTime = Date.now();
});

function animateTrail() {
    const now = Date.now();
    const isMoving = now - lastMoveTime < 100;

    if (isMoving) {
        trailDots[0].x = mouseX;
        trailDots[0].y = mouseY;
        for (let i = 1; i < trailLength; i++) {
            trailDots[i].x += (trailDots[i - 1].x - trailDots[i].x) * 0.3;
            trailDots[i].y += (trailDots[i - 1].y - trailDots[i].y) * 0.3;
        }
    } else {
        for (let i = 0; i < trailLength; i++) {
            trailDots[i].x += (mouseX - trailDots[i].x) * 0.2;
            trailDots[i].y += (mouseY - trailDots[i].y) * 0.2;
        }
    }

    trailDots.forEach((dot, i) => {
        dot.element.style.transform = `translate(${trailDots[i].x}px, ${trailDots[i].y}px)`;
        dot.element.style.opacity = `${1 - i / trailLength}`;
    });

    requestAnimationFrame(animateTrail);
}

animateTrail();

document.addEventListener("DOMContentLoaded", () => {
    const isLogin = window.location.pathname.includes("login.html");

    if (isLogin) {
        const loader = document.getElementById("skeleton-loader");
        loader.style.display = "flex";

        setTimeout(() => {
            loader.classList.add("opacity-0", "pointer-events-none", "transition-opacity", "duration-700");
            document.body.classList.add("loaded");
        }, 3000); // Show for 3 seconds
    } else {
        document.body.classList.add("loaded");
    }
});


