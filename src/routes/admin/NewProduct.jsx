import { useState } from "react"
import { configureImage } from "../lib/configureImage"
import { post } from "../lib/post"

export const NewProduct = () => {
  const [form, setForm] = useState({
    name: "",
    cost: "",
    src: "/images/defaultImage.png",
    category: "",
  })

  const inputStyle = {
    marginTop: 20,
    border: 0,
    borderRadius: 10,
    padding: "6px 12px",
    fontSize: 20,
  }

  return (
    <div
      style={{
        margin: "48px 12px 12px 12px",
        borderRadius: 20,
        backgroundColor: "#333",
        display: "grid",
        gridTemplateColumns: "1fr 400px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 16,
        }}
      >
        <div
          style={{
            fontSize: 50,
          }}
        >
          Nowy Produkt
        </div>
        <input
          type="text"
          placeholder="Nazwa"
          value={form.name}
          style={inputStyle}
          onChange={(event) => {
            setForm({
              ...form,
              name: event.target.value,
            })
          }}
        />
        <input
          type="text"
          placeholder="Kategoria"
          value={form.category}
          style={inputStyle}
          onChange={(event) => {
            setForm({
              ...form,
              category: event.target.value,
            })
          }}
        />
        <input
          type="text"
          placeholder="Cena"
          value={form.cost}
          style={inputStyle}
          onChange={(event) => {
            setForm({
              ...form,
              cost: event.target.value,
            })
          }}
        />
        <input
          type="file"
          style={inputStyle}
          onChange={(event) => {
            configureImage(event.target.files[0], form, setForm)
          }}
        />
        <input
          type="button"
          value="Dodaj"
          style={inputStyle}
          onClick={async (event) => {
            event.preventDefault()
            await post("products/add", {
              product: form,
            })

            document.location.reload()
          }}
        />
      </div>
      <img
        src={form.src}
        height="100%"
        alt="obraz"
        id="imageOutput"
        style={{
          borderRadius: "0 10px 10px 0",
        }}
      />
    </div>
  )
}
