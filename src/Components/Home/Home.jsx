import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar/Navbar"; 
import Footer from "../Footer/Footer";
 

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <h2 className="text-3xl font-bold text-green-900 text-center mt-6 uppercase">this is a home Components</h2> 
      <Navbar></Navbar>   
      <div className="text-4xl font-bold text-blue-900 text-center mt-12"> 
        {
          navigation.state === 'loading' ? <p>loading......</p>:
          <Outlet></Outlet>
        }
       
      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;