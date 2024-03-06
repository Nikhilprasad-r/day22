import React from 'react'
import './Card.css'
import { TiTick } from "react-icons/ti";
import { GrFormClose } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = ({element}) => {
  return (
    <div className="card box-shadow rounded-4 text-dark bg-light mt-5 mb-5"  >
    <div className="card-header text-center">
    <h6 className='text-muted'>{element.title}</h6>
    <h1 className='card-title '>${element.cost}<span className='text-muted'>/month</span></h1>
    </div>
    <ul className="card-body">
      
      <li className="card-text"><TiTick/>{element.users} Users</li>
      <li className="card-text"><TiTick/> 50GB Storage</li>
      <li className="card-text"><TiTick/> Unlimited Public Projects</li>
      
      {element.private? <li className="card-text"><TiTick/> Community Access</li>:<li className="card-text text-muted"><GrFormClose/> Community Access</li>}
      {element.phone? <li className="card-text"><TiTick/> Unlimited Private Projects</li>:<li className="card-text text-muted"><GrFormClose/> Unlimited Private Projects</li>}
      {element.subdomain? <li className="card-text"><TiTick/>Dedicated Phone Support</li>:<li className="card-text text-muted"><GrFormClose/>Dedicated Phone Support</li>}
      {element.status? <li className="card-text"><TiTick/>  Free Subdomain</li>:<li className="card-text text-muted"><GrFormClose/> Free Subdomain</li>}

      {element.status? <li className="card-text"><TiTick/>  Monthly Status Reports</li>:<li className="card-text text-muted"><GrFormClose/> Monthly Status Reports</li>}
    </ul>
    <button className='btn btn-primary rounded-pill mb-5 ml-5 mr-5 p-3'>BUTTON</button>
  </div>
  )
}

export default Card