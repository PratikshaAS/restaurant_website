import React from 'react'
import food2 from '../images/food2.jpg'
import {Card, CardTitle, CardText, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Dish = () => {
  const nav = useNavigate();
let location = useLocation();
console.log(location);
  const dishImg = location.state.image;
  const dishName = location.state.name;
  return (
    <div className='dish_container'>
      <h1><a onClick={()=>nav(-1)} >back</a>Dish details</h1>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <img src={dishImg} className='dish_img'/>
        </div>
        <div className='col-md-6 col-sm-12'>
              <Card body>
                <CardTitle tag="h5">
                  {dishName}
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                {/* <Button>
                  Go somewhere
                </Button> */}
              </Card>
          
        </div>
        </div>


    </div>
  )
}

export default Dish