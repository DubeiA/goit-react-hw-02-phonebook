import React, { Component } from 'react'
// import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types'

export class App extends Component { 

  state = {
  contacts: [],
    name: '',
  number: ''
  }

  // model.id = nanoid()
  
  render() {
    return (
      <div
       style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
          marginLeft: '40px',
         width:'400px',
        // alignItems: 'center',
        fontSize: 26,
        color: '#010101'
        }}>
        
        <form > 
          <h2>Phonebook</h2>
          <label style={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            border: '2px solid black',
            width: '350px', 
            height: '220px',
            
          }}> 
            <span style={{
              marginBottom: '5px',
              marginTop: '15px',
              marginLeft: '30px',
            }}>Name</span>
            <input style={{
              width: '150px',
              marginLeft: '30px',
            }}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />

            <label style={{
            display: 'flex',
              flexDirection: 'column',
            marginTop: '10px'
            // justifyContent: 'space-between',
            // border: '1px solid black',
            // width: '300px', 
            // height: '180px',
            
          }}>
              <span style={{
              marginBottom: '5px',
              marginTop: '15px',
              marginLeft: '30px',
              }}>Number</span>
              
            <input
              style={{
              width: '150px',
              marginLeft: '30px',
            }}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
            <button type='submit' style={{ 
              width: '120px',
              marginLeft: '30px',
              marginTop: '25px',
              borderStyle: 'none'

             }}>Add contact</button>
          </label>
         
        </form>

        <h3>Contacts</h3>
        <ul>
          <li>Rosie Sempson</li>
          <li>Hermione Kline</li>
          <li>Eden Clements</li>
          </ul>
        
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
