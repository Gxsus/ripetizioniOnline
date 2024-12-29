import Navbar from "../components/Navbar"
import Accordion from 'react-bootstrap/Accordion';

function Home() {
    
    return (
        <>
            <Navbar></Navbar>
            <div className="content" style={{position: 'relative'}}>
                <h1>Ripetizioni da studenti per studenti</h1>
                <p>Siamo un gruppo di studenti appassionati che credono nel potere della collaborazione e dell'apprendimento condiviso. Offriamo ripetizioni a studenti di tutte le età e livelli scolastici, con un approccio giovane e dinamico che ci permette di comprendere al meglio le tue esigenze e difficoltà.</p>
                <p>Perchè scegliere noi?</p>
                <Accordion defaultActiveKey="0" style={{width: "50vw"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Esperienza Diretta</Accordion.Header>
                        <Accordion.Body>
                        Come studenti, sappiamo esattamente cosa stai passando. Possiamo aiutarti a superare le tue difficoltà con metodi di studio che abbiamo già testato e utilizzato con successo.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Approccio Personalizzato</Accordion.Header>
                        <Accordion.Body>
                        Ogni lezione è pensata su misura per te, in base alle tue esigenze specifiche e al tuo stile di apprendimento. Che tu abbia bisogno di una mano con i compiti, di prepararti per un esame o di migliorare in una materia specifica, siamo qui per aiutarti!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accessibilità e Flessibilità</Accordion.Header>
                        <Accordion.Body>
                        Le nostre ripetizioni sono accessibili e flessibili. Offriamo lezioni sia online che in presenza, per adattarci al meglio ai tuoi impegni e alle tue preferenze.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Ambiente Amichevole</Accordion.Header>
                        <Accordion.Body>
                        Crediamo che l'apprendimento debba essere un'esperienza positiva e coinvolgente. Imparerai in un ambiente amichevole e senza giudizi, dove potrai sentirti a tuo agio nel fare domande e migliorare.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
            </div>
        </>
    )
}

export default Home;