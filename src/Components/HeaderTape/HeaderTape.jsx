import '/src/Components/HeaderTape/HeaderTape.css'

export default function HeaderTape() {
    // Текст, который будет крутиться. 
    // Обрати внимание на пробелы или символы в конце, чтобы слова не слипались.
    const text = "💥 SALE 50% OFF ON ALL PANTS • FREE SHIPPING WORLDWIDE • NEW COLLECTION ARRIVED • ";

    // Повторяем текст 20 раз, чтобы лента была длинной и не заканчивалась на широких экранах
    const content = Array(20).fill(text).join("");

    return (
        <div className="tape-container">
            <div className="tape-track">
                {content}
            </div>
        </div>
    );
}