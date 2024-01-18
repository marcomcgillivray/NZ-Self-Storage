import { useState } from "react";

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const firstNameHandler = e => {
        setFirstName(e.target.value);
    };

    const lastNameHandler = e => {
        setLastName(e.target.value);
    };

    const emailHandler = e => {
        setEmail(e.target.value);
    };

    const phoneHandler = e => {
        setPhone(e.target.value);
    };

    const addressHandler = e => {
        setAddress(e.target.value);
    };

    const passwordHandler = e => {
        setPassword(e.target.value);
    };

    const passwordConfirmHandler = e => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const fullName = firstName + ' ' + lastName; 

        const userData = {
            fullName: fullName,
            emailAddress: email,
            phone: phone,
            address: address,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3001/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle success scenario - maybe redirect or show a success message
        } catch (error) {
            // Handle error scenario - show an error message or perform other actions
            console.error('Error:', error);
        }
    };

    


    return (
        <>
            <div>
                <section id='signup'>
                    <div className="signup-modal">
                        <h2>
                            Sign Up to Create Your Account
                        </h2>
                        <p>
                            Already have an account? <a href='/'>Log In Here</a>
                        </p>
                        <div className="name">
                            <input
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={firstNameHandler}>
                            
                            </input>
                            <input
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={lastNameHandler}>
                            
                            </input>
                        </div>

                        <input
                        type='email'
                        value={email}
                        placeholder="Email Address"
                        onChange={emailHandler}>

                        </input>

                        <input
                        type='number'
                        value={phone}
                        placeholder="Phone Number"
                        onChange={phoneHandler}>

                        </input>

                        <input
                        type="address"
                        placeholder="Enter Your Address"
                        value={address}
                        onChange={addressHandler}>

                        </input>

                        <input
                        type="password"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={passwordHandler}>

                        </input>

                        <input
                        type="password"
                        placeholder="Confirm Your Password"
                        value={confirmPassword}
                        onChange={passwordConfirmHandler}>

                        </input>

                        <button
                        type="submit"
                        className="button-solid"
                        onClick={handleSubmit}>
                            Sign Up
                        </button>

                    </div>
                </section>
            </div>
        </>
    )
};  

export default SignUp;