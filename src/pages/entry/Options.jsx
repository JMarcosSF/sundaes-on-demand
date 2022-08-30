import { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import { Row } from "react-bootstrap";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  // optionType is "scoops" or "toppings"
  useEffect(() => {
    console.log('optionType', optionType)
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => {
        setItems(response.data);
        console.log('response!!!!', response.data)
      })
      .catch(error => {
          console.log('HERE!!!!', error)
        // TODO: handle error response
      });
  }, [optionType]);
  console.log('items:', items)

  // TODO: replace the null ref with ToppingOption once available
  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

  const optionItems = items.map(item => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />);

    return <Row>{ optionItems }</Row>
}
