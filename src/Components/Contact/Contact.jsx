import { useLoaderData } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

 
const Contact = () => {
  const contact = useLoaderData()
  console.log(contact);
  return (
    <div className="text-2xl font-bold text-red-500 text-center mt-3 capitalize">
      <h3>this is a user contact Components</h3> 
      <div className="grid grid-cols-3 gap-4 m-6">
        {
          contact.map(contacts => <Contacts key={contacts.id} contacts={contacts}></Contacts>)
        }
      </div>
    </div>
  );
};

export default Contact;