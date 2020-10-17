import React, { useState } from 'react';
import { FiCpu, FiSettings } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Menu from '../../components/Menu';
import { QuemSomos, SectionOne, Produtos } from './styles';
import Button from '../../components/Button';

const Home = () => {
  const [products] = useState([
    {
      titulo: 'Produtos',
      icon: FiCpu,
      description: 'Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um',
      link: '#',
    },
    {
      titulo: 'Serviços',
      icon: FiSettings,
      description: 'Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um',
      link: '#',
    },
    {
      titulo: 'Contato',
      icon: FaWhatsapp,
      description: 'Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um',
      link: '#',
    },
  ]);

  return (
    <>
      <Menu />
      <SectionOne>
        <div>
          Oferecemos a maior linha de
          equipamentos
          para a sua empresa
        </div>
      </SectionOne>

      <QuemSomos>
        <h1> QUEM SOMOS NÓS</h1>
        <p>
          Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500,
          als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese
          durcheinander warf um ustrie.
          Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500,
          als ein unbekannter Schriftsteller ei
        </p>
      </QuemSomos>
      <Produtos>
        {products.map((product) => (
          <div key={product.titulo}>
            <product.icon size={40} />
            <h2>
              {product.titulo}
            </h2>
            <p>
              {product.description}
            </p>
            <Button>Saiba Mais</Button>
          </div>
        ))}
      </Produtos>
    </>
  );
};

export default Home;
