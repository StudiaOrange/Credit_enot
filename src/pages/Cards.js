import React from 'react';
import CardLoan from '../components/DebitCards';
import vtb from '../images/vtb.png'; // Импортируем картинку

const Cards = () => {
  const demoData = [
    {
      bank: 'ВТБ - Дебетовая карта "МИР Весёлая "',
      opis: 'привет мир',
      image: vtb, // Ссылка на картинку
      link: 'https://fin-lg.com/aff_c?aff_id=145356&offer_id=7332&p=10695&erid=2W5zFJuUpi5'
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
      <div className="cards-grid">
        {demoData.map((item) => (
          <CardLoan key={item.bank} {...item} />
        ))}
      </div>
      
    </div>
  );
};
export default Cards;