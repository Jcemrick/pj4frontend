import Post from "../components/Post";
import { useLoaderData, Form } from "react-router-dom";


const Index = (props) => {
    const incidents = useLoaderData()

    return <>
    <div>
        <h2>Create Exposure Report</h2>
        <Form action='/create' method='post'>
            <input type='text' name='incidentid' placeholder="Incident number"/>
            <input type='date' name='startdate'/>
            <input type='time' name='time'/>
            <input type='text' name='address' placeholder='Incident address'/>
            <input type='text' name='responsetype' placeholder='What type of incident was this? Fire, Aid, Hazmat etc.'/>
            <input type='checkbox' name='smokepresent'/>
            <input type='text' name='smokecolor' placeholder='Smoke color & description'/>
            <input type='number' name='exposuretime' placeholder="Exposure time in hours"/>
            <button>Submit New Exposure</button>
        </Form>
    </div>
    {incidents.map((post) => <Post post={post} key={post.id} />)}
    </>
};

export default Index;