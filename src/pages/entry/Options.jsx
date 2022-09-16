import { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import { Row } from "react-bootstrap";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // optionType is "scoops" or "toppings"
  useEffect(() => {
    console.log("optionType", optionType);
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => {
        setItems(response.data);
        console.log("response!!!!", response.data);
      })
      .catch(error => {
        console.log("HERE!!!!", error);
        setError(true);
        // TODO: handle error response
      });
  }, [optionType]);
  console.log("items:", items);

  if (error) {
    return <AlertBanner />
  }
  // TODO: replace the null ref with ToppingOption once available
  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOption;

  const optionItems = items.map(item => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />);

  return <Row>{optionItems}</Row>;
}
