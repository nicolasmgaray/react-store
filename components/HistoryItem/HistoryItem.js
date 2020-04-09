import React from "react";
import { Item, Date, ProductImage, Details, Price, Name } from "../../styles/History";

const HistoryItem = ({ name, cost, createDate, img }) => (
  <Item>
    <ProductImage alt={name} src={img.url} />
    <Details>
      <Name>{name}</Name>
      <Date>Reedemed on: {createDate}</Date>
    </Details>
    <Price>- {cost} Points</Price>
  </Item>
);

export default HistoryItem;
