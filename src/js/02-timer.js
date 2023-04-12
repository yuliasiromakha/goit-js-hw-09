import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timer = document.querySelector('.timer');
const startButton = document.querySelector('button[data-start]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const selectedDate = selectedDates[0];

      if (selectedDate < Date.now()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        startButton.disabled = true;
        return;
      }else {
        startButton.disabled = false;
      }
    },
};

flatpickr("input#datetime-picker", options);

// function checkDate(selectedDate) {
//     if (selectedDate < new Date()) {  
//         startButton.disabled = true;
       
//     } else {
//         startButton.disabled = false;
//     }
// }

startButton.addEventListener('click', () => {

    const selectedDate = new Date(document.querySelector('input#datetime-picker').value);

    setInterval( () => {
        const currentTime = Date.now();
        const remainingTime = selectedDate - currentTime; 
        const { days, hours, minutes, seconds } = convertMs(remainingTime)

        
        if (remainingTime > 0) {
            updateClockFace({ days, hours, minutes, seconds })
            document.querySelector('input[id="datetime-picker"]').disabled = true;
            startButton.disabled = true;
        } else {
            updateClockFace({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        }

    }, 1000);
})

function updateClockFace( { days, hours, minutes, seconds } ) {
    timer.textContent =  `${days} ${hours} ${minutes} ${seconds}`
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
}