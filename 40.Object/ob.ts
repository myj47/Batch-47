function makeAlbum(artistName: string, albumTitle: string, tracks?: number): {
  artistName: string;
  albumTitle: string;
  tracks: number;
} {
  const album = { artistName, albumTitle };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}
const album1 = makeAlbum('The Beatles', 'Rubber Soul');
const album2 = makeAlbum('Pink Floyd', 'The Dark Side of the Moon', 11);
const album3 = makeAlbum('The Eagles', 'Hotel California', 12);
console.log(album1);
console.log(album2);
console.log(album3);
const album4 = makeAlbum('Fleetwood Mac', 'Rumours', 14);
const thrillerAlbum = makeAlbum('Michael Jackson', 'Thriller', 9);
console.log(thrillerAlbum);

