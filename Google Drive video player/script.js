const urlInput = document.getElementById('url');
const playButton = document.getElementById('play');
const playerDiv = document.getElementById('player');

playButton.addEventListener('click', () => {
  const url = urlInput.value;
  const fileId = extractFileIdFromUrl(url);
  const apiUrl = `(link unavailable);
  const player = new Plyr('#player', {
    sources: [{
      src: apiUrl,
      type: 'video/mp4'
    }]
  });
});

function extractFileIdFromUrl(url) {
  const startIndex = url.indexOf("/file/d/") + 9;
  const endIndex = url.indexOf("/view?usp=drive_link");
  return url.substring(startIndex, endIndex);
}
