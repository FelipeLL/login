import jwt from 'jsonwebtoken'

export const getAccessToken = id => {
  return jwt.sign(id, 'secretKey', {
    expiresIn: '1d'
  })
}

export const verifyAccessToken = token => {
  return jwt.verify(token, 'secretKey')
}
