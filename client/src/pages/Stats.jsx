import React from 'react'
import { ChartsContainer, StatsContainer } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export const loader = async () => {
  return null
  const response = await customFetch.get('/jobs/stats')
  return response.data
}

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData()

  const { isLoading, isError, data } = useQuery({
    queryKey: ['stats'],
    queryFn: () => customFetch.get('/jobs/stats'),
  })
  if (isLoading) return <h4>Loading...</h4>
  if (isError) return <h4>Error...</h4>
  console.log(data?.data)
  const { monthlyApplications, defaultStats } = data?.data
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  )
}

export default Stats
