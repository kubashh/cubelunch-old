import { Background } from "../lib/Background"
import { changeWindowLocation } from "../lib/direcroty"

export const NoPage = () => {
  window.addEventListener(`click`, () => {
    changeWindowLocation(``)
  })

  return (
    <div>
      <Background />
      <h1
        style={{
          fontSize: 100,
          textAlign: "center",
          marginTop: "25vh",
        }}
      >
        Nie ma takiej strony, kliknij gdziekolwiek aby przejdźć na stronę główną
      </h1>
    </div>
  )
}
