import Navbar from "../components/Navbar";

function Contact() {
    return (
        <>
            <Navbar />
            <div className="container main-content" style={{ position: 'relative' }}>
                <h1>Contatti</h1>
                <p style={{ paddingTop: '10%' }}>Per qualsiasi necessità, potete contattarci attraverso i seguenti canali:</p>
                <p>Telefono (Solo Whatsapp):</p>
                <p>3478675903 / 3476581234</p>
            </div>
        </>
    );
}

export default Contact;
