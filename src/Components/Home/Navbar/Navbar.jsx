import { Link } from "react-router-dom"; 

 
const Navbar = () => {
  return (
    <div>
       <nav className="shadow-lg p-4">
        <ul className="flex justify-end mr-4 gap-6 text-3xl font-bold"> 
          <Link to='/'>Home</Link>
          <Link to='/users'>Users</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </nav> 
    </div>
  );
};

export default Navbar;