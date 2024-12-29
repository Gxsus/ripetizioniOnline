import AuthenticationService from "../services/authentication";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import { Form, Button } from 'react-bootstrap';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [passwordField, setPasswordField] = useState('password');
    const [passwordChecker, setPasswordChecker] = useState('Show Password');
    const [emailError, setEmailError] = useState('');

    const sendLoginData = async () => {
        try {
            const response = await AuthenticationService.login(formData.email, formData.password);
            console.log(response);
        } catch (error) {
            console.error("Login failed", error);
        }
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'email' && !validateEmail(value)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const changePasswordState = () => {
        if (passwordField === 'password') {
            setPasswordField('text');
            setPasswordChecker('Hide Password');
        } else {
            setPasswordField('password');
            setPasswordChecker('Show Password');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setEmailError('Invalid email address');
            return;
        }
        sendLoginData();
    };

    return (
        <>
            <Navbar />
            <div className="container main-content" style={{ position: 'relative' }}>
                <h1 style={{ paddingBottom: "5vh" }}>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            isInvalid={!!emailError}
                        />
                        <Form.Control.Feedback type="invalid">
                            {emailError}
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{ paddingBottom: "2vh" }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type={passwordField}
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ paddingBottom: "2vh" }}>
                        <Form.Check type="checkbox" label={passwordChecker} onClick={changePasswordState} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Login;
