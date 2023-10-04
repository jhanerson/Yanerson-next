import React from 'react';
import { Card1 } from "./components/Card1";
import { Card2 } from './components/Card2';

const Home = () => {
  const numberOfCards = 11;

  const card2Data = [
    {
      datetime: "Rango1",
      title: "Paginas web",
      categories: ['web', 'servicios']
    },
    {
      datetime: "Rango2",
      title: "marketing",
      categories: ['diseño', 'creativo']
    },
    {
      datetime: "Rango3",
      title: "desarrollo",
      categories: ['sistemas', 'industria']
    },
    {
      datetime: "Rango1",
      title: "Paginas web",
      categories: ['web', 'servicios']
    },
    {
      datetime: "Rango2",
      title: "marketing",
      categories: ['diseño', 'creativo']
    },
    {
      datetime: "Rango",
      title: "desarrollo",
      categories: ['sistemas', 'industria']
    },
    {
      datetime: "Rango",
      title: "desarrollo",
      categories: ['sistemas', 'industria']
    }
  ];

  return (
    <>
      <Card1 />
      <br key="spacer"></br>
      {card2Data.map(({ datetime, title, categories }, index) => (
        <>
          <Card2
            datetime={datetime}
            title={title}
            categories={categories}
            cardNumber={index + 1}
          />
          <br key={`spacer-${index}`} />
        </>
      ))}
    </>
  );
};

export default Home;
