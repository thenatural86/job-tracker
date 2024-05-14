import { StatusCodes } from 'http-status-codes'
import { hashPassword } from '../utils/passwordUtils.js'

import User from '../models/UserModel.js'

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0
  req.body.role = isFirstAccount ? 'admin' : 'user'

  const hashedPassword = await hashPassword(req.body.password)
  req.body.password = hashedPassword

  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ user })
}

export const login = async (req, res) => {
  res.send('login')
}
