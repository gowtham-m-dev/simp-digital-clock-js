function showTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(hours, minutes, seconds); //* 16 19 46
  let session = "AM";
  if (hours > 12) {
    hours -= 12;
    session = "PM";
  }

  // ! Ternary opearator condition ? true : false
  console.log(hours, minutes, seconds, session); //* 4 20 24 'PM'
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerText = time;
  // setTimeout(showTime, 1000);
}

showTime();

setInterval(showTime, 1000);
