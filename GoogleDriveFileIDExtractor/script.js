const urlInput = document.getElementById("url");
const extractButton = document.getElementById("extract");
const resultDiv = document.getElementById("result");

extractButton.addEventListener("click", () => {
  const url = urlInput.value;
  const startIndex = url.indexOf("/file/d/") + 8;
  const endIndex = url.indexOf("/view?usp=drive_link");
  const fileId = url.substring(startIndex, endIndex);
  resultDiv.innerText = `File ID: ${fileId}`;
});
