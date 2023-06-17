import jwt from 'jsonwebtoken'

export const validateToken = (req, res, next) => {
  const cookies = req.cookies
  const { token } = cookies

  if (!token) {
    return res.status(403).json({
      message: 'Unauthorized'
    })
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Invalid token'
      })
    }

    req.user = decoded.id

    next()
  })
}
