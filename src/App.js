import React, { useState } from 'react';
import { render } from 'react-dom';
import {useLocalState} from './hooks';
import SecondFruit from './SecondFruit';

export const FruitContext = React.createContext();
const App = () => {
  const [fruit, setFruit] = useLocalState('fruit');
  return (
    <FruitContext.Provider value = {[fruit, setFruit]}>
      <p>
        Fruit:{fruit}
      </p>
      <button onClick={() => setFruit("Apple")}>Apple</button>
      <button onClick={() => setFruit("Banana")}>Banana</button>
      <SecondFruit />

      <span>
        Usando LocalStorage podemos atualizar a página que mesmo assim nossos itens continuarão selecionados.
      </span>
      <span>
        Os valores tendem a ser diferentes em cada uma das frutas, para termos o mesmo valor nas duas
        temos que utilizar a useContext, ou context Api.
      </span>
    </FruitContext.Provider>
  );
}


export default App;