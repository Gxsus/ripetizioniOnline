import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Courses() {
    let cards = [
        {
            title: "Corso C++",
            text: "Impara a risolvere equazioni e problemi matematici con facilità.",
            footer: "€50",
            id: 0
        },
        {
            title: "Corso React",
            text: "Impara i concetti fondamentali della fisica e risolvi esercizi e problemi.",
            footer: "€60",
            id: 1
        },
        {
            title: "Corso di Informatica",
            text: "Impara a programmare in diversi linguaggi e a risolvere problemi informatici.",
            footer: "€70",
            id: 2
        },
        {
            title: "Corso di Inglese",
            text: "Migliora la tua conoscenza della lingua inglese con lezioni personalizzate.",
            footer: "€40",
            id: 3
        },
        {
            title: "Corso di Italiano",
            text: "Migliora la tua conoscenza della lingua italiana con lezioni personalizzate.",
            footer: "€40",
            id: 4
        },
        {
            title: "Corso di Storia",
            text: "Migliora la tua conoscenza della storia con lezioni personalizzate.",
            footer: "€40",
            id: 5
        },
        {
            title: "Corso di Geografia",
            text: "Migliora la tua conoscenza della geografia con lezioni personalizzate.",
            footer: "€40",
            id: 6
        },
        {
            title: "Corso di Scienze",
            text: "Migliora la tua conoscenza delle scienze con lezioni personalizzate.",
            footer: "€40",
            id: 7
        },
        {
            title: "Corso di Arte",
            text: "Migliora la tua conoscenza dell'arte con lezioni personalizzate.",
            footer: "€40",
            id: 8
        },
        {
            title: "Corso di Musica",
            text: "Migliora la tua conoscenza della musica con lezioni personalizzate.",
            footer: "€40",
            id: 9
        },
        {
            title: "Corso di Educazione Fisica",
            text: "Migliora la tua conoscenza dell'educazione fisica con lezioni personalizzate.",
            footer: "€40",
            id: 10
        }
    ];

    return (
        <>
            <Navbar />
            <div className="banner" style={{ backgroundColor: 'yellow', color: "black", textAlign: 'center', padding: '10px', fontWeight: 'bold', marginTop: '10vh' }}>
                Work in Progress
            </div>
            <div className="container main-content" style={{ position: 'relative' }}>
                <h1>Corsi in vendita</h1>
                <p>Ogni corso ha il prezzo specificato.</p>
                <div id="cards-container">
                    {
                        cards.map(card => (
                            <div key={card.id} style={{ textDecoration: 'none' }}>
                                <Card className="text-center">
                                    <Card.Header>{card.title}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>
                                            {card.text}
                                        </Card.Text>
                                        <Button variant="primary" disabled>Acquista</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{card.footer}</Card.Footer>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Courses;
