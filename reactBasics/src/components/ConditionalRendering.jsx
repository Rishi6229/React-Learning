import React from 'react'
import AdminPanel from './AdminPanel' 
import LoginPanel from './LoginPanel'   

function ConditionalRendering() {
  let content;
  let isLoggedIn = false;
  if(isLoggedIn == true)
  {
    content = <AdminPanel/>
  }
  else{
    content = <LoginPanel/>
    isLoggedIn = true;
  }
  return (
    <div>
        <p>The content is {content}</p>
    </div>
  )
}

export default ConditionalRendering