export async function processImage() {
  const imageInput = document.getElementById("image-input");
  const file = await waitForFileSelection(imageInput);
  const dataUrl = await readFileAsDataURL(file);
  const img = await loadImage(dataUrl);
  const pixelData = await drawImageOnCanvasAndGetPixelData(img);
  return pixelData;
}

function waitForFileSelection(imageInput) {
  return new Promise((resolve) => {
    imageInput.addEventListener(
      "change",
      (event) => {
        resolve(event.target.files[0]);
      },
      { once: true }
    );
  });
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (error) => reject(error);
    img.src = src;
  });
}

function drawImageOnCanvasAndGetPixelData(img) {
  const canvas = document.getElementById("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
}
