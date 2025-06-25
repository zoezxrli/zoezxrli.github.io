const cards = document.querySelectorAll('.gallery-card');
const carousel = document.getElementById('carousel');
let currentIndex = 0;

function updateCards(index) {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    card.style.transform = 'scale(0.85)';
    card.style.filter = 'grayscale(70%) brightness(0.6)';
  });

  const activeCard = cards[index];
  activeCard.classList.add('active');
  activeCard.style.transform = 'scale(1.3)';
  activeCard.style.filter = 'none';

  // 平滑居中滚动选中的卡片
  const offsetLeft = activeCard.offsetLeft + activeCard.offsetWidth / 2 - carousel.offsetWidth / 2;
  carousel.scrollTo({ left: offsetLeft, behavior: 'smooth' });
}

document.getElementById('left-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCards(currentIndex);
});

document.getElementById('right-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCards(currentIndex);
});

updateCards(currentIndex);

window.addEventListener("DOMContentLoaded", () => {
  const activeCard = document.querySelector(".gallery-card.active");
  if (activeCard) {
    activeCard.scrollIntoView({ behavior: "auto", inline: "center" });
  }
});
