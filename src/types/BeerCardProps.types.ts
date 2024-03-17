import { Beer } from '../models/Beer';

export type BeerCardPropsType = {
    givenBeer: Beer;
    removeMethod: (beerId: number) => void;
};