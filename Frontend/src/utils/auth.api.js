const URL_REGISTER_USER = 'http://localhost:3000/api/register'

export const registerUser = async user => {
  try {
    const response = await fetch(URL_REGISTER_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
