const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// set intervals for our method so that it can run for specified interval
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

