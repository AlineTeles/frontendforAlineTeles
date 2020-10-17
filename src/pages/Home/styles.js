import styled from 'styled-components';

import sectionOneImage from '../../assets/sectionOne.png';
import linhasImage from '../../assets/linhas.png';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;

export const SectionOne = styled(Section)`
    background-color: #1E3E59;
    width: 100%;
    min-height: 80vh;
    display: block;

    div{
      background: rgba(0, 0, 0, 0.25);
      max-width: max(40vw, 300px);
      position: absolute;
      top: 40%;
      -ms-transform: translateY(-40%);
      transform: translateY(-40%);
      margin-left: 48px;
      padding: 25px;
      color: #B0C4DE;
      font-size: 2rem;
      text-align: center;
  }

    &:before{
      content: '';
      background-image: url(${sectionOneImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      min-height: 80vh;
      display: block;
      mix-blend-mode: overlay;
}
`;

export const QuemSomos = styled(Section)`
  background-image: url(${linhasImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 200px 10px;

  p{
    max-width: 60%;
    text-align: center;
  }
`;

export const Produtos = styled(Section)`
  gap: 20px;
  >div {
    max-width: 30%;
    background: rgba(30, 62, 89, 0.63);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: -5px 9px 5px rgba(0,0,0,0.8);

    p{
      margin-bottom: 15px;
    }
  }
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;
