import React, {createContext, useContext, useState} from 'react';

const CountContext = createContext({count: 0, setCount: {}});

export default function CountProvider({children}: any) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  const {count, setCount} = context;
  return {count, setCount};
}
