// Replace with your Google Drive video file ID
const videoFileId = 'YOUR_VIDEO_FILE_ID';

// Retrieve video file and audio tracks from Google Drive API
fetch(`(link unavailable))
  .then(response => response.json())
  .then(data => {
    const videoUrl = data.webContentLink;
    const audioTracks = data.audioTracks;

    // Play video
    const video = document.getElementById('video');
    video.src = videoUrl;

    // Add audio track options to select element
    const audioTracksSelect = document.getElementById('audio-tracks');
    audioTracks.forEach((track) => {
      const option = document.createElement('option');
      option.value = track.languageCode;
      option.text = track.name;
      audioTracksSelect.appendChild(option);
    });

    // Switch audio tracks on select change
    audioTracksSelect.addEventListener('change', (e) => {
      const selectedTrack = e.target.value;
      video.audioTracks[selectedTrack].enabled = true;
    });
  });

