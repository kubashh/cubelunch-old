import { useState } from "react"
import { post } from "../lib/post"
import { configureImage } from "../lib/configureImage"

export const Product = ({ name, cost, src, category, id }) => {
  const [form, setForm] = useState({
    id: id,
    name: name,
    cost: cost,
    src: src,
    category: category
  })

  const isEdit = () => {
    return form.name !== name || form.cost !== cost || form.category !== category || form.src !== src
  }

  const inputStyle = {
    border: 0,
    borderRadius: 12,
    backgroundColor: "#333",
    padding: "6px 12px",
    fontSize: 20
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0"
      }}
    >
      <input
        type="text"
        value={form.name}
        style={inputStyle}
        onChange={(event) => {
          setForm({
            ...form,
            name: event.target.value
          })
        }}
      />
      <input
        type="text"
        value={form.category}
        style={inputStyle}
        onChange={(event) => {
          setForm({
            ...form,
            category: event.target.value
          })
        }}
      />
      <input
        type="text"
        value={form.cost}
        style={inputStyle}
        onChange={(event) => {
          setForm({
            ...form,
            cost: event.target.value
          })
        }}
      />
      <div
        style={{
          ...inputStyle,
          padding: 0,
          display: "flex",
          alignItems: "center",
          height: 40
        }}
      >
        <img
          src={form.src}
          alt="obraz"
          id={`img${id}`}
          height="100%"
          style={{
            ...inputStyle,
            padding: 0,
            borderRadius: "10px 0 0 10px",
            marginRight: 10
          }}
        />
        <input
          type="file"
          style={{
            ...inputStyle,
            padding: 0
          }}
          onChange={(event) => {
            configureImage(event.target.files[0], form, setForm)
          }}
        />
      </div>
      <input
        type="button"
        value="Zapisz"
        style={{
          ...inputStyle,
          backgroundColor: "black",
          color: !isEdit() && "gray",
          cursor: !isEdit() && "default"
        }}
        onClick={async (event) => {
          event.preventDefault()
          if(isEdit()) {
            const response = await post("products/edit", {
              product: form
            })

            if(response.success) {
              document.location.reload()
            }
          }
        }}
      />
      <input
        type="button"
        value="Usuń"
        style={{
          ...inputStyle,
          backgroundColor: "black"
        }}
        onClick={async (event) => {
          event.preventDefault()
          const response = await post("products/remove", {
            product: {
              id: id
            }
          })

          if(response.success) {
            document.location.reload()
          }
        }}
      />
    </div>
  )
}