import React,{useEffect,useState} from 'react'
import './OrderBook.css'


function OrderBookRow({data=[]}) {
  const[ PRICE=0,COUNT=0,AMOUNT=0]=data;

    return (
        <tr>
            <td>{Number(COUNT)?.toFixed(2)}</td>
            <td>{Number(AMOUNT)?.toFixed(2)}</td>
            <td>{Number(PRICE)?.toFixed(2)}</td>
        </tr>
    )
}


export default function OrderBook() {
    const [data,setdate]=useState([])
    useEffect(()=>{
        const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
        let msg = JSON.stringify({ 
            event: 'subscribe', 
            channel: 'book', 
            symbol: 'tBTCUSD' 
          })
        socket.addEventListener('open', function (event) {
          socket.send(msg);
        });
        socket.addEventListener('message', function (event) {
          if(Array.isArray(JSON.parse(event.data))){            
              setdate(prevData=>{
                if(prevData.length < 10){
                 return [...prevData,JSON.parse(event.data)[1]]
                }else{
                  return[]
                }})
          }
        }); 
          },[])
      
    return (
        <div className="orderbook">
            <table style={{width: '100%',position:"relative"}}>
            <thead>
                <tr style={{padding:"5px 0px",height:"30px"}}>
                  <th>Count</th>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
           </thead>
           <tbody>
                {
                  data.map((data)=><OrderBookRow data={data}/>)
                }
            </tbody>
            </table>
        </div>
    )
}
