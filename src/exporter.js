// Converts a pixel array to a JSON string
function pixelArrayToJson(pixelArray) {
  return JSON.stringify(Array.from(pixelArray));
}

// Creates a Blob from a JSON string
function createJsonBlob(jsonString) {
  return new Blob([jsonString], { type: "application/json" });
}

// Creates a download link and triggers the download
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url); // Clean up to avoid memory leaks
}

// Main function to export pixel array as JSON
export function exportPixelsJson(pixelArray) {
  const jsonPixelArray = pixelArrayToJson(pixelArray);
  const jsonBlob = createJsonBlob(jsonPixelArray);
  triggerDownload(jsonBlob, "pixels.json");
}
