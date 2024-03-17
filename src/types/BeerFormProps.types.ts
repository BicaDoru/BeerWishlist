import { Beer } from "../models/Beer";

export type BeerFormType = {
    idInput: React.RefObject<HTMLInputElement>;
    nameInput: React.RefObject<HTMLInputElement>;
    manufacturerInput: React.RefObject<HTMLInputElement>;
    typeInput: React.RefObject<HTMLInputElement>;
    urlInput: React.RefObject<HTMLInputElement>;
    givenBeer?: Beer;
};