import { useEffect, useState } from "react";

function App() {
  const [crypto, setCrypto] = useState()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    console.log("Use Effect called")
  }, [load, crypto])

  const loadData = () => {
      fetch("https://api2.binance.com/api/v3/ticker/24hr").then((response)=>response.json()).then((data)=>{
      setCrypto(data)
    })
  }

  return (
    <div>
      <button onClick={loadData}>Load Data</button>
      <button onClick={()=>setLoad(!load)} style={{margin:"10px", padding: "4px", color: "white", backgroundColor: "#ff4500"}}>Test Use Effect</button>
<table>
  <thead>
  <tr>
    <th>Crypto</th>
    <th>Open Price</th>
    <th>Low Price</th>
    <th>Volume</th>
  </tr></thead>
    <thead>
 { crypto && crypto.map((data) => <tr key={data.symbol}>
    <td>{data.symbol}</td>
    <td>{data.openPrice}</td>
    <td>{data.lowPrice}</td>
    <td>{data.volume}</td>
  </tr>)}</thead>
</table>
    </div>
  );
}

export default App;