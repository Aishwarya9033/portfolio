// Typing animation
const typedText = document.querySelector(".typed-text");
const texts = [
  "Final Year Computer Science Student",
  "Web Developer",
  "Aspiring Software Engineer"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typedText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}

setTimeout(typeEffect, 1000);

// Fade-in animation for skills
const skillCards = document.querySelectorAll(".skill-category-card");

const fadeInOnScroll = () => {
  skillCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);
