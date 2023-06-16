import UserModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { getAccessToken } from '../libs/jwt.js'

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body

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
    res.cookie('token', token)
    res.json(userSaved)
    //res.json(userSaved)
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

    res.cookie('token', token)
    res.json(userFound)
  } catch (error) {
    console.log(error)
  }
}

export const logout = async (req, res) => {
  res.cookie('token', '')
  res.json({ message: 'Logout successfully' })
}
