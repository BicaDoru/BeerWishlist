import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import './layout.css';



export function Layout({ children }: any) {
    return (
        <div className='layout-container' data-testid='layout-test-id'>
            <Header />

            {children}

            <Footer />
        </div>
    );
}