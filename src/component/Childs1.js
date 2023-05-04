import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/slices/messageSlice';


function Childs1() {
    const inputRef = useRef(null)
    
    const dispatch=useDispatch();
    function handelSubmit(e) {
        e.preventDefault();
        const inputTextValue = inputRef.current.value;
        dispatch(setMessage(inputTextValue))
}

  return (
      <div>
          <form onSubmit={handelSubmit}>
              <input type="text" ref={inputRef}/>
              <input type="submit"  onClick={handelSubmit}/>
          </form>
    </div>
  )
}

export default Childs1