import { useLoaderData } from "react-router-dom";
import User from "../User/User";

 
const Users = () => {
  const users = useLoaderData() 
  return (
    <div className="text-3xl font-bold text-center capitalize mt-12  ">
      <h3 className="mb-6 shadow-xl ">This is Users address </h3> 
       <div className="grid grid-cols-3 gap-4">
       {
        users.map(user=> <User key={user.id} user={user}></User>)
      }
       </div>
    </div>
  );
};

export default Users;