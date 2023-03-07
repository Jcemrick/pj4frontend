import Post from "../components/Post";
import { useLoaderData, Form } from "react-router-dom";
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Index = (props) => {
    const incidents = useLoaderData()

    return <>
    <div className="newExposure">
        <Card>
            <Card.Body>
            <Card.Title>Create Exposure Report</Card.Title>
                <Form action='/create' method='post'>
                    <input type='text' name='incidentid' placeholder="Incident number"/>
                    <input type='datetime-local' name='startdate'/>
                    <input type='text' name='address' placeholder='Incident address'/>
                    <input type='text' name='responsetype' placeholder='What type of incident was this? Fire, Aid, Hazmat etc.'/>
                    <input type='text' name='smokecolor' placeholder='Smoke color & description'/>
                    <input type='number' name='exposuretime' placeholder="Exposure time in hours"/>
                    <Button>Submit New Exposure</Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
    {incidents.map((post) => <Post post={post} key={post.id} />)}
    </>
};

export default Index;