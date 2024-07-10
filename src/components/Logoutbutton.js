import React from 'react'

const Logoutbutton = () => {
    
        const router = useRouter()
       
        return (
          <button onClick={() => router.push('/about')}>
            Click here to read more
          </button>
        
  
 
  )
}

export default Logoutbutton