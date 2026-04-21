import React from 'react';
import CardLoan from '../components/CardLoan';
import img1 from '../images/tin.jpg'; // Импортируем картинку

const Loans = () => {
  const demoData = [
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    {
      bank: 'БыстрыйЗайм',
      image: img1, // Ссылка на картинку
      rate: '12%',
      term: 'до 30 дней',
      sum: 'до 30 000 ₽',
      link: '#'
    },
    // Добавь еще как минимум до 20 объектов, чтобы заполнить страницу.
    // Используй разные цвета в ссылке placehold.co, чтобы визуально различать их.
    // Например:
    // image: 'https://placehold.co/350x160/a9a9a9/a9a9a9/png?text=МФО+4'
];

return (
  <div className="page">
    <h2>Микрозаймы</h2>
    <div className="cards-grid">
      {demoData.map((item) => (
        <CardLoan key={item.bank} {...item} /> /* Передаем все данные в компонент */
      ))}
    </div>
  </div>
);
};

export default Loans;