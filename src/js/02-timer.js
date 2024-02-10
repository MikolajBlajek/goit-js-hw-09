import flatpickr from "flatpickr"; 
import "flatpickr/dist/flatpickr.min.css"; 
import Notiflix from "notiflix"; 

const startButton = document.querySelector('[data-start]'); 
const dataDays = document.querySelector('[data-days]');  
const dataHours = document.querySelector('[data-hours]'); 
const dataMinutes = document.querySelector('[data-minutes]'); 
const dataSeconds = document.querySelector('[data-seconds]'); 

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const today = new Date();

    if (selectedDate < today) {
      Notiflix.Notify.failure('Please choose a date from the future!');
      startButton.setAttribute('disabled', true);
      startButton.style.cursor = 'default';
    } else {
      startButton.removeAttribute('disabled');
    }

    startButton.addEventListener('click', e => {
      startButton.setAttribute('disabled', true);

      const timerId = setInterval(() => {
        const nowDate = new Date();
        const timeDif = selectedDate - nowDate;
        if (timeDif <= 0) {
          clearInterval(timerId);
          return;
        }
        const convert = convertMs(timeDif);
        dataDays.textContent = addLeadingZero(convert.days);
        dataHours.textContent = addLeadingZero(convert.hours);
        dataMinutes.textContent = addLeadingZero(convert.minutes);
        dataSeconds.textContent = addLeadingZero(convert.seconds);
      }, 1000);
    });
  },
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}