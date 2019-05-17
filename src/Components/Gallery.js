import React from "react";
import Gallery from "react-photo-gallery";

const photos = [
  { src: "http://placekitten.com/1200/800", width: 3, height: 1 },
  { src: "http://placekitten.com/600/800", width: 3, height: 4 },
  { src: "http://placekitten.com/600/800", width: 3, height: 4 },
  { src: "http://placekitten.com/600/800", width: 3, height: 4 },
  { src: "http://placekitten.com/800/600", width: 4, height: 3 },
  { src: "http://placekitten.com/800/600", width: 4, height: 3 },
  { src: "http://placekitten.com/600/300", width: 4, height: 3 }
];
export const BasicRows = () => <Gallery photos={photos} />;
