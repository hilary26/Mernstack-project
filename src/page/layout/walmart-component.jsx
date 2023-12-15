import React from 'react';
import { useState } from 'react';
import Header from '../../navigation/header/header.component';
import FormInput from '../../component/form-input/form-input-component';
import Furniture1 from '../../assets/images/furniture11.jpg';
import Furniture12 from '../../assets/images/furniture12.jpg';
import Furniture14 from '../../assets/images/furniture14.jpg';
import Furniture13 from '../../assets/images/furniture13.jpg';
import Furniture15 from '../../assets/images/furniture15.jpg'
import Select from 'react-select';
import CustomButton from '../../component/custom-button/custom-button';
import './walmart.styles.css';

const Walmart = () => {
  const options = [
    { value: "options1", label: "Giftcard" },
    { value: "options2", label: "steamcard" },
    { value: "options3", label: "vanilacard"},
  ];
  const [selectedOptions, setSelectedOptions] = useState(null);
  const handleSelectChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  }
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '20%',
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid #000',
      marginLeft: '32rem',
      borderRadius: '10px',
    })
  }
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0 , 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Furniture15})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    padding: '30px'
  }
    return (
        <>
        <Header />
        <div style={styles}>
        <h1 className='order'>
            Process your Order Now
        </h1>
                        <FormInput
                        style={{ width: '20%'}}
                        name="Full Name"
                        type="text"
                        placeholder="Enter your full Name"
                        required
                        />
                        <FormInput
                        style={{ width: '20%'}}
                        name="Your goods"
                        type="text"
                        placeholder="Enter your goods here"
                        required
                        />
                        <FormInput
                        style = {{ width: "20%"}}
                        name="Amount"
                        type="Number"
                        placeholder="Enter Amount"
                        required
                        />
                        <Select
                        options={options}
                        value={selectedOptions}
                        onChange={handleSelectChange}
                        styles={customStyles}
                        />

                        <FormInput
                        style = {{ width: "20%"}}
                        name="Product"
                        type="text"
                        placeholder="Enter product"
                        required
                        />

                        <FormInput
                        style = {{ width: "20%"}}
                        name="Date"
                        type="Date"
                        placeholder="Enter date"
                        required
                        />

                         <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px"
                        }}>
                        
                        <CustomButton type="submit">Register</CustomButton>
                       </div>

        </div>

                       <div className="delivered-meals">
                <div className="delivered-imgs">


             
                 
                  <img src={Furniture1} alt="#" />
                  <img src={Furniture12} alt='#' />
                  <img src={Furniture13} alt='#' />
                  <img src={Furniture14} alt='#' />
                  <img src={Furniture15} alt="#" />
                  <img src={Furniture1} alt='#' />
                </div>
                <p className="delivered-text">
                  <span>250,000+</span>  pieces of furnitures delivered last year!
                </p>
              </div>

        </>
    );

}
export default Walmart;