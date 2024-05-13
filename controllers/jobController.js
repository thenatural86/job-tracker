import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'

// Get All Jobs
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(StatusCodes.OK).json({ jobs })
}

// Create Job
export const createJob = async (req, res) => {
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

// Get Single Job
export const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id)
  res.status(StatusCodes.OK).json({ job })
}

// Edit Job
export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(StatusCodes.OK).json({ job: updatedJob })
}

// Delete Job
export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id)
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob })
}
