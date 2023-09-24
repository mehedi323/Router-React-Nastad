import { Link } from "react-router-dom";

 
const User = ({user}) => {
  const {id, name, phone, email}= user;
  return (
    <div className="border-2 border-sky-500 rounded-lg mt-4 ">
      <h2>{name}</h2>
      <h3>Email: {email}</h3>
      <h4><small>{phone}</small></h4>
      <Link to={`/user/${id}`}> 
        <button className="bg-blue-600 p-3 rounded-lg mb-4 mt-3 text-white text-xl">Click More</button>
      </Link>
    </div>
  );
};

export default User;