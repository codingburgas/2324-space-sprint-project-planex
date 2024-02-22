import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div id="canvas-container" className='flex-grow w-full h-full' style={{backgroundColor: "black"}}>
      <Canvas gl={{antialias: false}}>
      </Canvas>
    </div>
  )
}
createRoot(document.getElementById('root')).render(<App />)