import { processImage } from "./imageProcessor.js";
import { exportPixelsJson } from "./exporter.js";

processImage()
  .then((pixelData) => {
    exportPixelsJson(pixelData);
  })
  .catch((error) => console.log(error));
