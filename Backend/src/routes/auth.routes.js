import { Router } from 'express'
import { login, signup, verifyToken } from '../controllers/auth.controller.js'
import { validateSchema } from '../middlewares/validator.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/register', validateSchema(registerSchema), signup)
router.post('/login', validateSchema(loginSchema), login)
router.post('/verify-token', verifyToken)

export default router
