import { Router } from 'express'
const router = Router()

import {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js'

import { validateJobInput } from '../middleware/validationMiddleware.js'

// router.get('/', getAllJobs)
// router.post('/', createJob)

router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router
  .route('/:id')
  .get(getSingleJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob)

export default router
