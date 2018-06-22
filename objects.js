var playlist = {artist: "Hey", song: "whats up"};

function updatePlayList (playlist, artistName,msongTitle) {
  return playlist.assign({}, {artistName: ""},{songTitle: ""});
}