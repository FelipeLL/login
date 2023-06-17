const URL_REGISTER_USER = 'http://localhost:3000/api/register'
const URL_LOGIN = 'http://localhost:3000/api/login'
const URL_VERIFY_TOKEN = 'http://localhost:3000/api/verify-token'

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

export const verifyToken = async token => {
  try {
    if (!token) {
      throw new Error('Token not found')
    }

    const response = await fetch(URL_VERIFY_TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
