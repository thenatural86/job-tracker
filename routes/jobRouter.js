import { Router } from 'express'
const router = Router()

import {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js'
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js'
import { checkForTestUser } from '../middleware/authMiddleware.js'

checkForTestUser
// router.get('/', getAllJobs)
// router.post('/', createJob)

router
  .route('/')
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob)
router
  .route('/:id')
  .get(validateIdParam, validateIdParam, getSingleJob)
  .patch(checkForTestUser, validateJobInput, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob)

export default router
