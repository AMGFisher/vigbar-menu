export default function Wine({ data }) {
  const wine = data.filter((drink) => drink.Category === "Wine");

  return (
    <>
      <div className="box">
        <h1 id="wine">Wine</h1>
        <h2>Red</h2>
        <ul>
          {wine
            .filter((drink) => drink.Type === "Red")
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
        <h2>Rose</h2>
        <ul>
          {wine
            .filter((drink) => drink.Type === "Rose")
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

        <h2>White</h2>
        <ul>
          {wine
            .filter((drink) => drink.Type === "White")
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
        <h2>Orange</h2>
        <ul>
          {wine
            .filter((drink) => drink.Type === "Orange")
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

        <h2>Sparkling</h2>
        <ul>
          {wine
            .filter((drink) => drink.Type === "Sparkling")
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
        <h3>Love a type of wine that we don't carry?</h3>
        <h3>Give us a recommendation!</h3>
      </div>
    </>
  );
}
