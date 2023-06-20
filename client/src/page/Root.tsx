import {Outlet} from 'react-router-dom';
import Navigation from '../assets/components/Navigation/Navigation';
import Footer from '../assets/components/Footer/Footer';

const Root = () => {
    return (<>
        <Navigation/>
        <div><Outlet/></div>
        <Footer/>
    </>)
}

export default Root;