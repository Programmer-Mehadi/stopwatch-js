const seeFullScreenBtn = document.getElementById('see_fullscreen');
const exitFullScreenBtn = document.getElementById('exit_fullscreen');

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