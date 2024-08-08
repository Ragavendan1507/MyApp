import { useEffect, useState } from "react";
import axios from "axios";

function Test() {

  const [getData,setData]= useState([])

  useEffect(() => {
    getDonutData();
  }, []);



  function getDonutData() {
    axios
      .get("http://localhost:9001/getApiData")
      .then((res) => {
        // console.log("hiii", res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
      })
      .finally(() => {});
  }

  const final = getData.map((data) => {
    const batters = data.batters;
    const toppings = data.topping;
    batters.toppings = toppings; 
    delete data.topping;          
    return data;                
  });

  console.log(final)

  return (
    <div>
      {final.length > 0 ? (
        final.map((data, index) => (
          <div >
            <h3>Data {index + 1}</h3>
            <pre>{JSON.stringify(data,null,2)}</pre>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Test;
