
document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    const updateTime = () => {
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString().split(' ')[4];
        currentDay.textContent = now.toLocaleString('en-US', { weekday: 'long' });
    };

    updateTime();
    setInterval(updateTime, 60000); // Update every minute
});
