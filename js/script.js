function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};
Song.prototype.stop = function() {
  this.isPlaying = false;
};
Song.prototype.toHTML = function() {
  let songHTML = '<li';
  if (this.isPlaying) {
    songHTML += ' class="playing"';
  }
  songHTML += '>' + this.title + ' - ' + this.artist;
  songHTML += '<span class="duration">' + this.duration + '</span></li>';
};


function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}
