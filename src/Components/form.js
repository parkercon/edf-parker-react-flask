import React from "react";
import {useNavigate} from "react-router-dom"

export const Form = ({ userInput }) => {
  let navigate = useNavigate()
  const HandleSubmit = event => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target).entries())
    fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({formData}),
      headers: {
        "Content-type": "application/json: charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message => navigate(`/${message[201]}`))
  };
  return(
    <>
      <form onSubmit={HandleSubmit}>
      <h1>Report an Event</h1>
          <h2>Step 1: Please answer the following questions about the time and location of the incident you wish to report.</h2>
          <p>Street Address <input type="text" name="IncidentAddress" /></p>
          <p>City <input type="text" name="IncidentCity"/></p>
          <p>Zipcode <input type="text" name="IncidentZipcode" /></p>
          <p>County <input type="text" name="IncidentCounty" /></p>
          <p>State
              <select id="state" name="IncidentState" size="1">
                      <option value="California">California</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Texas">Texas</option>
                      <option value="Washington">Washington</option>
                  </select>
          </p>
          <h2>Step 2: Please describe the incident in more detail.</h2>
          <p>Please describe the incident (1000 characters or fewer) <input type="text" name="IncidentDescription" /></p>
          <p>Who or what do you believe to be the source of the incident? <input type="text" name="IncidentSource" /></p>
          <p>Incident Status
              <select id="incident status" name="IncidentStatus" size="1">
                      <option value="Active">Active</option>
                      <option value="No longer active">No longer active</option>
                      <option value="N/A">N/A</option>
                  </select>
          </p>
          <p>Do you know the name of person, firm, building, facility, etc. you are complaining about? If so, what is it? <input type="text" name="SourceName" /></p>
          <p>Any other details about the incident? <input type="text" name="OtherDetails" /></p>
          <button type="submit">Submit</button>
      </form>
    </>
  )
  
}