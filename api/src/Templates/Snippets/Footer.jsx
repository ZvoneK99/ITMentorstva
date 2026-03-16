import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Footer = () => {
    return (
        <Card className="text-center bg-dark text-white p-3">
            <Card.Body>
                <Card.Title>Filmovi.com (2026)</Card.Title>
                <Card.Text>
                    Copyright &copy; by <a href="https://www.linkedin.com/in/zvonimir-kozul/" target='_blank' rel='noopener noreferrer'>Zvonimir Kožul</a> - All rights reserved.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Footer;