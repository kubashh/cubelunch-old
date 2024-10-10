import { useEffect, useState } from "react"
import { Product } from "./Product"
import { post } from "../lib/post"

export const Products = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    post(`products/get`)
    .then(data => {
      setProducts(data)
    })
  }, [])

  const [category, setCategory] = useState("")

  if(!products) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const productsElement = []
  const categoryOptions = []

  for(const product of products) {
    const { name, category, cost, src, id } = product
    productsElement.push(<Product
      name={name}
      category={category}
      cost={cost}
      src={src}
      id={id}
      key={id}
    />)

    if(!categoryOptions.includes(category)) {
      categoryOptions.push(category)
    }
  }

  const showCategories = (category) => {
    const newProducts = []

    for(const product of productsElement) {
      const { props } = product
      if(props.category === category) {
        newProducts.push(product)
      }
    }

    return newProducts
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        overflowY: 'scroll',
        width: "100vw"
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 20
        }}
      >
        <select
          style={{
            border: 0,
            borderRadius: 6,
            padding: "6px 12px",
            fontSize: 20,
            backgroundColor: "#333",
            color: "white"
          }}
          onChange={(event) => {
            event.preventDefault()
            setCategory(event.target.value)
          }}
        >
          <option value="">Wszystkie</option>
          {categoryOptions.map((categoryValue) =>  {
            return (
              <option
                value={categoryValue}
                key={categoryValue}
              >
                {categoryValue}
              </option>
            )
          })}
        </select>
      </div>
      {!categoryOptions.includes(category) ? productsElement : showCategories(category)}
    </div>
  )
}