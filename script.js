// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple scroll-reveal for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".fade-section").forEach((section) => {
  observer.observe(section);
});

// Slight parallax for background orbs
const orbs = document.querySelectorAll(".bg-orb");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  orbs.forEach((orb, index) => {
    const intensity = (index + 1) * 6; // different depths
    orb.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
  });
});
