import { readFile } from 'fs/promises'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import Job from './models/JobModel'
import User from './models/UserModel'
