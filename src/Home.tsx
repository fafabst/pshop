import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from './Layout';
import "./index.css"
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
            <Row className='bg-zinc-800 bg-auto bg-no-repeat bg-center grid grid-rows-2 grid-flow-col  rounded-lg'>
                {homeData.map((item, idx) => (
                    <Col key={idx} >
                        <Link to={`/${item.name}`} >
                            <Card className='bg-zinc-800  shadow-custom-all-sides m-3 h-3/4 rounded-lg 	'>
                                <Card.Body   >
                                    <Card.Img className='bg-cyan-500 shadow-custom-all-sides rounded-lg size-6/12' variant="top" src={item.image} />
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