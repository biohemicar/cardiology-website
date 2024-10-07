// JavaScript for any interactivity (optional)
// For example, you can add more advanced interactions with JavaScript if needed.

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert(card.querySelector('h3').textContent + ' clicked!');
    });
});
