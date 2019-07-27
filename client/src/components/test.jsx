import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = (props) => {

  const events = props.events;
  

  
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={50}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
    >
      
      <MDBCarouselInner>
      {events.map((event, index) => { 
      return (
        <MDBCarouselItem itemId={index}>
          <MDBView>
            <img
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
      )})
    }
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;