var windowLoaded

window.addEventListener("load", () => {
  windowLoaded = true
  attemptLoaded()
})

document.getElementById("john")

function onPlayerReady(event) {
  console.log('player ready')
  playerLoaded = true
  attemptLoaded()
}

function onPlayerStateChange(event) {
  console.log('player state change', event.data)
}

function attemptLoaded() {
  if (windowLoaded) {loaded()}
}

function loaded() {
  document.body.className = document.body.className.replace(/loading/, "")
}
