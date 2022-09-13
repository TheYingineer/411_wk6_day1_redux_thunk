const url =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car,
  };
};

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};

export const fetchmakes = () => {
  return (dispatch) => {
    fetch(url).then((res) => res.json())
    .then(res=>{
        const action = {
            type: "FETCH_MAKES", 
            value: res.Results,
        }
    dispatch(action)
    })
  };
};
// Now that the menu is working we need to create the action to delete a certain row. Make a new action called `deleteMake`. It will accept one argument that represents the index we want to delete. We've deleted rows from tables before so look back at previous homework assignments to write an appropriate action and reducer that handles this use case. Remember to also add your new action to the `mapDispatchToProps` function in your container.


export const removemakes = (index) => {
  return {
    type: "DELETE_MAKE",
    value: index,
  };
};