import "./App.css";
import Card from './Card.jsx'

const arr = [
  {
    img:'https://images.unsplash.com/flagged/photo-1552553030-837c9c2b0fac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name:'Great Wall Of China',
    place:'China'
  },
  {
    img:'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    name:'Taj Mahal',
    place:'Agra,India'
  },
  {
    img:'https://images.unsplash.com/photo-1562243885-2541f1032824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    name:'Eiffel Tower',
    place:'Paris,France'
  },
  {
    img:'https://images.unsplash.com/photo-1503572327579-b5c6afe5c5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80',
    name:'Statue Of liberty',
    place:'New York,US'
  },
  {
    img:'https://images.unsplash.com/photo-1613757874090-456665221c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    name:'Pyramid of Giza',
    place:'Al Giza,Egypt'
  },
  {
    img:'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name:'Burj Khalifa',
    place:'Dubai,UAE'
  },
  {
    img:'https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80',
    name:'Clock Tower',
    place:'London,UK'
  }
];
function App() {
  return (
    <>
    <h1 className="Heading">Seven Wonders Of World</h1>
      <div className="card">
      {arr.map((data,ind)=>(
         <Card data={data} key={ind} />
      ))}
    
      </div>
      
    </>
  );
}

export default App;
