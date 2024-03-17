import { BeersContext } from '../../contexts/BeersContext';
import { BeerForm } from '../../features/CRUD operations/Beer form/BeerForm';
import { Layout } from '../../shared/components/layout/layout';
import { Button } from '../../shared/components/button/button';
import { Beer } from '../../models/Beer';
import React from 'react';
import { useContext, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    nameInput: React.RefObject<HTMLInputElement>,
    manufacturerInput: React.RefObject<HTMLInputElement>,
    typeInput: React.RefObject<HTMLInputElement>,
    urlInput: React.RefObject<HTMLInputElement>,
) {
    if (!idInput.current || !nameInput.current || !manufacturerInput.current || !typeInput.current || !urlInput.current)
        throw new Error('Inputs references are null');

    if (!idInput.current?.value || !nameInput.current?.value || !manufacturerInput.current?.value || !typeInput.current?.value || !urlInput.current?.value)
        throw new Error('You must provide values for each field!');

    const beerId: number = parseInt(idInput.current.value),
        beerName: string = nameInput.current.value,
        beerManufacturer: string = manufacturerInput.current.value,
        beerType: string = typeInput.current.value,
        beerUrl: string = urlInput.current.value;

    return new Beer(beerId, beerName, beerManufacturer, beerType, beerUrl);
}


export function EditBeerPage() {
    document.title = 'Edit Beer';

    const idInput = useRef<HTMLInputElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);
    const manufacturerInput = useRef<HTMLInputElement>(null);
    const typeInput = useRef<HTMLInputElement>(null);
    const urlInput = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const beersContext = useContext(BeersContext)!;

    const { beerId } = useParams();

    const givenBeer = beersContext.beers.find((beer: Beer) => typeof beerId !== "undefined" && beer.getID() === parseInt(beerId));
    console.log('Given Beer:', givenBeer);

    const handleOnClickWrapper = () => {
        try {
            const newBeer = handleOnClick(idInput, nameInput, manufacturerInput, typeInput, urlInput);
            beersContext.removeBeer(newBeer.getID());
            beersContext.addBeer(newBeer);

            navigate('/');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Layout>
            <div className='main-page-container'>
                <BeerForm
                    idInput={idInput}
                    nameInput={nameInput}
                    manufacturerInput={manufacturerInput}
                    typeInput={typeInput}
                    urlInput={urlInput}
                    givenBeer={givenBeer}
                />

                <Button type='submit' buttonMessage='Edit Beer' onClick={handleOnClickWrapper} />
            </div>
        </Layout>
    );
}
