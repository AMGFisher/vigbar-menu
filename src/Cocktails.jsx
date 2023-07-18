export default function Cocktails({ data }) {
  const cocktails = data.filter((drink) => drink.Category === "Cocktail");
  console.log(cocktails);

  return (
    <>
      <div className="box">
        <h1 id="cocktails">Cocktails</h1>
        <h2>House Cocktails</h2>
        <ul>
                      {cocktails
            .filter((drink) => drink.QA === null)
            .map((drink) => (
              <li>
                <div className="drink">
                  <div>{drink.Name} - {drink.Type}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>
        <h2>Recommendations</h2>
        <ul>
          {cocktails
            .filter((drink) => drink.QA !== null)
            .map((drink) => (
              <li>
                <div className="qa">Q: {drink.QA}</div>
                <div className="drink">
                  <div>A: {drink.Name} - {drink.Type}</div>
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
