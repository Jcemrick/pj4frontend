import URL from './url'
import { redirect } from 'react-router-dom'

export async function CreateAction({request}) {
    const formData = await request.formData()

    const newIncident = {
        incidentid: formData.get('incidentid'),
        startdate: formData.get('startdate'),
        time: formData.get('time'),
        address: formData.get('address'),
        responsetype: formData.get('responsetype'),
        smokepresent: formData.get('smokepresent'),
        smokecolor: formData.get('smokecolor'),
        exposuretime: formData.get('exposuretime'),
    }

    await fetch(URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newIncident)
    })

    return redirect('/')
}

export async function UpdateAction({request, params}) {
    const formData = await request.formData()

    const updateIncident = {
        incidentid: formData.get('incidentid'),
        startdate: formData.get('startdate'),
        time: formData.get('time'),
        address: formData.get('address'),
        responsetype: formData.get('responsetype'),
        smokepresent: formData.get('smokepresent'),
        smokecolor: formData.get('smokecolor'),
        exposuretime: formData.get('exposuretime'),
    }

    await fetch(URL + params.id + '/', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateIncident)
    })

    return redirect('/')
}

export async function DeleteAction({params}) {

    const id = params.id
    
    await fetch(URL + id + '/', {
        method: 'delete'
    })

    return redirect('/')
}