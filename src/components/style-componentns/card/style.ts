import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  margin: 50px;
  border: 0.4rem solid #212427;
  border-radius: 2rem;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.6rem;
  gap: 0.8rem;
`;
const CardTitle = styled.h5`
  font-size: 1.8rem;
  font-weight: 800;
`;

const CardText = styled.p`
  color: #262626;
`;

const CardButton = styled.button`
  background-color: #9f0000;
  border: 0;
  border-radius: 0.8rem;
  color: #fafafa;
  padding: 0.8rem 1.6rem;
  font-weight: 800;
  margin-top: 1rem;

  &:hover {
    background-color: #600000;
    cursor: pointer;
  }
`;

export { CardContainer, CardImg, CardBody, CardTitle, CardText, CardButton };
