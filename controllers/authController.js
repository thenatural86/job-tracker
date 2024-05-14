import { StatusCodes } from 'http-status-codes'
import { hashPassword, comparePassword } from '../utils/passwordUtils.js'
import { createJWT } from '../utils/tokenUtils.js'

import User from '../models/UserModel.js'
import { UnauthenticatedError } from '../errors/customErrors.js'

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0
  req.body.role = isFirstAccount ? 'admin' : 'user'

  const hashedPassword = await hashPassword(req.body.password)
  req.body.password = hashedPassword

  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ user })
}

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password))

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials')

  const token = createJWT({
    userId: user._id,
    role: user.role,
  })
  console.log(token)

  res.json({ token })
}
