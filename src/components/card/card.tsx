import { addDoc, collection } from "firebase/firestore";
import {
  CardBody,
  CardButton,
  CardContainer,
  CardImg,
  CardText,
  CardTitle,
} from "../style-componentns/card/style";
import { db } from "../../services/firebaseConnection";
import "./style.css";
import { Heart } from "@phosphor-icons/react";

interface CardProps {
  imageUrl: string;
  title: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  text,
  buttonText,
  buttonUrl,
}) => {
  function handleBookmark() {
    addDoc(collection(db, "bookmarks"), {
      item: title,
      bookmarkedAt: new Date(),
    })
      .then(() => {
        console.log("Favoritado com sucesso!");
      })
      .catch((error) => {
        alert(`Erro ao favoritar: ${error}`);
      });
  }

  return (
    <CardContainer>
      <CardImg src={imageUrl} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardButton href={buttonUrl}>{buttonText}</CardButton>
      </CardBody>
      <button type="button" onClick={handleBookmark}>
        <Heart weight="fill" size={24} />
      </button>
    </CardContainer>
  );
};

export default Card;
