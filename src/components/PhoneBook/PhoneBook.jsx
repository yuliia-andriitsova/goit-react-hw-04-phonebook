import { useState } from 'react';
import PropTypes from 'prop-types';

export function PhoneBook({ handleAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // onChangeName = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  const onChangeName = event => {
    const { value } = event.target;
    setName(value);
  };
  const onChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };
  //   handleSubmit = event => {
  //     event.preventDefault();
  //     this.props.handleAddContact(this.state.name, this.state.number);
  //     this.setState({ name: '', number: '' });
  //   };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label> Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

PhoneBook.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

//------------------------------------------------------------------------------------------------------
// import { Component } from 'react';
// import PropTypes from 'prop-types';

// export class PhoneBook extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   onChangeName = event => {
//     console.log(event);
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.handleAddContact(this.state.name, this.state.number);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label> Name</label>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.onChangeName}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <label> Number</label>
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.onChangeName}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <button type="submit">Add contact</button>
//         </form>
//       </>
//     );
//   }
// }

// PhoneBook.propTypes = {
//   handleAddContact: PropTypes.func.isRequired,
// };
