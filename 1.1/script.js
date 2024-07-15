const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

generateBtn.addEventListener("click", () => {
  const baseUrl = "https://plyr.0-0-0.click/download.html?id=";
  const userInput = urlInput.value;
  const finalUrl = baseUrl + encodeURIComponent(userInput);

  resultDiv.innerHTML = `<a href="${finalUrl}" target="_blank">${finalUrl}</a>`;
});
