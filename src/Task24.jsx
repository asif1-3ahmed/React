import React, { Component, useState, useEffect } from "react";
import "./Task24.css";

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            dob: "",
            contact: "",
            email: "",
            password: "",
            submitted: false,
            errors: {}
        };
    }

    validate = () => {
        const { name, age, dob, contact, email, password } = this.state;
        let errors = {};
        if (!name) errors.name = "Name is required";
        if (!age || isNaN(age) || age <= 0) errors.age = "Valid age is required";
        if (!dob) errors.dob = "DOB is required";
        if (!contact || !/^\d{10}$/.test(contact)) errors.contact = "Valid 10-digit contact required";
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Valid email required";
        if (!password || password.length < 6) errors.password = "Password must be at least 6 chars";
        this.setState({ errors });
        return Object.keys(errors).length === 0;
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validate()) {
            this.setState({ submitted: true });
        }
    }

    render() {
        const { name, age, dob, contact, email, password, errors, submitted } = this.state;

        return (
            <div className="form-card">
                <h2>Signup Form (Class Component)</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}

                    <input name="age" placeholder="Age" value={age} onChange={this.handleChange} />
                    {errors.age && <span className="error">{errors.age}</span>}

                    <input type="date" name="dob" value={dob} onChange={this.handleChange} />
                    {errors.dob && <span className="error">{errors.dob}</span>}

                    <input name="contact" placeholder="Contact" value={contact} onChange={this.handleChange} />
                    {errors.contact && <span className="error">{errors.contact}</span>}

                    <input name="email" placeholder="Email" value={email} onChange={this.handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                    {errors.password && <span className="error">{errors.password}</span>}

                    <button type="submit">Signup</button>
                </form>

                {submitted && <p className="success">Form is submitted successfully!</p>}
            </div>
        );
    }
}

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    useEffect(() => {
        console.log("LoginForm rendered or updated");
    });

    const validate = () => {
        let errors = {};
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Valid email required";
        if (!password || password.length < 6) errors.password = "Password must be at least 6 chars";
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            setSubmittedData({ email, password });
        } else {
            alert(Object.values(errors).join("\n"));
        }
    }

    return (
        <div className="form-card">
            <h2>Login Form (Function Component)</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

            {submittedData && (
                <div className="submitted-data">
                    <h3>Submitted Data:</h3>
                    <p>Email: {submittedData.email}</p>
                    <p>Password: {submittedData.password}</p>
                </div>
            )}
        </div>
    );
}

function Task24() {
    return (
        <div>
            <SignupForm />
            <LoginForm />
        </div>
    );
}

export default Task24;
