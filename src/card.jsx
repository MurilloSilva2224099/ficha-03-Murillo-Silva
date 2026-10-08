function Card({ card }) {
  return (
    <article>
      <h2>{card.name}</h2>
      <p>Tipo: {card.type}</p>
      <p>Ataque: {card.attack}</p>
      {card.attack >= 15 && <span>Forte</span>}
 
    </article>
  );
}
export default Card;
