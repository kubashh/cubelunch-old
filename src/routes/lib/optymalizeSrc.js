const maxChars = 98000

const optymalizeImage = (image, callback) => {
  const canvas = document.createElement(`canvas`)
  canvas.width = image.width
  canvas.height = image.height

  const ctx = canvas.getContext(`2d`)
  ctx.drawImage(image, 0, 0, image.width, image.height)

  for (let i = 1; i > 0; i -= 0.02) {
    const newSrc = canvas.toDataURL("image/jpeg", i)

    if (newSrc.length < maxChars) {
      return callback(newSrc)
    }
  }
}

export const optymalizeSrc = (src, callback) => {
  const image = new Image()

  image.onload = () => {
    optymalizeImage(image, callback)
  }

  image.src = src
}
