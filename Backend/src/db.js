import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/auth')
    console.log('DB connected')
  } catch (error) {
    console.log(error)
  }
}
