import { useState, useEffect } from "react";

export default function Hukamnamapage(){
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
       useEffect(() => {
       
        const fetchHukamnama = async () => {
          try {
            setLoading(true);
            const response = await fetch('https://api.gurbaninow.com/v2/hukamnama/today');
            
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const fetchData = await response.json();
            setData(fetchData);
    
          } catch (err) {
            setError(err.message);
             } finally {
            setLoading(false);
          }
        };
    
        fetchHukamnama();
      }, []); 
      
    
      if (loading) return <div>Loading...</div>
      if(error)  return <div>Error</div>
    
      const element =[]
    
      for (let i = 0; i < data.hukamnamainfo.count; i++) {
             element.push(
                <p key={i}><div className="pn">{data.hukamnama[i].line.gurmukhi.unicode}</div>  <br />
                <div className="en">{data.hukamnama[i].line.translation.english.default}</div>        
                </p>
             )
      }
        
    return(
        <div id="hukamnamapage">
         <h2>ਮੁੱਖਵਾਕ ਸੱਚਖੰਡ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ, ਸ੍ਰੀ ਅੰਮ੍ਰਿਤਸਰ</h2>
         {element}
        </div>
    )
}