import React from 'react'
export default function Footer(props){
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
  

  
  <div className="text-center p-4" style={{backgroundColor: props.mode==='DARK'?'darkblue':'lightblue'}}>
    <p style={{color:props.mode==='LIGHT'?'black':'white'}}>© 2023 Copyright: GTG</p>
    
  </div>
 
</footer>
    </div>
  )
}
