## What you can do ##

You can upload any `.png/.jpg/.jpeg` image and it will be converted to **pixels**.

The result will be exported in the `pixels.json` file containing the **data array**.

The **data array** is a one-dimensional array representing the pixel data in the **RGBA** format.

Each pixel is represented by four consecutive elements in the array:
- The first element is the red component (0-255)
- The second element is the green component (0-255)
- The third element is the blue component (0-255)
- The fourth element is the alpha (transparency) component (0-255)

## How it works ##

This app uses **HTML Canvas** to render your image on the webpage in an invisible element; then the `getImageData()` method is used to extract the pixel data.

## Usage ##

- Access the [website](https://vladboj.github.io/image-pixels-exporter/)
- Upload the image
- Wait for the automatic download
