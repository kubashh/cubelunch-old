export const directory = (path) => {
  return `/cubelunch-old/${path}`
}

export const changeWindowLocation = (path) => {
  window.location.pathname = directory(path)
}
