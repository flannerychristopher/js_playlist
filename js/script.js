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
  songHTML += '<span class="duration"> ' + this.duration + '</span></li>';
  return songHTML;
};

function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};
Playlist.prototype.play = function() {
  let currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};
Playlist.prototype.stop = function() {
  let currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};
Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
};
Playlist.prototype.render = function(list) {
  list.innerHTML = '';
  for(i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }
};

const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const nextButton = document.getElementById('next');
playButton.onclick = function() {
  playList.play();
  playList.render(listElement);
}
stopButton.onclick = function() {
  playList.stop();
  playList.render(listElement);
}
nextButton.onclick = function() {
  playList.next();
  playList.render(listElement);
}

const listElement = document.getElementById('playList');
const playList = new Playlist();
const song1 = new Song("Hey Ya", "Outkast", "3:01");
const song2 = new Song("Me and My Girlfriend", "2pac", "2:55");
const song3 = new Song("Hotel California", "Eagles", "4:35");
playList.add(song1);
playList.add(song2);
playList.add(song3);
playList.render(listElement);
