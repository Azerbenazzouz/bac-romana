import React from 'react'
import Avatar from '@mui/material/Avatar';

function Top3() {
    return (
        <div>
            <br />
            <div className="container">
                <div className="card-group">
                    <div className="card">
                        <br />
                        <center className="card-img-top">
                            <Avatar alt="Azer Ben Azzouz" style={{width:"15rem", height:"15rem"}} src="https://scontent.ftun18-1.fna.fbcdn.net/v/t39.30808-6/272112085_1010033342913376_7399361134863132583_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dO24T4dqXBcAX_wETbH&_nc_ht=scontent.ftun18-1.fna&oh=00_AT9r9ywfIV3Piu4Og_LOTUt7Mwqwr2J6OWJArjLEdEb3zg&oe=61EF4104" />
                        </center>
                        <div className="card-body text-ce">
                            <center>
                                <h4 className="card-title">TOP 1 : Azer ben azzouz</h4>
                            </center>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                    <br />
                    <center className="card-img-top">
                        <Avatar alt="Azer Ben Azzouz" style={{width:"15rem", height:"15rem"}} src="https://scontent.ftun18-1.fna.fbcdn.net/v/t39.30808-6/272112085_1010033342913376_7399361134863132583_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dO24T4dqXBcAX_wETbH&_nc_ht=scontent.ftun18-1.fna&oh=00_AT9r9ywfIV3Piu4Og_LOTUt7Mwqwr2J6OWJArjLEdEb3zg&oe=61EF4104" />
                    </center>
                        <div className="card-body">
                            <center>
                                <h4 className="card-title">TOP 2 : Azer ben azzouz</h4>
                            </center>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                    <br />
                    <center className="card-img-top">
                        <Avatar alt="Azer Ben Azzouz" style={{width:"15rem", height:"15rem"}} src="https://scontent.ftun18-1.fna.fbcdn.net/v/t39.30808-6/272112085_1010033342913376_7399361134863132583_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dO24T4dqXBcAX_wETbH&_nc_ht=scontent.ftun18-1.fna&oh=00_AT9r9ywfIV3Piu4Og_LOTUt7Mwqwr2J6OWJArjLEdEb3zg&oe=61EF4104" />
                    </center>
                        <div className="card-body">
                            <center>
                                <h4 className="card-title">TOP 3 : Azer ben azzouz</h4>
                            </center>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top3
