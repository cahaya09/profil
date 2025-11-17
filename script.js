// =========================
// Sidebar Toggle
// =========================
const sidebar = document.querySelector(".sidebar");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// =========================
// Navigation Handler
// =========================

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // =========================
        // 1. Jika About Me → biarkan link normal
        // =========================
        if (href === "resume.html") {
            return; 
        }

        // =========================
        // 2. Jika menu lain → jalankan SPA
        // =========================
        e.preventDefault(); // cegah pindah halaman

        const target = href.replace("#", "");
        showSection(target);

        document.querySelectorAll(".nav-link").forEach(n => n.classList.remove("active"));
        this.classList.add("active");

        sidebar.classList.remove("active");
    });
});

// =========================
// Fungsi untuk menampilkan section
// =========================
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.add("active");
    }
}

// Default Page
showSection("home");
