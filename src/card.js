import React from 'react'

function Card(props) {
  return (
<>
<div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.carddata.plan}</h5>
            <h6 className="card-price text-center">${props.carddata.cost}<span className="period">/month</span></h6>
           
            <hr/>
            <ul>
           
            {props.carddata.features.map((feature)=>
            {return(
              <li className={`${feature.mute?'" " bi bi-x-lg  text-muted':'bi bi-check-lg'}${feature.isbold?'font-weight-bold':''}`}>{ feature.fea}</li>
            );
            })}
             
            
             </ul>
            <div className="d-grid">
              <button href="#" className="btn btn-primary text-uppercase">Button</button>
              
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Card