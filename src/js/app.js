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
}

window.addEventListener("load", () => {
  windowLoaded = true
  attemptLoaded()
})

document.getElementById("john")
john.addEventListener("click", () => player.playVideo())

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
