import React from "react";
import CardLoan from "../components/CardLoan";

const CollateralLoans = () => {
 const demoData = [
     {
      bank: 'БыстрыйЗайм',
      image: '', // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
     {
      bank: 'БыстрыйЗайм',
      image: '', // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
     {
      bank: 'БыстрыйЗайм',
      image: '', // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
     {
      bank: 'БыстрыйЗайм',
      image: '', // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
 ];

 return (
   <div className="page">
   <h2>Кредиты под залог</h2>
   <div className="cards-grid">
   {demoData.map((item) => (
   <CardLoan key={item.bank} {...item} />
   ))}
   </div>
   <p className="note">⚠️ Кредиты под залог — это риск потерять имущество при невыплате. Внимательно читайте договор.</p>
 </div>
 );
};
export default CollateralLoans;