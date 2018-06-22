var playlist = {artist: "Hey", song: "whats up"};

function updatePlayList (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { ['artistName']: 'songTitle'});
}