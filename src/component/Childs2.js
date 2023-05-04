import React from 'react'
import { useSelector } from 'react-redux'
function Childs2() {
    const message=useSelector(store=>store.messageReducer.message)
    return (
        <div>
          The Data Of Child1:{message}  
      </div>
    )
}

export default Childs2