import './App.css';
import Card from "./card.js";

function App() {
  let data = [
  {
id :1,
plan :"free",
cost :0,
user :"single user",
storage :"5GB storage",
},
      {
 id :2,
 plan :"plus",
 cost :9,
 user :"5 Users",
 storage :"50GB Storage",
 },
{
   id :3,
 plan :"Pro",
 cost :49,
 storage:"150GB Storage",
 }];
  return (
   <>
     <section className="pricing py-5">
  <div className="container">
    <div className="row">
   
    {
      data.map((card) =>
      <Card carddata={card}/>)
    }
      </div>
    </div>
    </section>
   </>
  );
}

export default App;
