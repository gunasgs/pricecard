import React from 'react'

function Card(props) {
  return (
<>
<div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.carddata.plan}</h5>
            <h6 class="card-price text-center">${props.carddata.cost}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.carddata.user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.carddata.storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li ><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li ><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li ><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li ><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Card