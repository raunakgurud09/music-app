import { createContext, useContext, useMemo, useState } from 'react';

export const PlayerContext: any = createContext(null);
// export const PlayerUpdateContext: any = createContext('old');

// export const usePlayer = () => {
//   const context = useContext(PlayerContext);
//   return context;
// };

// export const useUpdatePlayer = () => {
//   return useContext(PlayerUpdateContext);
// };

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState('null');

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
