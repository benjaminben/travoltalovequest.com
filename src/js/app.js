import {makePlayerFromId} from './yt'

var tag = document.createElement('script'),
    vidId = "CBc9uL4n6S0",
    player,
    playerLoaded,
    windowLoaded

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

window.onYouTubeIframeAPIReady = () => {
  player = makePlayerFromId(vidId, onPlayerReady, onPlayerStateChange)
  document.addEventListener("webkitfullscreenchange", handleFullScreen)
}

window.addEventListener("load", () => {
  windowLoaded = true
  attemptLoaded()
})

document.getElementById("john")
john.addEventListener("click", () => player.playVideo())

function handleFullScreen(e) {
  if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
    document.body.className = document.body.className + " fullscreen"
  } else {
    document.body.className = document.body.className.replace(/ fullscreen/, "")
  }
}

function onPlayerReady(event) {
  console.log('player ready')
  playerLoaded = true
  attemptLoaded()
}

function onPlayerStateChange(event) {
  console.log('player state change', event.data)
}

function attemptLoaded() {
  if (playerLoaded && windowLoaded) {
    loaded()
  }
}

function loaded() {
  document.body.className = document.body.className.replace(/loading/, "")
}
