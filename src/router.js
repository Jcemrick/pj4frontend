import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { CreateAction, DeleteAction, UpdateAction } from './actions'
import App from './App'
import { indexLoader, showLoader } from './loaders'
import Index from './pages/Index'
import Show from './pages/Show'

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Index/>} loader={indexLoader}/>
            <Route path='post/:id' element={<Show/>} loader={showLoader}/>
            <Route path='create' action={CreateAction}/>
            <Route path='update/:id' action={UpdateAction}/>
            <Route path='delete/:id' action={DeleteAction}/>
        </Route>
    </>
))

export default router