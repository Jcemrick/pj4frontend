import { Link, useLoaderData, Form } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Show = (props) => {
    const post = useLoaderData()



    return <div>
        <h1>Viewing Incident: {post.incidentid}</h1>
        <h3>Date & Time of Exposure: {post.startdate}</h3>
        <h3>Exposure Address: {post.address}</h3>
        <h3>Type of Exposure: {post.responsetype}</h3>
        <h3>Smoke Color: {post.smokecolor}</h3>
        <h3>Duration of Exposure: {post.exposuretime}hrs</h3>
        <div>
            <h1>Update Exposure</h1>
            <Form action={`/update/${post.id}`} method='post'>
            <input type='text' name='incidentid' placeholder="Incident number" defaultValue={post.incidentid}/>
            <input type='datetime-local' name='startdate' defaultValue={post.date}/>
            <input type='text' name='address' placeholder='Incident address' defaultValue={post.address}/>
            <input type='text' name='responsetype' placeholder='What type of incident was this? Fire, Aid, Hazmat etc.' defaultValue={post.responsetype}/>
            <input type='text' name='smokecolor' placeholder='Smoke color & description' defaultValue={post.smokecolor}/>
            <input type='number' name='exposuretime' placeholder="Exposure time in hours" defaultValue={post.exposuretime}/>
            <Button>Update Exposure</Button>
        </Form>
        <Form action={`/delete/${post.id}`} method='post'>
            <Button>Delete Exposure</Button>
        </Form>
        </div>

        <Link to='/'>
            <Button>Return</Button>
        </Link>
    </div>
};

export default Show;