import { Link } from "react-router-dom";
import "./card.scss";

function Card() {
    return (
        <div className="card">
            <div className="main">
                <div className="imgcontainer">
                    <img src="/cardDoc.png" alt="" />
                    <span>
                        4.5
                        <img src="/star.png" alt="" />
                    </span>
                </div>

                <div className="details">
                    <div className="detail">

                        <h3>Dr. Prerna Narang</h3>
                        <div className="specifics">
                            <div className="specific">
                                <img src="/medicine.png" alt="" />
                                Male-Female Infertility
                            </div>
                            <div className="specific specific2">
                                <img src="/Frame.png" alt="" />
                                7 years of Experience
                            </div>
                            <div className="specific">
                                <img src="/comment.png" alt="" />
                                Speaks: English, Hindi, Marathi
                            </div>
                        </div>
                        <div className="fees">
                            <div className="fee">
                                <div className="cat">Video Consultation</div>
                                <div className="cat2">₹800</div>
                            </div>
                            <div className="fee">
                                <div className="cat">Chat Consultation</div>
                                <div className="cat2">Free</div>
                            </div>

                        </div>
                    </div>

                    <div className="buttons">
                        <button className="button1">
                            <Link to="/about">View Profile</Link></button>
                        <button className="button2">Book a consultation</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
