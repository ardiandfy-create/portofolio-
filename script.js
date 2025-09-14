// === Smooth Scroll untuk navigasi ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// === Handling Form ===
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  alert("Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.");
  form.reset();
});

// === Toggle Dark/Light Mode pakai ikon ===
const toggleIcon = document.getElementById("theme-toggle");

toggleIcon.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Ganti ikon sesuai mode
  if (document.body.classList.contains("light-mode")) {
    toggleIcon.textContent = "☀️";
  } else {
    toggleIcon.textContent = "🌙";
  }
});
