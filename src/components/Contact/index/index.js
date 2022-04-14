import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';

function Contactform () {
    const [formState, setFormState] = useState({ name: '', email: '', message:'' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        };
        console.log('error message', errorMessage);
    }
    console.log(formState);

    return (
        <section>
            <div class='has-text-centered'>
            <h1 class='title is-2'>Contact Me</h1>
            <hr />
            </div>
            <form id="contact-form">
                <div class='field'>
                    <label className='control label' htmlFor="name">Name</label>
                    <input className='input' type="text" defaultValue={name} onBlur={handleChange} name='Name' />
                </div>
                <div class="field">
                    <label class="label" htmlFor='email'>Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="email" defaultValue={email} onBlur={handleChange} name='Email' />
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
                
                <div class="field">
                <label class="label" htmlFor="message">Message</label>
                    <div class="control">
                        <textarea class="textarea" name='Message' defaultValue={message} onBlur={handleChange} rows='5' />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}

                <div class="control">
                    <button type='submit' class="button is-link">Submit</button>
                </div>

            </form>
        </section>
    )
}

export default Contactform;