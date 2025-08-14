// Typing animation
new Typed("#typed-text", {
  strings: ["Build Your Tech Future", "Launch Your SaaS Today", "Scale Without Limits"],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true
});

// Counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const inc = target / 200;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Email subscription with localStorage
const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");
const subscribeMsg = document.getElementById("subscribe-msg");

subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim().toLowerCase();
  let subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
  if (subscribedEmails.includes(email)) {
    subscribeMsg.textContent = "You are already subscribed.";
    subscribeMsg.style.color = "orange";
  } else {
    subscribedEmails.push(email);
    localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
    subscribeMsg.textContent = "Thank you for subscribing!";
    subscribeMsg.style.color = "green";
  }
  emailInput.value = "";
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }
});

// Init AOS
AOS.init({
  duration: 900,
  once: true,
  offset: 20
});
