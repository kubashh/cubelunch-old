export const resizeScrImage = (src, newSize, callback) => {
  const canvas = document.createElement(`canvas`)
  canvas.width = newSize
  canvas.height = newSize
  const ctx = canvas.getContext(`2d`)

  const image = new Image()

  image.onload = () => {
    let width = image.width
    let height = image.height

    const aspectRatio = width / height

    let x = 0
    let y = 0

    let newWidth = newSize
    let newHeight = newSize

    if (width > height) {
      newWidth *= aspectRatio
    } else {
      newHeight *= aspectRatio
    }

    if (width > height) {
      x = (newSize - newWidth) / 2
    } else {
      y = (newSize - newHeight) / 2
    }

    console.log(x, y)

    ctx.drawImage(image, 0, 0, width, height, x, y, newWidth, newHeight)
    const newSrc = canvas.toDataURL()

    callback(newSrc)
  }

  image.src = src
}
