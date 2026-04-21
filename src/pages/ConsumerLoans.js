import React from 'react';
import CardLoan from '../components/CardLoan';

const ConsumerLoans = () => {
  const demoData = [
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
       <h2>Потребительские кредиты</h2>
       <div className="cards-grid">
         {demoData.map((item) => (
           <CardLoan key={item.bank} {...item} />
         ))}
       </div>
       <p className="note">Ставки указаны минимальные. Итоговая ставка зависит от вашей кредитной истории и дохода.</p>
     </div>
   );
 };
 export default ConsumerLoans;