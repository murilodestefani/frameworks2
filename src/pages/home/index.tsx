import Card from "../../components/card/card";
import bdImg from "../../assests/img/produto.jpg";
import "./style.css";

export function Home() {
  const cardData = {
    imageUrl: bdImg,
    title: "Titulo Card",
    text: "Texto que aparece no corpo de card",
    buttonText: "Ver Detalhes",
    buttonUrl: "#",
  };

  return (
    <div>
      <div className="cabecalho">
        <h1 className="title">Home</h1>
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit beatae
          ea quo voluptas consequatur, fugiat blanditiis repellat quis eius
          eaque, quibusdam voluptates autem in. Accusantium eligendi expedita
          facilis in corporis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam sed consectetur quod et optio eveniet unde
          saepe consequuntur perspiciatis, suscipit odit quis eligendi ducimus
          eum qui laborum natus aliquid dignissimos?
        </p>
      </div>

      <div className="card-list">
        <Card {...cardData} />
        <Card {...cardData} />
        <Card {...cardData} />
      </div>
    </div>
  );
}
