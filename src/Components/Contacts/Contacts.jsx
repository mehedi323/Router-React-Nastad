import { Link } from "react-router-dom";

 

const Contacts = ({contacts}) => {
  const {id, name, body, email}= contacts;
  return (
    <div className="border-2 border-l-sky-900 rounded-2xl mt-4 text-purple-700">
      <h3>Name: {name}</h3>
      <h5>Email: {email}</h5>
      <h5><small>Body: {body}</small></h5>
      <Link to={`/contacts/${id}`}>
        <button className="bg-blue-600 p-3 rounded-lg mb-4 mt-3 text-white text-xl">Show Details</button>
      </Link>
    </div>
  );
};

export default Contacts;