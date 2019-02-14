import {makePlayerFromId} from './yt'

var tag = document.createElement('script'),
    vidId = "CBc9uL4n6S0",
    player

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

window.onYouTubeIframeAPIReady = () => {
  player = makePlayerFromId(vidId, onPlayerReady, onPlayerStateChange)
}

document.getElementById("john")
john.addEventListener("click", () => player.playVideo())

function onPlayerReady(event) {
  console.log('player ready')
  // document.querySelector("#vid").className += " ready"
  loaded()
}

function onPlayerStateChange(event) {
  console.log('player state change', event.data)
}

function loaded() {
  document.body.className = document.body.className.replace(/loading/, "")
}
