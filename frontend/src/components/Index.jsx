import React from 'react';

import { GoogleLogin } from '@leecheuk/react-google-login'
import axios from 'axios'
import { useState } from 'react';
import {gapi} from 'gapi-script'

import '../components/Css/Index.css'


function Oauth() {
    const clientId= '962955475292-vhhhhcjh7g8j8cgg6hbekuvso45e9nbq.apps.googleusercontent.com'
    const responseGoogle = response=>{
      console.log(response);
      console.log("hey code works");
      const {code} = response
    axios.post('/api/create-tokens', {code})
    .then(response=>{
      console.log(response.data);
      console.log("hey hey");
      setsignedIn(true)
    })
    .catch(error=>
      console.log(error.message))

    }

    const responseError =error=>{
    console.log(error);
    console.log("aint working");
    }

    const handleSubmit= (e) =>{
      e.preventDefault()
      console.log(summary, description,location,startDateTime,endDateTime);
      axios.post('/api/create-event',{
        summary,
        description,
        location,
        startDateTime,
        endDateTime
      })
      .then(response=>{
        console.log(response.data);
        console.log("hey hey");
        setsignedIn(true)
      })
      .catch(error=>
        console.log(error.message))
    }

    const [summary, setSummary] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [startDateTime, setStartDateTime] = useState('')
    const [endDateTime, setEndDateTime] = useState('')
    const [signedIn, setsignedIn] = useState(false)
    return (

        <div>
            <div className="App">

           </div>
           {

             !signedIn?(


  <div className='container'>
                    <h1 className='headtitle1'>EVENTS CALENDER</h1>
               <GoogleLogin className='googleLogin'
               clientId='962955475292-vhhhhcjh7g8j8cgg6hbekuvso45e9nbq.apps.googleusercontent.com'
               buttonText='sign in and authorize calandar'
               onSuccess={responseGoogle}
               onFailure={responseError}
               cookiePolicy={'single_host_origin'}
               //get the referesh tokens
               responseType='code'
               accessType='offline'
               scope='openid email profile https://www.googleapis.com/auth/calendar'
               />
             </div>

             ):
             ( <div>
              <h1 className='headtitle1'>CREATE EVENTS</h1>
               <form onSubmit={handleSubmit}>
         <label htmlFor="summary">Summary</label>
         <br />
         <input type="text" id="summary" value={summary} onChange={e=>setSummary(e.target.value)}/>
         <br />
         <label htmlFor="description">Description</label>
         <br />
         <textarea
          id="description"
          value={description}
           onChange={e=>setDescription(e.target.value)}/>
         <br />
         <label htmlFor="location">Location</label>
         <br />
         <input type="text"
          id="location"
           value={location}
           onChange={e=>setLocation(e.target.value)}/>
           <br />
           <label htmlFor="startDateTime">Start Date Time</label>
           <br />
           <input type="datetime-local"
          id="startDateTime"
           value={startDateTime}
           onChange={e=>setStartDateTime(e.target.value)}/>
           <br />
           <label htmlFor="endDateTime">End Date Time</label>
           <br />
           <input type="datetime-local"
          id="endDateTime"
           value={endDateTime}
           onChange={e=>setEndDateTime(e.target.value)}/>
           <br />
         <button type='submit'>create event</button>


              </form>

             </div>)
           }


        </div>
         );
}

export default Oauth
