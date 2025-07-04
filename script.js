const phrases = ["Aspiring Full Stack Developer", "Java & React Enthusiast", "Tech Explorer"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;
const typedText = document.getElementById('typed-text');

function loop() {
  typedText.innerHTML = currentPhrase.join('');
  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
    setTimeout(loop, 100);
  } else if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
    setTimeout(loop, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
    setTimeout(loop, 1000);
  }
}
loop();

function toggleTheme() {
  document.body.classList.toggle("light");
}
