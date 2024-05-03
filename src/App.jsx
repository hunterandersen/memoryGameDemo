import { useState } from 'react'
import './App.css'
//For reference about glob imports: https://vitejs.dev/guide/features#glob-import
const images = import.meta.glob("../images/*");
console.log(images);
const imagePaths = Object.keys(images);

function App() {
  const [seenImages, setSeenImages] = useState([]);

  return (
    <>
      <h1>Vite + React</h1>
      <ul>
        {imagePaths.map((path, index) => {
          return <li key={index}>
            <img src={path} alt={`Memory image #${index}`} />
          </li>
        })}
      </ul>
    </>
  )
}

export default App
