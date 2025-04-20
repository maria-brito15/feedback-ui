const sendReview = document.getElementById("sendReview");
const happyEmoji = document.getElementById("happyEmoji");
const mehEmoji = document.getElementById("mehEmoji");
const angryEmoji = document.getElementById("angryEmoji");
const displayFirst = document.getElementById("displayFirst");
const displaySecond = document.getElementById("displaySecond");
const selectedEmojiDisplay = document.getElementById("selectedEmoji");

const texts = ["Bom", "Neutro", "Ruim"];
const emojis = [happyEmoji, mehEmoji, angryEmoji];

let selectedEmoji = null;
let selectedEmojiIndex = null;

function selectEmoji(emoji, index) {
  emojis.forEach(e => {
      e.style.border = 'none'; 
      e.style.transform = 'scale(1)'; 
  });
  
  emoji.style.transform = 'scale(1.2)'; 
  emoji.style.transition = 'transform 0.2s';
  
  selectedEmoji = emoji;
  selectedEmojiIndex = index;
  
  if (selectedEmojiDisplay) {
      selectedEmojiDisplay.textContent = texts[index]; 
  }
}

happyEmoji.addEventListener('click', () => selectEmoji(happyEmoji, 0));
mehEmoji.addEventListener('click', () => selectEmoji(mehEmoji, 1));
angryEmoji.addEventListener('click', () => selectEmoji(angryEmoji, 2));

sendReview.addEventListener('click', () => {
  if (!selectedEmoji) {
      alert('Selecione um emoji para enviar sua review.');
      return;
  }
});

function changeDisplay () {
  displayFirst.style.display = "none";
  displaySecond.style.display = "flex";
}

sendReview.addEventListener('click', changeDisplay);
