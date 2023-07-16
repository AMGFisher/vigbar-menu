export default function Liquor({data}) {
    const liquor = data.filter((drink) => drink.Category === "Liquor")

    return (
        <>
        <div className="box">
            <h1 id="liquor">Liquor & Spirits</h1>
            <h2>Vodka</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Vodka")
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
            <h2>Gin</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Gin")
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
            <h2>Rum</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Rum")
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
            <h2>Tequila</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Tequila")
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
            <h2>Mezcal</h2>        <ul>
          {liquor
            .filter((drink) => drink.Type === "Mezcal")
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
            <h2>Bourbon</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Bourbon")
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
            <h2>Rye</h2>        <ul>
          {liquor
            .filter((drink) => drink.Type === "Rye")
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
            <h2>Scotch</h2>        <ul>
          {liquor
            .filter((drink) => drink.Type === "Scotch")
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
            <h2>Japanese</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Japanese")
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
            <h2>Irish</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Irish")
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
            <h2>Brandy</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Brandy")
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
            <h2>Amaro & Liqueur</h2>
            <ul>
          {liquor
            .filter((drink) => drink.Type === "Amaro")
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
    )
    
    }