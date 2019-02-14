function makePlayerFromId(id, readyCb, stateCb) {
  const player = new YT.Player("yt", {
    height: '100%',
    width: '100%',
    videoId: id,
    events: {
      'onReady': readyCb,
      'onStateChange': stateCb,
    }
  })
  return player
}


export {
  makePlayerFromId
}
