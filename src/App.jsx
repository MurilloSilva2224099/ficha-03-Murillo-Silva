import { useState } from "react";
import Card from "./Card";

const cards = [
  { name: "Duarte", type: "Criatura", attack: 8, defense: 0 },
  { name: "Tiago", type: "Criatura", attack: 15, defense: 8 },
  { name: "Murillo", type: "Criatura", attack: 50, defense: 8 },
  { name: "Afonso", type: "Criatura", attack: 1, defense: 8 },
  { name: "Diogo", type: "Criatura", attack: 45, defense: 8 },
];

function App() {
  const [filter, setFilter] = useState("all");
  const visibleCards = cards.filter((card) => {
  if (filter === "creatures") {
    return card.type === "Criatura";
  }

  if (filter === "spells") {
    if (filter === "spells") {
  return card.type === "Feitiço";
}
  }

  return true;
});
  return (
    <main>
      <h1>A minha coleção</h1>
      <button onClick={() => setFilter("all")}>
  Todas
</button>

<button onClick={() => setFilter("creatures")}>
  Só criaturas
</button>

<button onClick={() => setFilter("spells")}>
  Só feitiços
</button>

     <h2>Tenho {visibleCards.length} de {cards.length} cartas à vista</h2>
    {visibleCards.map((card) => (
  <Card key={card.name} card={card} />
))}
    </main>
  );
}

export default App;
