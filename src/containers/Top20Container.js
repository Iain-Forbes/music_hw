import {useState, useEffect} from "react"
import Top20Details from "../components/Top20Details";


const Top20Container = () => {

    const [top20, setTop20] = useState(null);
  
    const getTop20 = () => {
      console.log("getting Top 20 Information");
    

      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`).then((res) => {
      return res.json()
      })
      .then((data) => {
        
        setTop20(data);
      })
    }
  
    useEffect(() =>{
      getTop20();
    }, [])
  
    return (
      <>
        <h1>UK Top 20 </h1>
        <Top20Details top20={top20} />
      </>
    )
  
  }
  
  export default Top20Container;