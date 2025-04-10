const config = {
  pixelSquarePerImage: 120,
  scale: {
    min: 0.1,
    max: 3,
  },
}

const Element = () => {
  return (
    <img
      src="/images/cubeLunchLogo.png"
      alt="cubeLunchLogo"
      style={{
        position: "absolute",
        top: randHeight(),
        left: randWidth(),
        zIndex: -3,
        transform: `translate(-50%, -50%) rotate(${randDeg()}deg) scale(${randScale()})`,
        opacity: Math.random(),
      }}
    />
  )
}

const randScale = () => {
  const { scale } = config
  const { min, max } = scale
  return min + Math.random() * (max - min)
}

const randIndex = (max) => {
  return Math.round(Math.random() * max)
}

const randDeg = () => {
  return randIndex(360)
}

const randWidth = () => {
  return randIndex(window.innerWidth)
}

const randHeight = () => {
  return randIndex(window.innerHeight)
}

export const Background = () => {
  window.addEventListener("resize", () => {
    window.location.reload()
  })

  const elements = []

  const x =
    (window.innerWidth * window.innerHeight) / config.pixelSquarePerImage ** 2

  for (let i = 0; i < x; i++) {
    elements.push(<Element key={i} />)
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -3,
      }}
    >
      {elements.map((element) => element)}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: -2,
        }}
      ></div>
    </div>
  )
}
