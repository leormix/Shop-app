
import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function BuyButton({ product, addToCart }) {
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = (e) => {

        const rect = e.target.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            origin: { x, y },
            particleCount: 100,
            spread: 70,
            colors: ['#2ecc71', '#3498db', '#f1c40f'],
            zIndex: 9999,
        });

        addToCart(product);

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 1000);
    };

    return (
        <button
            className={isAdded ? 'added' : ''}
            onClick={handleClick}
            disabled={isAdded}
        >
            {isAdded ? "Added ✅" : "Buy"}
        </button>
    );
}