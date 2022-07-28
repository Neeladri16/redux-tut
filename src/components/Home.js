import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Home(props){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    console.log("props",props)
    return(
        <div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://boip.in/39598-thickbox_default/apple-iphone-x-64gb-certified-refurbished-good.jpg" alt=""/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <br />
                    <span>
                       Price:$1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button  
                    onClick={()=>
                        props.addToCartHandler({Price:1000,name:'i phone 11'})
                        }>Add to cart</button>
                         <button  
                         className="remove-cart-btn"
                    onClick={()=>
                        props.removeToCartHandler({Price:1000,name:'i phone 11'})
                        }>Remove to cart</button>
                </div>


                <div className="dropdown">
                <Box sx={{ minWidth: 120 }}>
             <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Item</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>

                </div>
            </div>
        </div>
    );
}
export default Home;