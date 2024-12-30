import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Table from 'react-bootstrap/Table';

function About() {
    return (
        <>
            <Navbar />
            <div className="container main-content" style={{ position: 'relative' }}>
                <h1>Informazioni</h1>
                <p>Le lezioni di ripetizione si svolgeranno in presenza oppure online tramite un server Discord.</p>
                <Table striped bordered hover variant="dark" className="w-100">
                    <thead>
                        <tr>
                            <th>Modalità</th>
                            <th>Online</th>
                            <th>In presenza</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tariffa oraria</td>
                            <td>15 €</td>
                            <td>20 €</td>
                        </tr>
                        <tr>
                            <td>Luogo</td>
                            <td>Senza restrizioni</td>
                            <td>Genova (Voltri - Brignole)</td>
                        </tr>
                        <tr>
                            <td>Pagamento anticipato</td>
                            <td>✔️</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>Pagamento in contanti</td>
                            <td>❌</td>
                            <td>✔️</td>
                        </tr>
                    </tbody>
                </Table>
                <p>Per ulteriori informazioni, vi invitiamo a contattarci. Potete trovare i nostri indirizzi email nella sezione <Link to="/contact">Contatti</Link>.</p>
            </div>
        </>
    );
}

export default About;
