const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
//   const resultsi = document.querySelector('#resultsi');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
    // resultsi.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
    // resultsi.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // to fixed 2 upto 2 decimal place
    //show the result
    results.innerHTML = `<span>${bmi}</span></br> `;
    
    // resultsi.innerHTML = `<span>${bmi}</span>`;
  }
});

