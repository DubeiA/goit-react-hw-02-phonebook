import React, { Component } from 'react'
import { ContactForm } from "./ContactForm/ContactForm";
// import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types'

export class App extends Component { 

  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
    name: '',
  number: ''
  }
  
renderContacts = () => { 
    // console.log(this.state.contacts);
    return <ul>
      {
         this.state.contacts.map(contact => {

           return <li key={contact.id}> {contact.name} : { contact.number}</li>
    })
     
     }
   </ul>
  }
  
  
  // handleOnChange = event => {
  //   const { name, value } = event.currentTarget

  //   this.setState({[name]: value})
  // }


  // model.id = nanoid()


  findContacts = event => { 
    event.currentTarget.value = this.state.contacts.name
  }

  // handleSubmit = e => { 
  //   e.preventDefault() 

  //   console.log(this.state);
  // }
  
  render() {

    //   const normalizedFilter = this.state.filter.toLowerCase();

    // const visibleName = this.state.contacts.filter(contact => 
    //   contact.name.toLowerCase().includes(normalizedFilter))


    return (
      <div
       style={{
        
          marginLeft: '40px',
         width:'400px',
        fontSize: 26,
        color: '#010101'
        }}>
        <h2>Phonebook</h2>
       <ContactForm ></ContactForm>

        <h3>Contacts</h3>

        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.filter}
        onChange={this.handleOnChange}
        />
        <div>{this.renderContacts()}</div>
        
      </div>
    )
  }
}





// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
