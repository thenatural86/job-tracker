import 'express-async-errors'

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
  const { id } = req.params
  const job = await Job.findById(id)

  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` })
  }
  res.status(StatusCodes.OK).json({ job })
}

// Edit Job
export const updateJob = async (req, res) => {
  const { id } = req.params
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  })

  if (!updatedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` })
  }

  res.status(StatusCodes.OK).json({ job: updatedJob })
}

// Delete Job
export const deleteJob = async (req, res) => {
  const { id } = req.params
  const removedJob = await Job.findByIdAndDelete(id)

  if (!removedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` })
  }

  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob })
}
