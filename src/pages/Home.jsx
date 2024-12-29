import Navbar from "../components/Navbar";
import Accordion from 'react-bootstrap/Accordion';

function Home() {
    return (
        <>
            <Navbar />
            <div className="content" style={{ position: 'relative' }}>
                <h1>Ripetizioni da studenti per studenti</h1>
                <p>Siamo un gruppo di studenti appassionati che credono nel valore della collaborazione e dell'apprendimento condiviso. Offriamo ripetizioni per studenti di tutte le età e livelli scolastici, con un approccio giovane e dinamico che ci consente di comprendere al meglio le tue esigenze e difficoltà.</p>
                <p>Perché scegliere noi?</p>
                <Accordion defaultActiveKey="0" style={{ width: "75vw" }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Esperienza diretta</Accordion.Header>
                        <Accordion.Body>
                            Essendo studenti, conosciamo bene le sfide che stai affrontando. Possiamo aiutarti a superare le tue difficoltà con metodi di studio che abbiamo già testato e utilizzato con successo.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Approccio personalizzato</Accordion.Header>
                        <Accordion.Body>
                            Ogni lezione è progettata su misura per te, in base alle tue specifiche esigenze e al tuo stile di apprendimento. Che tu abbia bisogno di aiuto con i compiti, di prepararti per un esame o di migliorare in una materia specifica, siamo qui per supportarti!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accessibilità e flessibilità</Accordion.Header>
                        <Accordion.Body>
                            Le nostre ripetizioni sono accessibili e flessibili. Offriamo lezioni sia online che in presenza, per adattarci al meglio ai tuoi impegni e alle tue preferenze.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Ambiente amichevole</Accordion.Header>
                        <Accordion.Body>
                            Crediamo che l'apprendimento debba essere un'esperienza positiva e stimolante. Imparerai in un ambiente accogliente e privo di giudizi, dove potrai sentirti libero di fare domande e migliorare.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

export default Home;
