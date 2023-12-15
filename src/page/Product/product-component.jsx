import React, { useState, useEffect} from 'react';
import Sidebar from '../../navigation/sidebar/sidebar.component';
import CustomButton from '../../component/custom-button/custom-button';
import FormInput from '../../component/form-input/form-input-component';
import { BASE_URL } from '../../config';
import axios from 'axios';
import './product.styles.css';




const Product = () => {
    const [data, setData] = useState ([]);
    useEffect(() => {
        //fetch data from the API endpoint using Axios
        axios.get(`${BASE_URL}/walmart`)
        .then((response)=> {
            // assuming the data is in the "data" property of the response
            setData(response.data); // updating the state with received data

        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    }, []);
    return (
        
        <>
        <div className='web-page p-0'>

       <div>
       <Sidebar />
       </div>
      <div className='right-view'>
      <div>
            <h3 className='text-center text-dark mt-5 text-lg'>Our Products</h3>
        </div>
        <div className='flex justify-evenly'>
        <div>
                <FormInput
                name="search"
                type="search"
                style={{
                    border: "1px solid red",
                    height: "30px",
                    textAlign: "left",
                    padding: "8px",
                }}
                placeholder="Search for card"
                required
                />  
            </div>
            <div>
            <CustomButton
           style= {{
            height: "30px",
            padding: "5px",
            margin: "20px",
            fontSize: "10px",
            backgroundColor: "teal",
           }}
           >
            create a new product
            </CustomButton>


            </div>
        </div>
        <div id="tableDiv">
            <table className='table'>
                <thead>
                    <tr className='head'>
                        <th scope="col">Full Name</th>
                        <th scope="col">Goods</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Cards</th>
                        <th scope="col">Products</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.FullName}</td>
                            <td>{item.YourGoods}</td>
                            <td>{item.Amount}</td>
                            <td>{item.cards}</td>
                            <td>{item.product}</td>
                            </tr>
                    ))}
                    
                    

                    
                    
                </tbody>
            </table>
        </div>
      </div>

        </div>

        

        </>
    );
}
export default Product;