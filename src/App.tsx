import './App.css';
import { DisplayBeersPage } from './pages/Display Beers Page/DisplayBeersPage';
import { Beer } from './models/Beer';
import { AddbeerPage } from './pages/Add Beer Page/AddBeerPage';
import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { BeersContextProvider } from './contexts/BeersContext';
import { EditBeerPage } from './pages/Edit Beer Page/EditBeerPage';

let demoBeer1: Beer = new Beer(1, 'Harghita', 'Heineken', 'Blonda', 'harghita.jpg');
let demoBeer2: Beer = new Beer(2, 'Erdinger', 'Erdinger Weißbräu', 'Blonda nefiltrata', 'erdinger.jpg');

function App() {
    let [beers, setBeers] = useState<Beer[]>([demoBeer1, demoBeer2]);

    const addBeer = (newBeer: Beer) => {
        setBeers((prevState: Beer[]) => [...prevState, newBeer]);
    };

    const removeBeer = (beerId: number) => {
        setBeers((prevState: Beer[]) => prevState.filter((Beer) => Beer.getID() !== beerId));
    };

    useEffect(() => {
        console.log(beers);
    });

    return (
        <BeersContextProvider beerContext={{ beers, addBeer, removeBeer }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DisplayBeersPage />} />
                    <Route path='/addBeer' element={<AddbeerPage />} />
                    <Route path='/editBeer' element={<EditBeerPage />} />
                </Routes>
            </BrowserRouter>
        </BeersContextProvider>
    );
}

export default App;
