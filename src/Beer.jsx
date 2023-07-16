export default function Beer({ data }) {
  const beer = data.filter((drink) => drink.Category === "Beer");

  return (
    <>
      <div className="box">
        <h1 id="beer">Beer</h1>
        <h3>+ A Well or Jello Shot for $5</h3>
        <h2>Lagers</h2>
        <ul>
          {beer
            .filter((drink) => drink.Type === "Lager")
            .map((drink) => (
                <li key={drink.id}>
                <div className="drink">
                  <div>{drink.Name}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>

        <h2>Ales</h2>
        <ul>
          {beer
            .filter((drink) => drink.Type === "Ales")
            .map((drink) => (
                <li key={drink.id}>
                <div className="drink">
                  <div>{drink.Name}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>

        <h2>Seltzer</h2>
        <ul>
          {beer
            .filter((drink) => drink.Type === "Seltzer")
            .map((drink) => (
                <li key={drink.id}>
                <div className="drink">
                  <div>{drink.Name}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>

        <h2>Cider</h2>
        <ul>
          {beer
            .filter((drink) => drink.Type === "Cider")
            .map((drink) => (
              <li key={drink.id}>
                <div className="drink">
                  <div>{drink.Name}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>
        <h2>Wheat Beer</h2>
        <ul>
          {beer
            .filter((drink) => drink.Type === "Wheat Beer")
            .map((drink) => (
                <li key={drink.id}>
                <div className="drink">
                  <div>{drink.Name}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>
        <h2>Sours</h2>
        <ul>
          {beer
            .filter((drink) => drink.Type === "Sours")
            .map((drink) => (
                <li key={drink.id}>
                <div className="drink">
                  <div>{drink.Name}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>
        <h2>Non-Alcoholic</h2>
        <ul>
          {beer
            .filter((drink) => drink.Type === "Non-Alcoholic")
            .map((drink) => (
                <li key={drink.id}>
                <div className="drink">
                  <div>{drink.Name}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
