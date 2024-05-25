new Swiper('.swiper' , {
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
})

function updateTime() {
    const span = document.querySelector('.hour');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    span.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateDate() {
    const dateSpans = document.querySelectorAll('.date');
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const formattedDate = `SONO REM - ${day}/${month}`;
    
    dateSpans.forEach(span => {
        span.textContent = formattedDate;
    });
}

updateTime();
updateDate();

setInterval(updateTime, 1000);

const now = new Date();
const millisUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;
setTimeout(() => {
    updateDate();
    setInterval(updateDate, 24 * 60 * 60 * 1000);
}, millisUntilMidnight);

