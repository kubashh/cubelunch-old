export const imgToSrc = (image, callback) => {
  const newImage = new Image()
  newImage.src = image.src

  const reader = new FileReader()

  reader.onload = () => {
    const src = reader.result
    callback(src)
  }

  reader.readAsDataURL(image)
}
