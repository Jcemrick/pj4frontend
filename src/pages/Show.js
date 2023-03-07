import { Link, useLoaderData, Form } from 'react-router-dom'

const Show = (props) => {
    const post = useLoaderData()

    const div = {
        textAlign: 'center',
        border: '3px solid green',
        width: '80%',
        margin: '30px auto'
    }

    return <div style={div}>
        <h1>Viewing Incident: {post.incidentid}</h1>
        <h3>Date & Time of Exposure: {post.startdate} {post.time}</h3>
        <h3>Exposure Address: {post.address}</h3>
        <h3>Type of Exposure: {post.responsetype}</h3>
        <h3>Smoke Present: {post.smokepresent}</h3>
        <h3>Smoke Color: {post.smokecolor}</h3>
        <h3>Duration of Exposure: {post.exposuretime}hrs</h3>
        <div>
            <h1>Update Exposure</h1>
            <Form action={`/update/${post.id}`} method='post'>
            <input type='text' name='incidentid' placeholder="Incident number" defaultValue={post.incidentid}/>
            <input type='date' name='startdate' defaultValue={post.date}/>
            <input type='time' name='time'defaultValue={post.time}/>
            <input type='text' name='address' placeholder='Incident address' defaultValue={post.address}/>
            <input type='text' name='responsetype' placeholder='What type of incident was this? Fire, Aid, Hazmat etc.' defaultValue={post.responsetype}/>
            <input type='checkbox' name='smokepresent' defaultValue={post.smokepresent}/>
            <input type='text' name='smokecolor' placeholder='Smoke color & description' defaultValue={post.smokecolor}/>
            <input type='number' name='exposuretime' placeholder="Exposure time in hours" defaultValue={post.exposuretime}/>
            <button>Update Exposure</button>
        </Form>
        <Form action={`/delete/${post.id}`} method='post'>
            <button>Delete Exposure</button>
        </Form>
        </div>

        <Link to='/'>
            <button>Return</button>
        </Link>
    </div>
};

export default Show;