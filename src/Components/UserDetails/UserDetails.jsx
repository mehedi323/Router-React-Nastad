import { useLoaderData, useNavigate } from "react-router-dom";

 
const UserDetails = () => {

  const user = useLoaderData()
  const navigate = useNavigate();
  const {name, email, phone}= user;

  const handleGoBack= () =>{
    navigate(-1)
  };
  return (
    <div className="text-2xl text-center font-bold mt-6 border-4 h-36 w-96 mx-auto p-4 border-red-200 rounded-lg">
      <h2>Name: {name}</h2>
      <h3><small>Email:{email}</small></h3>
      <h5>Phone: {phone}</h5>
      <button className="bg-blue-400 p-3 rounded-lg" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;