function Garage(props) {
    const cars = props.cars;
    return (
      <>
        <h1>Garage</h1>
        {/* {cars.length > 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2> */}
        {cars.length > 0?
        <h2>
            You have {cars.length} cars in your garage.
          </h2>:
          "You Have no cars in your garage"}
      </>
    );
  }

  export default Garage;