import {makePlayerFromId} from './yt'

var tag = document.createElement('script'),
    vidId = "CBc9uL4n6S0",
    player

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

window.onYouTubeIframeAPIReady = () => {
  player = makePlayerFromId(vidId)
}

document.getElementById("john")
john.addEventListener("click", () => player.playVideo())
