import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const overlay = document.getElementById('overlay');
  const [playvideo, setPlayvideo] = React.useState(false)
  const vidref = React.useRef();
  const handleVideo = () => {
    setPlayvideo((prePlayvideo)=> !prePlayvideo)
    if(playvideo){
      vidref.current.pause()
      overlay.classList.add('overlay2');
    }else{
      vidref.current.play();
      overlay.classList.remove('overlay2');
    }
  }
  return (
  <div className='app__video'>
    <video 
    src={meal} 
    type="video/mp4" 
    loop 
    controls={false} 
    muted 
    ref={vidref} />
    <div className='app__video-overlay overlay2 flex__center' id='overlay'>
      <div className='app__video-overlay_circle flex__center'
        onClick={handleVideo}
      >
      {playvideo ? <BsPauseFill color='#fff' size={30}/> 
      : <BsFillPlayFill color='#fff' size={30}/>}
      </div>
    </div>
  </div>
  ) 
}

export default Intro;
