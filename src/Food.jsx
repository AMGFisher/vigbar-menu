export default function Food({ data }) {
  const food = data.filter((drink) => drink.Category === "Food");

  return (
    <>
      <div className="box">
    <h1 id="food">Food</h1>
    <h2>Pizza</h2>
    <h3>Courtesy of Lombardi's Pizzeria</h3>
    <ul>
          {food
            .filter((drink) => drink.Type === "Pizza")
            .map((drink) => (
              <li>
                <div className="drink">
                  <div>{drink.Name}</div>
                  <div>${drink.Price}</div>
                </div>
                <div className="description">{drink.Description}</div>
              </li>
            ))}
        </ul>
        <h3>Kitchen Closes 9:30PM</h3>
        <h3>Sorry, Substitutions Cannot Be Accommodated</h3>
        <br/>
        <h4>If pizza isn't your thing, please feel free to bring in anything you want from outside. This neighborhood has fantastic restaurants for you to enjoy. Hell, go pay them a visit! Here are some suggestions:</h4>
        <div id="restaurants">
            <h5>Thai - Thai Diner</h5>
            <h5>Turkish - Little Rascal</h5>
            <h5>Mexican - El Gallo</h5>
            <h5>Italian - Piacere</h5>
            <h5>Japanese - Kimika</h5>
            <h5>Brunch - Egg Shop</h5>
        </div>
      </div>
    </>
  );
}
