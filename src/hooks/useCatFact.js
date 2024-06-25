import { useEffect, useState } from "react";
import { getRandomFact } from '../services/facts.js'

export function useCatFact() {
  const [fact, setFact] = useState();

  const setNewFact = () => {
    getRandomFact().then(newFact => setFact(newFact));
  }

  useEffect(setNewFact, []);
  
  return ({fact, setNewFact})
}

