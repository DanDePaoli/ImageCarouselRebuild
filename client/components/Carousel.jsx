/* eslint-disable arrow-body-style */
import React, { useRef } from 'react';
import styled from 'styled-components';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Listing from './Listing.jsx';
import NightlyRate from './NightlyRate.jsx';
import Rating from './Rating.jsx';

// const Item = styled.li`
//   margin: 0px 2px;
//   max-width: 25%;
//   flex: 0 0 25%;
// `;

// const List = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   list-style-type: none;
//   margin: 0;
//   max-width: inherit;
//   // overflow: hidden;
//   padding: 0;
// `;

// const Wrapper = styled.div`
//   background-color: rgb(247, 247, 247);
//   display: flex;
//   padding 0;
//   max-width: 1120px;
// `;

const NewContainer = styled.div`
 display: flex;
 align-items: center;
 max-width: 1120px;
 overflow-y: auto;
`;

const NewSingleItemsContainer = styled.div`
 padding: 20px;
 text-align: center;
 cursor: pointer;
 min-width: 10rem;
`;

const NewItemsContainer = styled.div`
 display: flex;
 overflow-y: hidden;
 justify-content: center;
 margin: 0px
 ::-webkit-scrollbar {
 display: ;
 }
`;

const Wrapper = styled.div`
background-color: rgb(247, 247, 247);
// padding 0;
display: flex;
align-items: center;
max-width: auto;
overflow-y: auto;
margin: auto;
::-webkit-scrollbar {
  display: ;
  }
`;


const List = styled.div`
display: flex;
overflow-y: hidden;
justify-content: left;
// margin: 0px 4px 15px;


::-webkit-scrollbar {
  display: ;
  }
`;

const Item = styled.div`
margin: 0px 2px;
// max-width: 25%;
flex: 0 0 25%;
// padding: 20px;
text-align: center;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
min-width: 10rem;
::-webkit-scrollbar {
  display: ;
  }

`;
// const listRef = useRef(null);
// const listRef = React.createRef();
// const scrollLeft = () => {
//   if (listRef.current) {
//     listRef.current.scrollBy({
//   top: 0,
//   left: 200,
//   behavior: "smooth",

//     })
//   }
// };

// const scrollRight = () => {
//   if (listRef.current) {
//     listRef.current.scrollBy({
//   top: 0,
//   left: -200,
//   behavior: "smooth",

//     })
//   }
// };

const Carousel = (props) => {


// const listRef = React.createRef();
// const scrollLeft = () => {
//   if (listRef.current) {
//     listRef.current.scrollBy({
//       top: 0,
//       left: -500,
//       behavior: "smooth",
//     });
//   }
// };

// const scrollRight = () => {
//   console.log(listRef);
//   if (listRef.current) {
//     listRef.current.scrollBy({
//       top: 0,
//       left: 500,
//       behavior: "smooth",
//     });
//   }
// };

return (
  <Wrapper>
    <List ref={props.listRef}>
      {props.carousel.map((listing) => {
        // console.log(listing.superhost);
        // console.log(props.modal);
        return (
          <Item>
            <Images graphics={listing} modal={props.modal} liked={props.liked} />
            <Rating rating={listing} />
            <Listing listing={listing} />
            <Description description={listing}/>
            <NightlyRate rate={listing}/>
          </Item>
        );
      })}
    </List>
  </Wrapper>
);
    }
export default Carousel;
