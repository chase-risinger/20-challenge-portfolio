import React from 'react';

function Portfolio() {


    return (
        <div>
            <h2>Portfolio</h2>

            <div className="container">
                <div className="col">
                    <div className="row">
                        <a href="https://floating-crag-45035.herokuapp.com/"> <img
                            src={require("../../assets/large/portfolio/blog-it.jpg").default}
                            alt="blog it website" style={{ width: "70%" }}
                        />
                        </a>
                        <h4>Blog it!</h4><br /><br />
                    </div>
                    <div className="row">
                        <a href="https://secret-forest-66148.herokuapp.com/"> <img
                            src={require("../../assets/large/portfolio/Git-Stuff-HomePage.jpg").default}
                            alt="git-stuff website" style={{ width: "70%" }}
                        />
                        </a>
                        <h4>Git-Stuff!</h4><br /><br />
                    </div>
                    <div className="row">
                        <a href="https://dianetritchler.github.io/Project1-Group6/"> <img
                            src={require("../../assets/large/portfolio/git-to-the-show.jpg").default}
                            alt="git to the show website" style={{ width: "70%" }}
                        />
                        </a>
                        <h4>Git to the show!</h4><br /><br />
                    </div>
                </div>


                <div className="col">
                    <div className="row">
                        <a href="https://enigmatic-brook-85180.herokuapp.com/"> <img
                            src={require("../../assets/large/portfolio/note-taker.jpg").default}
                            alt="note taker app" style={{ width: "70%" }}
                        />
                        </a>

                        <h4>Note Taker</h4><br /><br />
                    </div>
                    <div className="row">
                        <a href="https://gist.github.com/chase-risinger/1e7b03548dbe615cf2788c490dbbf26d"> <img
                            src={require("../../assets/large/portfolio/reg-ex-analysis.jpg").default}
                            alt="reg-ex anaylsis gist" style={{ width: "70%" }}
                        />
                        </a>
                        <h4>Reg-ex Analysis</h4><br /><br />
                    </div>
                    <div className="row">
                        <a href="https://chase-risinger.github.io/weather-report/"> <img
                            src={require("../../assets/large/portfolio/weather-report.jpg").default}
                            alt="weather report app" style={{ width: "70%" }}
                        />
                        </a>
                        <h4>Weather Report</h4><br /><br />
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Portfolio;