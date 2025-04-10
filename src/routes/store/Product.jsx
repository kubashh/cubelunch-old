import { post } from "../lib/post"

export const Product = ({ name, cost, src, category, id }) => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "#222",
        margin: 32,
        borderRadius: 32,
        display: "grid",
        gridTemplateRows: "30px 1fr 30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 20,
            margin: 16,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 20,
            margin: 16,
          }}
        >
          {cost}
        </div>
      </div>
      <div
        style={{
          justifySelf: "center",
          alignSelf: "center",
          width: 200,
          height: 200,
        }}
      >
        <img src={src} alt="Obraz" width={200} height={200} style={{}} />
      </div>
      <div>
        <input
          type="button"
          value="Kup"
          style={{
            border: 0,
            borderRadius: "0 0 20px 20px",
            padding: "8px 16px",
            width: "100%",
            fontSize: 20,
            background: "linear-gradient(90deg, #00d, #d00)",
          }}
          onClick={async (event) => {
            event.preventDefault()

            const response = await post(`user/buyProduct`, {
              productId: id,
            })

            if (response.success) {
              window.location.reload()
            }
          }}
        />
      </div>
    </div>
  )
}
