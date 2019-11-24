import React, { useContext } from 'react';
import { useLocalState } from './hooks';
import { FruitContext } from './App';
const SecondFruit = () => {
    const [fruit, setfruit] = useContext(FruitContext);
    return (
        <div>
            <p>
                Fruit:{fruit}
            </p>
            <button onClick={() => setfruit("Apple")}>Apple</button>
            <button onClick={() => setfruit("Banana")}>Banana</button>
        </div>
    );
}

export default SecondFruit;