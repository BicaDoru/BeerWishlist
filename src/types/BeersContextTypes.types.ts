import { Beer } from "../models/Beer";

import { ReactNode } from "react";

export type BeersContextType = {
    beers: Beer[];
    addBeer: (beer: Beer) => void;
    removeBeer: (beerId: number) => void;
};

export type ProviderType = {
    beerContext: BeersContextType;
    children: ReactNode;
};