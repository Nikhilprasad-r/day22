
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card/Card';


const data =[{
  title:'FREE',
  cost:0,
  users:'single',
  storage:true,
  unlimited:true,
  access:true,
  private:false,
  phone:false,
  subdomain:false,
  status:false
},{
  title:'PLUS',
  cost:9,
  users:'5',
  storage:true,
  unlimited:true,
  access:true,
  private:true,
  phone:true,
  subdomain:true,
  status:false
},{
  title:'PRO',
  cost:49,
  users:'unlimited',
  storage:true,
  unlimited:true,
  access:true,
  private:true,
  phone:true,
  subdomain:true,
  status:true
}];





function App() {


  return (
    <section className='d-flex justify-content-around flex-wrap'>
      
     
      { data.map((element)=>{
        console.log(element);
        return(
          <Card element={element}/>
        )
      })
     }

    </section>
  )
}

export default App
