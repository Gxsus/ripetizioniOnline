import AuthenticationService from "../services/authentication";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import { Form, Button, Spinner, Alert } from 'react-bootstrap';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [passwordField, setPasswordField] = useState('password');
    const [passwordChecker, setPasswordChecker] = useState('Mostra Password');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const sendLoginData = async () => {
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            const response = await AuthenticationService.login(formData.email, formData.password);
            setSuccess('Login effettuato con successo!');
            console.log(response);
        } catch (error) {
            setError('Login fallito. Per favore, controlla le tue credenziali.');
            console.error("Login failed", error);
        } finally {
            setLoading(false);
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
            setEmailError('Indirizzo email non valido');
        } else {
            setEmailError('');
        }
    };

    const changePasswordState = () => {
        if (passwordField === 'password') {
            setPasswordField('text');
            setPasswordChecker('Nascondi Password');
        } else {
            setPasswordField('password');
            setPasswordChecker('Mostra Password');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setEmailError('Indirizzo email non valido');
            return;
        }
        sendLoginData();
    };

    return (
        <>
            <Navbar />
            <div className="container main-content" style={{ position: 'relative'}}>
                <h1 style={{ paddingBottom: "5vh" }}>Login</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Indirizzo Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Inserisci email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            isInvalid={!!emailError}
                        />
                        <Form.Control.Feedback type="invalid">
                            {emailError}
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            Non condivideremo mai il tuo indirizzo email con nessuno.
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ paddingBottom: "2vh"}}>
                        <Form.Check type="checkbox" label={passwordChecker} onClick={changePasswordState} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : 'Invia'}
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Login;
