import { createContext } from 'react';


import { BeersContextType, ProviderType } from '../types/BeersContextTypes.types';

export const BeersContext = createContext<BeersContextType | null>(null);

export function BeersContextProvider({ beerContext, children }: ProviderType) {
    return <BeersContext.Provider value={beerContext}>{children}</BeersContext.Provider>;
}
