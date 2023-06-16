const URL_REGISTER_USER = 'http://localhost:3000/api/register'
const URL_LOGIN = 'http://localhost:3000/api/login'

export const registerUser = async user => {
  const response = await fetch(URL_REGISTER_USER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message[0])
  }

  return await response.json()
}

export const loginUser = async credentials => {
  const response = await fetch(URL_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return await response.json()
}
