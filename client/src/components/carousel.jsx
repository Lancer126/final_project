import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const CarouselPage = (props) => {

  const events = props.events;
  const link = '/event/'+events.id;
  console.log(link)
  
  return (
    <MDBContainer
    style={{padding:0, maxWidth:'100%'}}>
      <MDBCarousel
      id="carouselpadding"
      activeItem={1}
      length={50}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
    >
      
      <MDBCarouselInner>
      {events.map((event, index) => { 
      return (
        <Link to={'/event/'+event.id}>
        <MDBCarouselItem itemId={index}>
          <MDBView>
            <div
            style={{
              height:"300px",
              maxWidth:"auto",
              backgroundImage: `url(${event.logo ? event.logo.original.url:"https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"})`,
              backgroundSize: 'contain',
              backgroundPosition:'center center'
            }}
              className="d-block w-100"
              alt="First slide"
            ></div>
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">{event.name.text}</h3>
            <p>{'@'+ event.venue.name}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        </Link>
      )})
    }
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
  
}


export default CarouselPage;

