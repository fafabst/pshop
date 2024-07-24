import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from './Layout';
import styles from "./home.module.css";
const Home = () => {
    type HomeData = {
        id: number;
        name: string;
        image: string;
    }
    const [homeData, setHomeData] = useState<HomeData[]>
        (
            [{
                id: 0,
                name: "",
                image: ""
            }]
        );

    useEffect(() => {
        axios.get('http://localhost:8000/pottery').
            then((response) => {
                console.log(response.data.homeData);
                setHomeData(response.data.homeData);
            }).catch((error) => {
                console.log("error fetching data", error);
            })
            ;
    }, []);
    return (
        <Layout>
            <Row className={styles.homeWrapped}>
                {homeData.map((item, idx) => (
                    <Col key={idx} >
                        <Link to={`/${item.name}`} className="no-underline">
                            <Card >
                                <Card.Body className={styles.cardBodyWrapped}  >
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Title className='text-blue-600/100'>{item.name}</Card.Title>
                                    {/* <Card.Text>{item.id}</Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col >
                ))}
            </Row >
        </Layout>
    );
}

export default Home;