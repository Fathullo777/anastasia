// Массив цитат
const quotes = [
    "Женщина не должна говорить мужчине о том, что любит его. Об этом пусть говорят её сияющие, счастливые глаза.",
    "Красота в глазах смотрящего.",
    "Глаза говорят больше, чем слова. Поэтому, когда больно, мы отворачиваемся.",
    "Разговоры... Странная это все-таки вещь. Можно обменяться миллионом слов и не сказать главного.",
    "Разве можно что-нибудь объяснить, когда не смотришь друг другу в глаза?",
    "Не могут быть красивыми глаза, которые ни разу не плакали.",
    "Красивые глаза только у того, кто смотрит на тебя с нежностью."
];

// Показ новой цитаты с анимацией
function newQuote() {
    const colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFD700", "#FF6347"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor; // Меняем фон

    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
        quoteElement.classList.add("hidden"); // Прячем текущую цитату
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteElement.textContent = quotes[randomIndex];
            quoteElement.classList.remove("hidden"); // Показываем новую цитату
        }, 500); // Ждем полсекунды для эффекта
    }
}

// Управление музыкой
const audio = document.getElementById("background-music");
const toggleMusicButton = document.getElementById("toggle-music-button");

if (toggleMusicButton && audio) {
    toggleMusicButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => {
                toggleMusicButton.textContent = "Остановить музыку";
            }).catch((error) => {
                console.log("Ошибка воспроизведения:", error);
            });
        } else {
            audio.pause();
            toggleMusicButton.textContent = "Воспроизвести музыку";
        }
    });
}

// Автоматическая смена цитат
let autoChangeQuotes = true; // Флаг управления автосменой цитат
let quoteInterval = setInterval(() => {
    if (autoChangeQuotes) {
        newQuote();
    }
}, 5000); // Каждые 5 секунд

// Добавление новой цитаты
const addQuoteButton = document.getElementById("add-quote-button");
const newQuoteInput = document.getElementById("new-quote");

if (addQuoteButton && newQuoteInput) {
    addQuoteButton.addEventListener("click", () => {
        const newQuoteText = newQuoteInput.value.trim();
        if (newQuoteText) {
            quotes.push(newQuoteText);
            alert("Цитата добавлена!");
            newQuoteInput.value = ""; // Очищаем поле ввода
        } else {
            alert("Пожалуйста, введите текст цитаты.");
        }
    });
}

// Управление автосменой цитат (опционально)
const toggleQuotesButton = document.getElementById("toggle-quotes-button");
if (toggleQuotesButton) {
    toggleQuotesButton.addEventListener("click", () => {
        autoChangeQuotes = !autoChangeQuotes; // Переключаем флаг
        toggleQuotesButton.textContent = autoChangeQuotes
            ? "Остановить смену цитат"
            : "Включить смену цитат";
    });
}

// Управление полноэкранным режимом для изображений
const images = document.querySelectorAll('.eye-image'); // Выбираем все изображения
const overlay = document.getElementById('fullscreenOverlay');
const fullscreenImage = document.getElementById('fullscreenImage');

// Функция для отображения изображения на весь экран
images.forEach(image => {
    image.addEventListener('click', () => {
        fullscreenImage.src = image.src; // Устанавливаем путь к выбранному изображению
        overlay.classList.add('visible'); // Показываем оверлей
    });
});

// Функция для выхода из полноэкранного режима
overlay.addEventListener('click', () => {
    overlay.classList.remove('visible'); // Скрываем оверлей
});
