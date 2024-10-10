import { post } from "../lib/post"
import { Product } from "./Product"

const products = await post("products/get")

export const Products = () => {
  const productsElement = []

  for(const product of products) {
    const { name, cost, img, src, category, id } = product
    productsElement.push(<Product
      name={name}
      cost={cost}
      img={img}
      src={src}
      category={category}
      id={id}
      key={id}
    />)
  }

  return (
    <div
      style={{
        padding: 20
      }}
    >
      {productsElement}
    </div>
  )
}