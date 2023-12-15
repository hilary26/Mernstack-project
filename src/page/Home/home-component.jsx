import React from 'react';
import Header from '../../navigation/header/header.component';
import Directory from '../../component/directory/directory.component';
import './home-styles.css';


const Homepage = () => {
    return (
        <>
        <Header />
        <div className='homepage'>
            <Directory />
        </div>
        {/* <div className='web-page p-0'>
            <div className='col-3 p-0'>

            </div>

        </div>
        <div className='right-view'>

        </div> */}
        </>
    );
    
    
}
export default Homepage;
