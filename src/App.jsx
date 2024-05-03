import { useState } from "react";
import "./App.css";
//For reference about glob imports: https://vitejs.dev/guide/features#glob-import
const images = import.meta.glob("../images/*");
const imagePaths = Object.keys(images);

function App() {
  const [seenImages, setSeenImages] = useState([]);
  const [memoryCount, setMemoryCount] = useState(0);
  const [hasLost, setHasLost] = useState(false);
  const [lastImage, setLastImage] = useState(-1);

  function validateMemory(userGuess) {
    const hasSeenImage = seenImages.includes(currentImage);
    setLastImage(currentImage);

    if (!hasSeenImage) {
      //Mark this image as having been seen
      setSeenImages([...seenImages, currentImage]);
    }

    if (userGuess === hasSeenImage) {
      setMemoryCount(memoryCount + 1);
    } else {
      setHasLost(true);
    }
  }

  function restart(){
    setSeenImages([]);
    setMemoryCount(0);
    setHasLost(false);
  }

  function getNextImage() {
    let nextNumber = Math.floor(Math.random() * imagePaths.length);
    while (nextNumber == lastImage) {
      nextNumber = Math.floor(Math.random() * imagePaths.length);
    }
    
    return imagePaths[nextNumber];
  }

  const currentImage = getNextImage();

  return (
    <>
      <h1>Test your Memory</h1>
      <p>Correct Count: {memoryCount}</p>
      {!hasLost ? (
        <>
          <div className="currentImage">
            <img src={currentImage} alt="Current Image" />
          </div>
          <p>Have you seen this image previously</p>
          <div className="userInput">
            <button onClick={() => validateMemory(true)}>Yes</button>
            <button onClick={() => validateMemory(false)}>No</button>
          </div>
        </>
      ) : (
        <>
          <button onClick={restart}>Restart</button>
        </>
      )}
    </>
  );
}

export default App;
