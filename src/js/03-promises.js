import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

function onSubmitForm(event) {
  event.preventDefault();
  
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);

  if (!delay || !step || amount === undefined) {
    Notiflix.Notify.warning('Please fill in all fields');
    return;
  }

  const inputs = event.target.querySelectorAll('input');
  const submitBtn = event.target.querySelector('button');
  inputs.forEach(input => input.disabled = true);
  submitBtn.disabled = true;

  // Create promises
  const promises = [];
  for (let i = 1; i <= amount; i++) {
    const position = i;
    const currentDelay = delay + (i - 1) * step;
    const promise = createPromise(position, currentDelay);
    promises.push(promise);
  }

  event.target.reset();

  Promise.allSettled(promises).then(() => {
    const interval = setInterval(() => {
      if (Notiflix.Notify) return;
      clearInterval(interval);
      inputs.forEach(input => input.disabled = false);
      submitBtn.disabled = false;
    }, 100);
  });

  promises.forEach(promise => {
    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  });
}

form.addEventListener('submit', onSubmitForm);