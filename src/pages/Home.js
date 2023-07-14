import '../App.css'
import MyDeals from '../features/deals-won';
import MyLeads from '../features/leads';
import MyPie from '../features/win-lose-ratio';
import MyBar from '../features/meetings';
const Home = () => {
    return (
      <div>
        <div className="headerTwo">
          <h2>Home Page</h2>
        </div>

        <div className='text'>
          <div className = "graph leads-picked-up">
              <h2>Leads picked up</h2>
              <MyLeads />
              
          </div>
          <div className = "graph meetings-booked">
              <h2>Meetings booked</h2>
              <MyBar />
          </div>
          <div className = "graph win-lose-ratio">
              <h2>Win / Lose ratio</h2>
              <MyPie />
          </div>
          <div className = "graph deals-won">
              <h2>Deals won</h2>
              <MyDeals />
          </div>
          
        </div>
      </div> 
    )
  };
  
  export default Home;