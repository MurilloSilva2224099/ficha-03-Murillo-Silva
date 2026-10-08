import Card from "./Card";

const cards = [
  { name: "Duarte", type: "Criatura", attack: 8, defense: 0 },
  { name: "Tiago", type: "Criatura", attack: 15, defense: 8 },
  { name: "Murillo", type: "Criatura", attack: 50, defense: 8 },
  { name: "Afonso", type: "Criatura", attack: 1, defense: 8 },
  { name: "Diogo", type: "Criatura", attack: 45, defense: 8 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
      <h2>Tenho {cards.length} cartas</h2>

      {cards.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </main>
  );
}

export default App;
