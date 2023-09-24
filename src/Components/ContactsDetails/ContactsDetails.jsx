import { useLoaderData } from "react-router-dom";

 

const ContactsDetails = () => {
  const contacts = useLoaderData() 
  const { name,  email}= contacts;
  return (
    <div className="text-2xl text-center font-bold mt-6 border-4 h-40 w-96 mx-auto p-4 border-red-200 rounded-lg">
      <h2>Name: {name}</h2> 
      <h5>Email: {email}</h5>
    </div>
  );
};

export default ContactsDetails;