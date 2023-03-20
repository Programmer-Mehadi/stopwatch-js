const seeFullScreenBtn = document.getElementById('see_fullscreen');
const exitFullScreenBtn = document.getElementById('exit_fullscreen');
const startBtn = document.getElementById('start_btn');
const resetBtn = document.getElementById('reset_btn');
const pauseBtn = document.getElementById('pause_btn');
const timeContent = document.getElementById('time_content');

exitFullScreenBtn.style.display = 'none';

seeFullScreenBtn.addEventListener('click', () => {
    const stopwatch_body = document.getElementById('stopwatch_body');
    if (stopwatch_body.requestFullscreen) {
        stopwatch_body.requestFullscreen();
      } else if (stopwatch_body.webkitRequestFullscreen) { /* Safari */
        stopwatch_body.webkitRequestFullscreen();
      } else if (stopwatch_body.msRequestFullscreen) { /* IE11 */
        stopwatch_body.msRequestFullscreen();
    }
    stopwatch_body.style.height = '100vh';
    document.getElementsByClassName('content')[0].style.flexGrow = '1';
    seeFullScreenBtn.style.display = 'none'
    exitFullScreenBtn.style.display = 'block';
})
exitFullScreenBtn.addEventListener('click', () => {
    const stopwatch_body = document.getElementById('stopwatch_body');
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    stopwatch_body.style.height = 'fit-content';
    document.getElementsByClassName('content')[0].style.flexGrow = '1';
    seeFullScreenBtn.style.display = 'block'
    exitFullScreenBtn.style.display = 'none';
})

let totalSeconds = 0;

const setTime = (seconds) => {
    const hours = Math.floor(seconds/3600)
    const minutes = Math.floor(((seconds-hours*60)/60))
    const thisSeconds  = seconds - minutes * 60 ;
    timeContent.innerHTML = `
    <div>
            <span class="big_text" id="hours_field">${hours}</span>
            <span class="small_text">h</span>
          </div>
          <div>
            <span class="big_text" id="minutes_field">${minutes}</span>
            <span class="small_text">m</span>
          </div>
          <div>
            <span class="big_text" id="seconds_field">${thisSeconds}</span>
            <span class="small_text">s</span>
          </div>
    `
}

startBtn.addEventListener('click', () => {
    timeTravel = setInterval(() => {
        totalSeconds += 1;
        setTime(totalSeconds)
    }, 1000)
})
resetBtn.addEventListener('click', () => {
    clearInterval(timeTravel);
    totalSeconds = 0;
    timeContent.innerHTML = `
    <div>
            <span class="big_text" id="hours_field">0</span>
            <span class="small_text">h</span>
          </div>
          <div>
            <span class="big_text" id="minutes_field">0</span>
            <span class="small_text">m</span>
          </div>
          <div>
            <span class="big_text" id="seconds_field">0</span>
            <span class="small_text">s</span>
          </div>
    `
})
pauseBtn.addEventListener('click', () => {
    clearInterval(timeTravel);
})

    