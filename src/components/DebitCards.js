import './../App.css'; // Импорт стилей из корня

const Debitcards = ({ bank, opis, image, link }) => {
  return (
    <div className="Debitcard">
      {/* Блок для изображения */}
      <div className="card-image-debit">
        <img src={image} alt={bank} />
      </div>
      
      <div className="card-content-debit">
        <h3>{bank}</h3>
        <p><strong>Описание:</strong> {opis}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-apply">Оформить</a>
      </div>
    </div>
  );
};

export default Debitcards;