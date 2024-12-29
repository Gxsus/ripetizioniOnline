import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Table from 'react-bootstrap/Table';

function About() {
    return (
        <>
            <Navbar></Navbar>
            <div className="content">
                <h1>About</h1>
                <p>Le ripetizioni saranno in presenza oppure online (tramite un server discord).</p>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Ripetizioni</th>
                        <th>Online</th>
                        <th>In presenza</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Prezzo (€/h)</th>
                            <td>15 €</td>
                            <td>20 €</td>
                        </tr>
                        <tr>
                            <th>Territorio</th>
                            <td>Qualunque posto</td>
                            <td>GENOVA (Brignole - Voltri)</td>
                        </tr>
                        <tr>
                            <th>Pagamento anticipato</th>
                            <td>✔️</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <th>Pagare in contanti</th>
                            <td>❌</td>
                            <td>✔️</td>
                        </tr>
                    </tbody>
                </Table>
                <p>Per ulteriori informazioni, siete pregati di contattarci (le nostre email sono presenti su <Link to="/contact">contatti</Link>).</p>
            </div>
        </>        
    )
}

export default About;