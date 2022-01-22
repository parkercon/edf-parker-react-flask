import React, {useState, useEffect} from 'react'
import {
  useParams
} from 'react-router-dom'

export const Report = () => {
  const { id } = useParams()
  const [report, setReport] = useState([])
  console.log(id)
  useEffect(() => {
    fetch(`/api/${id}`)
    .then(response => response.json())
    .then(data => setReport(data))
  }, [id])

  return (
    <div>
      <div>{report.IncidentAddress}</div>
      <div>{report.IncidentCity}</div>
      <div>{report.IncidentZipcode}</div>
      <div>{report.IncidentCounty}</div>
      <div>{report.IncidentState}</div>
      <div>{report.IncidentDescription}</div>
      <div>{report.IncidentSource}</div>
      <div>{report.IncidentStatus}</div>
      <div>{report.SourceName}</div>
      <div>{report.OtherDetails}</div>
    </div>
  )
}
