import React from "react";
import PropTypes from "prop-types";

export const Card=(props)=> {

    return (
        <div className="col-12 col-sm-6 col-md-3 col-lg-3 rounded bg-secondary p-0">
        <div className="card m-2">
        <img src="https://picsum.photos/800/600?random=1" className="card-img-top" alt="50px"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae doloribus asperiores saepe rerum nam inventore esse qui vitae consectetur architecto, at voluptates magnam, quod illum nulla adipisci facere hic!.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    )
}

