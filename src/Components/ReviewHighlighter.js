// MyComponent.js
import ReviewList from "../Components/ReviewList"
import React from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from "react-tooltip";

const sentimentColors = {
    Positive: '#D9F2DD',
    Negative: '#F2DBD9',
    Mixed: '#e8bd6d3d',
    Neutral: '#eaf09b6b'
  };


function ReviewHighlighter() {
    


    
  return (
    <div class=" w-[80%] mt-5 mx-auto flex flex-col p-4 gap-6">
    {ReviewList.map((item) => (
        <div class="flex flex-col gap-1 ">
        <div class="flex">
        <img class="w-7 mx-2" src={item.source.icon}></img>
        <h3 ><span class="text-[#0f172a] font-bold">{item.reviewer_name} </span><span class="text-[#475569]">wrote a review at </span><span class="font-bold">{item.source.name}</span></h3>
        </div>


<div class="flex items-center">
<div className="flex items-center">
            {[...Array(item.rating_review_score)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
          </div>
</div>

        <p >{item.date}</p>
        <p>
        {/* Splitting the content into three parts */}
        <span>{item.content.substring(0, item.highlight_indices[0][0])}</span>
        <span data-tooltip-id={item.review_id} style={{ backgroundColor: sentimentColors[item.sentiment] }}>
        {/* Highlighted part */}
          {/* Highlighted part */}
          {item.content.substring(
            item.highlight_indices[0][0],
            item.highlight_indices[0][1]
          )}
        </span>
        <span>{item.content.substring(item.highlight_indices[0][1])}</span>
      </p>
        


        </div>
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

export default ReviewHighlighter;
