import React, { useState } from 'react'
import { supabase } from '../api/client' 

export const Login = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            await supabase.auth.signInWithOtp({
                email: email
            })    
        } catch (error) {
            console.error(error)
        }
        
    }
  return (
      <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                      type="email" 
                      className="form-control" 
                      placeholder='your emailsite.com' 
                      onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
    </div>
  )
}
