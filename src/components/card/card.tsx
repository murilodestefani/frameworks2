import { CardBody, CardButton, CardContainer, CardImg, CardText, CardTitle } from "../style-componentns/card/style";

interface CardProps {
    imageUrl: string;
    title: string;
    text: string;
    buttonText: string;
    buttonUrl: string;
}

const Card: React.FC<CardProps> = ({imageUrl, title, text, buttonText, buttonUrl}) => {
    return(
        <CardContainer>
            <CardImg src={imageUrl} />
            <CardBody>
                <CardTitle>{title}</CardTitle> 
                <CardText>{text}</CardText>
                <CardButton href={buttonUrl}>{buttonText}</CardButton>
            </CardBody>
        </CardContainer>
    )
}

export default Card;