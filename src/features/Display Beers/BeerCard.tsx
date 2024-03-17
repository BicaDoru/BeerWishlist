import { useNavigate } from 'react-router-dom';
import { BeerCardPropsType } from '../../types/BeerCardProps.types';

import './BeerCard.css';

export function BeerCard({ givenBeer, removeMethod }: BeerCardPropsType) {
    let path: string = 'assets/' + givenBeer.getURL();

    const navigate = useNavigate();

    const handleCardOnClick = () => {
        navigate('/editBeer/' + givenBeer.getID());
    };

    return (
        <div className='card' data-testid='beer-card' onClick={handleCardOnClick}>
            <button
                className='remove-button'
                data-testid='remove-button'
                onClick={(e) => {
                    e.stopPropagation();
                    removeMethod(givenBeer.getID());
                }}
            >
                X
            </button>

            <div className='card-info' data-testid='card-info'>
                <div className='picture'>
                    <img src={path} alt='beer profile' />
                </div>

                <div className='beer-info'>
                    <div className='beer-id'>ID: {givenBeer.getID()}</div>
                    <div className='name'>Name: {givenBeer.getName()}</div>
                    <div className='manufacturer'>Manufacturer: {givenBeer.getManufacturer()}</div>
                    <div className='type'>type: {givenBeer.getType()}</div>
                </div>
            </div>
        </div>
    );
}