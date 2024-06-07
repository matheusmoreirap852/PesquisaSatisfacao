document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * window.innerHeight}px`;
    noButton.style.left = `${Math.random() * window.innerWidth}px`;
});
