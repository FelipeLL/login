import jwt from 'jsonwebtoken'

export const getAccessToken = id => {
  return jwt.sign(id, 'secretKey', {
    expiresIn: '1d'
  })
}
