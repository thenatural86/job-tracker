import 'express-async-errors'

import { nanoid } from 'nanoid'
import Job from '../models/JobModel.js'

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },

  { id: nanoid(), company: 'google', position: 'back-end' },
]

// Get All Jobs
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({ jobs })
}

// Create Job
export const createJob = async (req, res) => {
  const job = await Job.create(req.body)
  res.status(201).json({ job })
}

// Get Single Job
export const getSingleJob = async (req, res) => {
  const { id } = req.params
  const job = await Job.findById(id)

  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` })
  }
  res.status(200).json({ job })
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

  res.status(200).json({ job: updatedJob })
}

// Delete Job
export const deleteJob = async (req, res) => {
  const { id } = req.params
  const removedJob = await Job.findByIdAndDelete(id)

  if (!removedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` })
  }

  res.status(200).json({ job: removedJob })
}
