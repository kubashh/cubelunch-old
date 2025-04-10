import { imgToSrc } from "./imgToSrc"
import { resizeScrImage } from "./resizeScrImage"
import { optymalizeSrc } from "./optymalizeSrc"

export const configureImage = (image, form, setForm) => {
  imgToSrc(image, (src) => {
    resizeScrImage(src, 400, (src) => {
      console.log(`Before: ${src.length}`)
      optymalizeSrc(src, (src) => {
        console.log(`After: ${src.length}`)
        setForm({
          ...form,
          src: src,
        })
      })
    })
  })
}
