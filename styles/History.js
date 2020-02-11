import styled from "styled-components";

const List = styled.div`
  padding: 2em 6em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  align-items: center;
  margin: 1em 0em;
  min-height: 6em;
  background: white;
  flex-wrap: wrap;
  padding: 1em 0em;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  border-radius: 360px;
  height: 5em;
  width: 5em;
  border: 0.2em solid var(--color-main);
  object-fit: cover;
  margin: 0em 2em;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  flex: 1 0;
`;

const Price = styled.div`
  background: var(--color-red);
  border-radius: 25px;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  width: 8em;
  height: 2em;
  padding: 1em;
  margin: 1em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Date = styled.div`
  font-family: 0.9em;
`;

export { Name, List, Item, ProductImage, Details, Price, Date };
