export const post = async (path, dataToSend = {}) => {
  const response = await fetch(`/api/${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Cookie: document.cookie,
    },
    body: JSON.stringify(dataToSend),
  })

  if (!response.ok) {
    console.error(`nie udało się połączyć z serwerem. response: ${response}`)

    return null
  }

  const data = await response.json()

  return data
}
