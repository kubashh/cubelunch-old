import { Background } from "../lib/Background"

export const NoPage = () => {
  window.addEventListener(`click`, () => {
    window.location.pathname = "/"
  })

  return (
    <div>
      <Background />
      <h1
        style={{
          fontSize: 100,
          textAlign: "center",
          marginTop: "25vh" 
        }}
      >
        Nie ma takiej strony, kliknij gdziekolwiek aby przejdźć na stronę główną
      </h1>
    </div>
  )
}