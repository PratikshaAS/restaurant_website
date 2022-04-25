import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardGroup, CardBody, CardSubtitle, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import food2 from '../images/food2.jpg'
import food5 from '../images/food5.jpg'
import food6 from '../images/food6.jpg'
import food9 from '../images/food9.jpg'
import bg from '../images/bg.jpg';

const popularList = ["dish1", "2", "3", "4"];
const popularData = [
    {
        name: "Continental",
        image: food2
    },
    {
        name: "Noodles",
        image: food5
    },
    {
        name: "Pizza",
        image: food6
    },
    {
        name: "Deserts",
        image: food9
    }
]
const imagesList = [food2, food5, food6, food9];

const Homepage = () => {
    const usenav = useNavigate();
  return (
    <div>
      {/* top heading banner */}
      <Card className="banner_container" inverse>
        <CardImg
          alt="Card image cap"
          src={bg}
          className="heading_img"
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5" style={{fontSize:"60px", textAlign:"center"}}>LettuceEat</CardTitle>
          <CardText className="home_txt">
            "Food is for eating, and good food is to be enjoyed ... I think food is, actually, very beautiful in itself."
          </CardText>
          {/* <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> */}
        </CardImgOverlay>
      </Card>

      <h1 className="menu_text" style={{textAlign:"center", fontWeight:"700", fontSize:"55px"}}>Menu</h1>
      <div className="row card_row">


      {popularData.map((item, index) => {
          return(
              <Card 
                className="col-sm-6 col-md-4 col-lg-3 dish_card"
                onClick={()=>usenav('/dish', {state:item})} 
                >
              <CardImg
                alt="Card image cap"
                src={item.image}
                top
                width="150px"
                height="150px"
                className="card_img"
                
              />
              <CardBody>
                <CardTitle tag="h5" style={{color:"white"}}>
                  {item.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                  style={{color:"white"}}
                  >
                  Card subtitle
                </CardSubtitle>
                {/* <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText> */}
                {/* <Button>
                  Button
                </Button> */}
              </CardBody>
            </Card>

);
})}
</div>
    </div>
  );
};

export default Homepage;
