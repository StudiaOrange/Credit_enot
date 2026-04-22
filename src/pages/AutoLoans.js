import React from "react";
import CardLoan from "../components/CardLoan";
import fin from '../images/finters.png'; // Импортируем картинку


const AutoLoans = () => {
 const demoData = [
     {
      bank: 'Finters',
      image: fin, // Ссылка на картинку
      rate: '0.8% в день',
      term: 'до 24 недель',
      sum: 'до 50 000 ₽',
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=7307&p=10695&erid=2W5zFH4LCZF'
    },
     {
      bank: 'БыстрыйЗайм',
      image: 'img1', // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
     {
      bank: 'БыстрыйЗайм',
      image: 'img1', // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
     {
      bank: 'БыстрыйЗайм',
      image: 'img1', // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
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
export default AutoLoans;