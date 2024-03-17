import { BeerForm } from '../../features/CRUD operations/Beer form/BeerForm';
import { Layout } from '../../shared/components/layout/layout';
import { Button } from '../../shared/components/button/button';
import { Beer } from '../../models/Beer';
import React from 'react';

import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { BeersContext } from '../../contexts/BeersContext';

import './AddBeerPage.css';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    nameInput: React.RefObject<HTMLInputElement>,
    manufacturerInput: React.RefObject<HTMLInputElement>,
    typeInput: React.RefObject<HTMLInputElement>,
    urlInput: React.RefObject<HTMLInputElement>,
): Beer {
    if (!idInput.current!.value || !nameInput.current!.value || !manufacturerInput.current!.value || !typeInput.current!.value || !urlInput.current!.value)
        throw new Error('You must provide values for each field!');

    const beerId: number = parseInt(idInput.current!.value),
        beerName: string = nameInput.current!.value,
        beerManufacturer: string = manufacturerInput.current!.value,
        beerType: string = typeInput.current!.value,
        beerUrl: string = urlInput.current!.value;

    return new Beer(beerId, beerName, beerManufacturer, beerType, beerUrl);
}

export function AddbeerPage() {
    document.title = 'Add beer';

    const idInput = useRef<HTMLInputElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);
    const manufacturerInput = useRef<HTMLInputElement>(null);
    const typeInput = useRef<HTMLInputElement>(null);
    const urlInput = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const beersContext = useContext(BeersContext);

    const handleOnClickWrapper = () => {
        try {
            const inputbeer = handleOnClick(idInput, nameInput, manufacturerInput, typeInput, urlInput);
            if (beersContext) {
                beersContext.addBeer(inputbeer);
            }
            navigate('/');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Layout>
            <div className='main-page-container' data-testid='main-page-container'>
                <div className='main-title'>Add beer</div>

                
                return (
                    <Layout>
                        <div className='main-page-container' data-testid='main-page-container'>
                            <div className='main-title'>Add beer</div>
                            <BeerForm
                                idInput={idInput}
                                nameInput={nameInput}
                                manufacturerInput={manufacturerInput}
                                typeInput={typeInput}
                                urlInput={urlInput}
                                data-testid='beer-form'
                            />
                        </div>
                    </Layout>
                );

                <Button type='submit' buttonMessage='Add beer' className='form-button' onClick={handleOnClickWrapper} />
            </div>
        </Layout>
    );
}