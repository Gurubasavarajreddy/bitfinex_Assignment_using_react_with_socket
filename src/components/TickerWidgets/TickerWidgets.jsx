import React from 'react'
import './TickerWidgets.css'
import { connect } from 'react-redux'

function TickerWidgets({tickerDetail}) {
    const [
        CHANNEL_ID=null,
        [
          BID=0,
          BID_SIZE=0,
          ASK=0,
          ASK_SIZE=0,
          DAILY_CHANGE=0,
          DAILY_CHANGE_RELATIVE=0,
          LAST_PRICE=0,
          VOLUME=0,
          HIGH=0,
          LOW=0
        ]=[]
      ]=tickerDetail;
    return (
        <div className="TickerWidgets">
         <div className="TickerWidgets_one">
           <h5><span>B</span></h5>
         </div>
         <div className="TickerWidgets_two">
           <div><span>BTC/USD</span></div>
           <div>
             <span>{LAST_PRICE}</span>
           </div>
           <div><span>VOL</span><span>{VOLUME?.toFixed(2)+"USD"}</span></div> 
           <div><span>{DAILY_CHANGE?.toFixed(2)}</span><span>({(DAILY_CHANGE_RELATIVE*100)?.toFixed(2)}%)</span></div>
           <div><span>LOW</span><span>{LOW?.toFixed(2)}</span></div>
           <div><span>HIGH</span><span>{HIGH?.toFixed(2)}</span></div>
         </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    tickerDetail: state?.liveDetailsReducer.tickerDetails,
})

export default connect(mapStateToProps, null)(TickerWidgets)
