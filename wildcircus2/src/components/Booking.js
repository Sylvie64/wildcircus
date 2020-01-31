import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import back from '../img/arrow-back.png'
import logoOk from '../img/logoOk.png';
import '../App.css'

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      birthday: '',
      email: '',
      phone_number: '',
      isAdded: false,
    }
  } 
    /*this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);*/

  change = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  submit = e => {
    e.preventDefault();
    const {...user} = this.state
    axios.post('http://localhost:8000/api/users',user)
    .then(res =>{
      this.setState({
        isAdded: true
      })
    }).catch(event => {
      console.error(event);
      alert('User not added')
    })
  }

  render(){
    return(
      <div className='form-users'>
          /*<Link className='link-back-arrow' to="/Home">
            <figure className='fig-back-arrow'>
              <img className='back-arrow' src={back} alt='Arrow to back'/>
            </figure>
          </Link>
          
          <div className="div-add-user">
            <label htmlFor="lastname">Nom</label>
            <input type="text" id="lastname" onChange={this.change} />
            
            <label htmlFor="firstname">Prénom</label>
            <input type="text" id="firstname" onChange={this.change} /> 

            <label htmlFor="birthday">Date de naissance</label>
            <div className='input-birthday' >
                <input type="date" id="birthday" onChange={this.change} />
            </div>

            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" onChange={this.change} /> 

            <label htmlFor="phone_number">Numéro de téléphone</label>
            <input type="text" id="phone_number" onChange={this.change} />  
          </div>

          <button className='send-form-users' onClick={this.submit}>Envoyer</button>
            {this.state.isAdded ?
              <div className='okUser'>
                <div className='logo-ok'>
                  <img src={logoOk} alt='logo Ok'/>
                </div>
                <p className="user-added">Réservation envoyée</p>
              </div> : null}
      </div>   
    );
  };
}

export default Booking;
