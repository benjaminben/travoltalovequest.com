function makePlayerFromId(id) {
  const player = new YT.Player("yt", {
    height: '100%',
    width: '100%',
    videoId: id,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  })
  return player
}

function onPlayerReady(event) {
  console.log('player ready')
}

function onPlayerStateChange(event) {
  console.log('player state change', event.data)
}

export {
  makePlayerFromId
}
