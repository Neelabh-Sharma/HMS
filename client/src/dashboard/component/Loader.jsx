import React from 'react'
import { CSpinner } from '@coreui/react'
 
function Loader() {
  return (
    <React.Fragment>
       <div className='h-screen flex items-center justify-center'>
          <CSpinner color="primary" />
       </div>
    </React.Fragment>
  )
}

export default Loader