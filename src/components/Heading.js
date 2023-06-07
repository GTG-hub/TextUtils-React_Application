import React from 'react'
import Typed from 'typed.js'
export default function Heading(props) {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<span style={{Color:props.mode==='DARK'?'white':'#016269'}}>Made some mistake while typing!?</span>", "Don't worry :) We got you covered.","Just enter the text and experience the magic ;)"],
      typeSpeed: 30,
      // loop:true,
      backSpeed : 30
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App" >
      <span style={{Color:props.mode==='DARK'?'white':'#016269'}}  ref={el} />
    </div>
  );
}
