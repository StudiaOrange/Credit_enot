import React from "react";
import CardLoan from "../components/CardLoan";
import draiv from '../images/draiv.png'; // Импортируем картинку
import car from '../images/car.png'; // Импортируем картинку
import dobro from '../images/dobro.png'; // Импортируем картинку
import sovk from '../images/sov.png'; // Импортируем картинку
import tbank from '../images/tbank.png'; // Импортируем картинку

const CollateralLoans = () => {
 const demoData = [
     {
      bank: 'ДрайвЗайм - Залог ПТС',
      image: draiv, // Ссылка на картинку
      rate: 'до 8,3% в месяц',
      term: 'до 3 лет',
      sum: 'до 3 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=6864&p=10695&erid=2W5zFHwPkAU'
    },
     {
      bank: 'CarMoney - займ на карту до 1 млн',
      image: car, // Ссылка на картинку
      rate: ' до 128,101% годовых',
      term: 'до 48 месяцев',
      sum: 'до 1 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=6848&p=10695&erid=2W5zFJEsCvt'
    },
     {
      bank: 'Доброзайм - Выдача под залог ПТС',
      image: dobro, // Ссылка на картинку
      rate: '89% в год',
      term: 'до 5 лет',
      sum: 'до 1 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=6625&p=10695&erid=LjN8KZcbU'
    },
     {
      bank: 'Совкомбанк - Кредит наличными под залог недвижимости «Выгодный»',
      image: sovk, // Ссылка на картинку
      rate: '19,9% годовых',
      term: 'до 180 месяцев',
      sum: 'до 30 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=6584&p=10695&erid=2W5zFGMBh6G'
    },
     {
      bank: 'Совкомбанк - Кредит наличными под залог авто «Выгодный»',
      image: sovk, // Ссылка на картинку
      rate: '14,9% годовых',
      term: 'до 60 месяцев',
      sum: 'до 15 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=6221&p=10695&erid=2W5zFGGjjFE'
    },
     {
      bank: 'Т-Банк - Кредит под залог недвижимости',
      image: tbank, // Ссылка на картинку
      rate: ' 31,9% годовых',
      term: 'до 15 лет',
      sum: 'до 30 000 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=4740&p=10695&erid=LjN8KFSkV'
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
export default CollateralLoans;