document.addEventListener('DOMContentLoaded', function () {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Пути к изображениям

    const puzzleContainer = document.getElementById('puzzle-container');

    function createPuzzlePieces(image) {
        const pieces = [];
        for (let i = 0; i < 8; i++) {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            const pieceImage = document.createElement('img');
            pieceImage.src = image;
            pieceImage.style.objectPosition = `-${i % 3 * 100}px -${Math.floor(i / 3) * 100}px`;
            piece.appendChild(pieceImage);
            pieces.push(piece);
        }
        return pieces;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function renderPuzzle(image) {
        const pieces = createPuzzlePieces(image);
        const shuffledPieces = shuffleArray(pieces);
        shuffledPieces.forEach(piece => {
            puzzleContainer.appendChild(piece);
        });
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];
    renderPuzzle(randomImage);
});
