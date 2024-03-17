import { useContext } from 'react';
import { Beer } from '../../models/Beer';
import { BeerCard } from '../../features/Display Beers/BeerCard';
import { Layout } from '../../shared/components/layout/layout';
import { BeersContext } from '../../contexts/BeersContext';

import './DisplayBeersPage.css';

export function DisplayBeersPage() {
    document.title = 'beers dashboard!';

    const beersContext = useContext(BeersContext)!;

    let beersArray: Beer[] = beersContext.beers;
    const removeMethod = beersContext.removeBeer;

    return (
        <Layout>
            <div className='main-page-container'>
                <div className='beers-list' data-testid='beers-list'>
                    {beersArray.map((beer) => (
                        <BeerCard givenBeer={beer} removeMethod={removeMethod} key={beer.getID()} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}