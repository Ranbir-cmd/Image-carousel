import { useState } from 'react'
import './App.css'

const imgArr = [
  "https://images.freeimages.com/images/large-previews/6ca/marbles-less-random-1483001.jpg?fmt=webp&w=500",
  "https://i.pinimg.com/736x/b2/06/ed/b206ed4414cfacfc7ce52de685f930f3.jpg",
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww",
  "https://img.pikbest.com/origin/09/30/88/77bpIkbEsTD87.jpg!w700wp"
]

function App() {
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const handleNext = () => {
    setActiveImgIndex( (activeImgIndex + 1) % imgArr.length)
  }
  const handlePrev = () => {
    if(!activeImgIndex){
      setActiveImgIndex(imgArr.length - 1)
    } else{
      setActiveImgIndex( activeImgIndex - 1 )
    }
  }

  return (
    <div className='flex justify-center mt-8'>
      <button className='font-medium px-2' onClick={handlePrev}>Previous</button>
      {imgArr.map((img, i) =>(
        
        <img key={i} src={img} alt='wallpaper' className={`h-[400px] w-[600px] rounded-lg ${i === activeImgIndex ? `block` :  `hidden`}`} />

      ))}
      <button className='font-medium px-2 rounded' onClick={handleNext}>Next</button>
    </div>
  )
}

export default App
