//Getting HTML element

const submitBtn = document.querySelector('#submit');

let rating =  document.querySelectorAll('.rating');

let result = document.querySelector('.result');

let writeUp = document.querySelector('.texting')

let feedback = document.querySelector('.feedback')

rating.forEach((rate) => {
  rate.addEventListener('click', (e) => {
    let rated = e.target.innerText;

    if (rated == 1) {
      result.innerText = '';
      writeUp.innerText = "Service will be improve";
    }

    if (rated == 2) {
      result.innerText = ' ';
      writeUp.innerText = "Yey, Great!";
    }

    if (rated == 3) {
      result.innerText = '  ';
      writeUp.innerText = "Wow, Awesome!";
    }

    if (rated == 4) {
      result.innerText = '   ';
      writeUp.innerText = "You're wonderful too!";
    }

    if (rated == 5) {
      result.innerText = '    ';
      writeUp.innerText = "We Love You Too!";
    }

    feedback.classList.toggle('display')
  });
});

submitBtn.addEventListener('click', _ => {
  document.body.classList.add('show')
});


// rate.style.color = 'white';
// rate.style.backgroundColor = 'hsl(216, 12%, 54%)';