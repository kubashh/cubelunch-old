export const directory = (path) => {
  return `/cubelunch/${path}`
}

export const changeWindowLocation = (path) => {
  window.location.pathname = directory(path)
}