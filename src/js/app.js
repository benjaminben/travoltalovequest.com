init()

function init() {
  const support = checkSupport()
  if (!support.mp4) {useGif()}
  window.addEventListener("load", () => {
    loaded()
  })
}

function onPlayerStateChange(event) {
  console.log('player state change', event.data)
}

function loaded() {
  document.body.className = document.body.className.replace(/loading/, "")
}

function useGif() {
  document.querySelector("img.fire").className += " active"
  document.querySelector("video.fire").className += " none"
}

function checkSupport() {
  var support = {}
  var v = document.createElement('video');
  if(v.canPlayType && v.canPlayType('video/mp4').replace(/no/, '')) {
      support.mp4 = true;
  }
  return support
}

//LEGACY
function onPlayerReady(event) {
  console.log('player ready')
  playerLoaded = true
  attemptLoaded()
}

function attemptLoaded(win, player) {
  if (win && player) {loaded()}
}
