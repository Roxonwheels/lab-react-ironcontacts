import './App.css';
import Contacts from "./contacts.json";
import { useState } from "react";


function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5))
  const remainingContacts = Contacts.slice(5);
  
  const addNewContact = () => {
    const newContact = Math.floor(Math.random() * (remainingContacts.length))
    const randomContact = remainingContacts.splice(newContact,1)[0]
    setContacts([...contacts, randomContact])
  };

  const sortByName = () => {
    const nameContacts = [...contacts].sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else{
        return -1
      }
    })
    return setContacts(nameContacts)
  }
  
  const sortByPopularity = () => {
    const popularityContacts = [...contacts].sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1
      } else{
        return -1
      }
    })
    return setContacts(popularityContacts)
  }


  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={addNewContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>


      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
