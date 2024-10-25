const quotes = [
    "Женщина не должна говорить мужчине о том, что любит его. Об этом пусть говорят её сияющие, счастливые глаза. Они красноречивее всяких слов.",
    "Красота в глазах смотрящего.",
    "Глаза говорят больше, чем слова. Поэтому, когда больно, мы отворачиваемся.",
    "Разговоры... Странная это все таки вещь. Можно обменяться миллионом слов и... не сказать главного. А можно молча смотреть в глаза и... поведать обо всем.",
    "Разве можно что-нибудь объяснить, когда не смотришь друг другу в глаза?",
    "Не могут быть красивыми глаза, которые ни разу не плакали.",
    "Красивые глаза только у того, кто смотрит на тебя с нежностью."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

function playMusic() {
    const audio = document.getElementById("background-music");
    audio.play();
}

function stopMusic() {
    const audio = document.getElementById("background-music");
    audio.pause();
    audio.currentTime = 0; // Сбрасываем время воспроизведения
}