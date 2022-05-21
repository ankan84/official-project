import './App.css';
import Navbar from './Components/Navbar';
import SectionLeftCard from './Section/section1/SectionLeftCard';
import SectionrightCard from './Section/section1/SectionrightCard';
import Header from './Components/wiliam/Header';
function App() {


  return (
  
    <>  
        
         <Header></Header>
         <Navbar></Navbar>
        
        <div className="container" style={{marginTop:"10px"}}>
        <div className="row">
        <div className="col-md-8" style={{marginLeft:"28px"}} ><SectionLeftCard></SectionLeftCard></div>
        <div className="col-md-3" style={{marginLeft:"7px"}}><SectionrightCard></SectionrightCard></div>
        
        </div>
        </div>


        
    </>
  );
}

export default App;
