import UserModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { getAccessToken } from '../libs/jwt.js'

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body

    const userFound = await UserModel.findOne({ email })

    if (userFound) {
      return res.status(400).json({ message: ['Email already exists'] })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({
      username,
      email,
      password: hashPassword
    })

    const userSaved = await newUser.save()

    const token = getAccessToken({
      id: userSaved._id
    })

    const userObject = userSaved.toObject()
    delete userObject.password

    res.json({
      user: userObject,
      token
    })
  } catch (error) {
    console.log(error)
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const userFound = await UserModel.findOne({ email })

    if (!userFound) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatchPassword = await bcrypt.compare(password, userFound.password)

    if (!isMatchPassword) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = getAccessToken({
      id: userFound._id
    })

    const userObject = userFound.toObject()
    delete userObject.password

    res.json({
      user: userObject,
      token
    })
  } catch (error) {
    console.log(error)
  }
}
