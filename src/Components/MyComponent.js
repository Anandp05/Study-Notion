// MyComponent.js
import ReviewList from "../Components/ReviewList"
import React from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from "react-tooltip";




function MyComponent() {
    


    
  return (
    <div class="flex flex-col">
    {ReviewList.map((item) => (
        <div class="border-[1px]">
        <div class="flex">
        <h3 data-tooltip-id={item.review_id}>{item.reviewer_name} wrote a review at {item.source.name}</h3>
        <img class="w-10" src={item.source.icon}></img>
        </div>
        <p data-tooltip-id={item.review_id}>{item.date}</p>
        <p data-tooltip-id={item.review_id}>{item.rating_review_score}</p>
        <p data-tooltip-id={item.review_id}>{item.content}</p></div>
  ))}
  {ReviewList.map((item) => (
  <ReactTooltip
      id={item.review_id}
      place="bottom"
      content={item.topic}
    />))}
    </div>
  );






}

export default MyComponent;
