import './Styles/Items.css';

function Locations(){
    return(
        <>
            <div className="wrapper">
                <div className="container">
                    <input type="checkbox" name="slide" id="c1" ></input>
                    <label htmlFor="c1" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h2>Item 1</h2>
                                <p>Welcome to brawlhalla and wii sports resorts</p>
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" name="slide" id="c2" ></input>
                    <label htmlFor="c2" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h2>Item 2</h2>
                                <p>Welcome to brawlhalla and wii sports resorts</p>
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" name="slide" id="c3" ></input>
                    <label htmlFor="c3" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h2>Item 3</h2>
                                <p>Welcome to brawlhalla</p>
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" name="slide" id="c4" ></input>
                    <label htmlFor="c4" className="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <h2>Item 4</h2>
                                <p>Welcome to brawlhalla and wii sports resorts</p>
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" name="slide" id="c5" ></input>
                    <label htmlFor="c5" className="card">
                        <div className="row">
                            <div className="icon">5</div>
                            <div className="description">
                                <h2>Item 5</h2>
                                <p>Welcome to brawlhalla and wii sports resorts</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>

    );
}

export default Locations;