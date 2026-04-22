import React from 'react';
import CardLoan from '../components/CardLoan';
import rus from '../images/rus.png'; // Импортируем картинку
import sov from '../images/sov.png'; // Импортируем картинку
import ren from '../images/renesans.png'; // Импортируем картинку
import atb from '../images/atb.jpg'; // Импортируем картинку
import tbank from '../images/tbank.png'; // Импортируем картинку
import alfa from '../images/alfa.png'; // Импортируем картинку




const ConsumerLoans = () => {
  const demoData = [
      {
      bank: 'Русский Стандарт Банк - Кредит наличными ',
      image: rus, // Ссылка на картинку
      rate: 'до 65% годовых',
      term: 'до 60 месяцев',
      sum: 'до 3 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=6459&p=10695&erid=2W5zFH1t71s'
    },
      {
      bank: 'Совкомбанк - Кредит наличными"Прогресс"',
      image: sov, // Ссылка на картинку
      rate: 'до 29.4% годовых',
      term: 'до 5 лет',
      sum: 'до 5 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=5199&p=10695&erid=2W5zFGFFjxt'
    },
      {
      bank: 'Ренессанс Банк - Кредит наличными',
      image: ren, // Ссылка на картинку
      rate: 'до 39,9% годовых',
      term: 'до 84 месяцев',
      sum: 'до 2 000 000 ₽',
      link: 'https://go.leadgid.ru/aff_c?aff_id=145356&offer_id=6138&p=10695&erid=2W5zFJeimse'
    },
      {
      bank: 'АТБ - Кредит наличными',
      image: atb, // Ссылка на картинку
      rate: 'до 38,465% годовых',
      term: 'до 84 месяцев',
      sum: 'до 5 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=2583&p=10695&erid=LjN8KGDaw'
    },
      {
      bank: 'Т-Банк - рефинансирование',
      image: tbank, // Ссылка на картинку
      rate: 'до 39,905% годовых',
      term: 'до 5 лет',
      sum: 'до 5 000 000 ₽',
      link: 'https://my.saleads.pro/s/gf6yt?erid=2VtzqvB9uxS'
    },
      {
      bank: 'Т-Банк - кредит',
      image: tbank, // Ссылка на картинку
      rate: 'до 42,090% годовых',
      term: 'до 15 лет',
      sum: 'до 30 000 000 ₽',
      link: 'https://my.saleads.pro/s/jscd1?erid=2VtzqxkwKg2'
    },
      {
      bank: 'Альфа Банк - рефинансирование кредита',
      image: alfa, // Ссылка на картинку
      rate: 'до 53,99% годовых',
      term: 'до 15 лет',
      sum: 'до 30 000 000 ₽',
      link: 'https://my.saleads.pro/s/23z7g?erid=2Vtzqw5BBDp'
    },
      {
      bank: 'Альфа Банк - кредит наличными',
      image: alfa, // Ссылка на картинку
      rate: 'до 36,70% годовых',
      term: 'до 5 ktn',
      sum: 'до 7 500 000 ₽',
      link: 'https://my.saleads.pro/s/blewj?erid=2VtzqwLPiD3'
    },
   ];

   return (
     <div className="page">

       <div className="cards-grid">
         {demoData.map((item) => (
           <CardLoan key={item.bank} {...item} />
         ))}
       </div>
       
     </div>
   );
 };
 export default ConsumerLoans;