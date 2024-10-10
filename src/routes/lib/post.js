export const post = async (path, dataToSend = {}) => {
  const response = await fetch(`/api/${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Cookie: document.cookie
    },
    body: JSON.stringify(dataToSend)
  })

  console.error(response)

  if(!response) {
    console.error(`nie udało się połączyć z serwerem`)

    return null
  }

  const data = await response.json()

  return data
}