import React from 'react'

function SectionLeftCard(props) {
    
    return (
        
        <section className='top-heading'  style={{

        }} >
            <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Top Stories <div style={{ background: "red", display: "inline-block", width: "600px", height: "5px" }}></div></h4>
            {
                     props.data?(
                         <>
            <div className="row">
                <div className="col-md-6">
                 
                    <div className='card-left' style={{
                        width: "22rem", height:"20rem", marginLeft: "8px"
                    }}>
                        <img src={props.data[0].urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">{props.data[0].title.substring(0,110)}</h6>
                            <span ><i className="fa-solid fa-circle-user"></i><span className="logo-text">{props.data[0].author}</span>
                            </span>
                            <p className="card-text my-2">{props.data[0].description.substring(0, 120)}...</p>
                            

                        </div>
                    </div>
                  
                </div>
                <div className="col-md-6">

                    <div className=" card-right">
                        <div className="card-body right-card">
                            <p>{props.data[1].title.substring(0,95)}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{props.data[1].author}</span></span>
                        </div>
                    </div>
                    <div className=" my-2 card-right">
                        <div className="card-body right-card">
                            <p>{props.data[2].title.substring(0,95)}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{props.data[2].author}</span></span>
                        </div>
                    </div>
                    <div className="my-2 card-right">
                        <div className="card-body right-card">
                            <p>{props.data[3].title.substring(0,95)}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{props.data[3].author}</span></span>
                        </div>
                    </div>
                    <div className=" my-2 card-right">
                        <div className="card-body right-card">
                            <p>{props.data[4].title.substring(0,95)}
                            </p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i><span className="logo-text">{props.data[4].author}</span></span>
                        </div>
                    </div>

                    <div className="my-2 card-right">
                        <div className="card-body right-card">
                            <p>{props.data[5].title.substring(0,95)}
                            </p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i><span className="logo-text">{props.data[5].author}</span></span>

                        </div>
                    </div>

                </div>

            </div>
            </>  ):(<></>)
                 }

        </section>

    )
}

export default SectionLeftCard