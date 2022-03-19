import './App.css';
import Card from "./card.js";

function App() {
  let data = [
  {
id :1,
plan :"free",
cost :0,
features:[
  {
    fea:"Single User"
  },
  {
    fea:"5GB Storage"
  },
  { fea:"Unlimited Public Projects"},
  {fea:"Community Access"},
 { fea:"Unlimited Private Projects",
 mute:"true"},
  {fea:"Dedicated Phone Support",
  mute:"true"},
 { fea:"Free Subdomain",
 mute:"true"},
  {fea:"Monthly Status Reports",
  mute:"true"
}],
},
      {
 id :2,
 plan :"plus",
 cost :9,
 
 features:[
  {
    fea:"5 Users",
  
  },
  {
    fea:"50GB Storage"
  },
  { fea:"Unlimited Public Projects"},
  {fea:"Community Access"},
 { fea:"Unlimited Private Projects"},
  {fea:"Dedicated Phone Support"},
 { fea:"Free Subdomain"},
  {fea:"Monthly Status Reports",
  mute:"true"
}],
 },
{
   id :3,
 plan :"Pro",
 cost :49,
 features:[
  {
    fea:" Unlimited User",
  
    
  },
  {
    fea:"150GB Storage"
  },
  { 
    fea:"Unlimited Public Projects"
  },
  {
    fea:"Community Access"
  },
 { 
   fea:"Unlimited Private Projects"
  },
  {
    fea:"Dedicated Phone Support"
  },
 { 
   fea:"Unlimited Subdomain"
  },
  {fea:"Monthly Status Reports"
}],
 }];
  return (
   <>
     <section className="pricing py-5">
  <div className="container">
    <div className="row">
   
    {
      data.map((card) =>{
        return<Card carddata={card}/>;
      }) }
      </div>
    </div>
    </section>
   </>
  );
}

export default App;
