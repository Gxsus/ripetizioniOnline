import Navbar from "../components/Navbar";

function Contact() {

    return (
        <>
            <Navbar></Navbar>
            <div className="content">
                <h1>Contatti</h1>
                <p style={{paddingTop: '10%'}}>In caso di esigenza, potete contattarci nei seguenti metodi.</p>
                <p style={{paddingTop: '10%'}}>Email: ripetizioni@gmail.com</p>
                <p>Numero: 3476581234</p>
            </div>
        </>       
    );
}

export default Contact;