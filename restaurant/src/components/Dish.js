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
      <h1><i onClick={()=>nav(-1)} className="fas fa-angle-left" style={{marginRight:"20px"}}></i>Dish details</h1>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <img src={dishImg} className='dish_img'/>
        </div>
        <div className='col-md-6 col-sm-12'>
              <Card body>
                <CardTitle tag="h5" style={{fontSize:"30px"}}>
                  {dishName}
                </CardTitle>
                <CardText>
                  <b>Description:</b> Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.
                </CardText>
                <CardText>
                  <b>Price :</b> 799 /- Rs.
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