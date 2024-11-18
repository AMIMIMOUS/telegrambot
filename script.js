let balance = 0;
const balanceElement = document.getElementById('balance');
const farmButton = document.getElementById('farm-button');

function updateBalance() {
    balanceElement.textContent = balance;
}

farmButton.addEventListener('click', () => {
    const lastFarmTime = localStorage.getItem('lastFarmTime');
    const currentTime = new Date().getTime();
    const eightHours = 8 * 60 * 60 * 1000;

    if (!lastFarmTime || currentTime - lastFarmTime >= eightHours) {
        balance += 10;
        updateBalance();
        localStorage.setItem('lastFarmTime', currentTime);
    } else {
        alert('Вы можете фармить только раз в 8 часов!');
    }
});

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'flex';

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Инициализация
updateBalance();
showTab('main-tab');