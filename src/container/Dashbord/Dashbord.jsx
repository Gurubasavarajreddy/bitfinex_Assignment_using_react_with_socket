import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {addTikerWidzetDetails} from '../../redux/actions'
import './Dashbord.css'
import TickerWidgets from '../../components/TickerWidgets/TickerWidgets'
import OrderBook from '../../components/OrderBook/OrderBook'

function Dashbord({addTikerWidzetDetails}) {
    const[socketStore,setSocketStore]=useState(null)

    const msg = JSON.stringify({ 
        event: 'subscribe', 
        channel: 'ticker', 
        symbol: 'tBTCUSD' 
      })
    useEffect(()=>{
        const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
        setSocketStore(socket)
        
        
        socket.addEventListener('open', function (event) {
          socket.send(msg);
        });
        socket.addEventListener('message', function (event) {
          if(Array.isArray(JSON.parse(event.data))){
              addTikerWidzetDetails(JSON.parse(event.data))
          }
        });
        socket.addEventListener('error', function (event) {
            addTikerWidzetDetails(JSON.parse(event.data))
          });
          socket.addEventListener('close', (event) => {
            console.log('The connection has been closed successfully.');
          });
          },[])

    const onCloseSocket=()=>{
        socketStore.close()
    }
    const onOpenSocket=()=>{
        socketStore.send(msg)
    }
    return (
        <main className="dashbord">
          <section className="dashbord_ticker_widget">
           <TickerWidgets/>
           <button onClick={onOpenSocket}>open connection</button>
           <button onClick={onCloseSocket}>close connection</button>
          </section>
          <section className="dashbord_orderbook">
           <OrderBook/>
          </section>
        
        </main>
    )
}

const mapDispatchToProps = {
    addTikerWidzetDetails
}

export default connect(null, mapDispatchToProps)(Dashbord)
