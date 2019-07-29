import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const CarouselPage = (props) => {

  const events = props.events;
  const link = '/event/'+events.id;
  console.log(link)
  
  return (
    <MDBContainer>
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
            <img
            style={{height:"600px",maxWidth:"auto"}}
              className="d-block w-100"
              src={event.logo? event.logo.original.url:null}
              alt="First slide"
            />
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

