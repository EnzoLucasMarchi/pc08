import './index.css'
import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';

function App() {
  const { fact, setNewFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    setNewFact()
  }

  return (

      <main>
        <h1>App de gatitos</h1>
        <button onClick={handleClick}>new</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='cat' />}
      </main>

  )
}

export default App

