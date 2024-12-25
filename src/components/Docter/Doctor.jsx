import "./Doctor.scss";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

function Doctor() {
    const [activeId, setActiveId] = useState(null);
    const [activeId2, setActiveId2] = useState(null);

    const handleClick = (id) => {
        setActiveId(id);
    };
    const handleClick2 = (id) => {
        setActiveId2(id);
    };
    return (
        <div className="Doctor">
            <div className="wrapper">
                <div className="wrapper1">
                    <div className="banner">
                        <img src="/backBanner.png" alt="" className="bannerimg" />
                        <div className="lower">
                            <img src="/image.png" alt="" className="rounded-image" />
                            <div className="detail">
                                <h2>
                                    Dr. Bruce Willis <img src="/verified.png" alt="" />
                                </h2>
                                <span>Gynecologist</span>
                                <img src="/rating.png" alt="" />
                            </div>
                            <div className="social">
                                <div className="segment">
                                    <span className="heading">Followers</span>
                                    <span className="numbers">850</span>
                                </div>
                                <div className="segment">
                                    <span className="heading">Following</span>
                                    <span className="numbers">18K</span>
                                </div>
                                <div className="segment">
                                    <span className="heading">Posts</span>
                                    <span className="numbers">250</span>
                                </div>
                            </div>

                            <button>Book an Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="left">
                        <div className="description">
                            <div className="haeding">
                                <h2>A Little About me</h2>
                                <span>Follow +</span>
                            </div>
                            <div className="about">
                                <p>
                                    Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni
                                    Hospital Surat. love to work with all my hospital staff and
                                    seniour doctors. Completed my graduation in Gynaecologist
                                    Medicine from the{" "}
                                </p>
                                <div className="underline">
                                    <div></div>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                            <div className="languages">
                                Languages Spoken
                                <span>English</span>
                                <span>Hindi</span>
                                <span>Telegue</span>
                            </div>
                            <div className="handles">
                                <div className="imgContainer">
                                    <img src="/fb.png" alt="" />
                                </div>
                                <div className="imgContainer">
                                    <img src="/insta.png" alt="" />
                                </div>
                                <div className="imgContainer">
                                    <img src="/yt.png" alt="" />
                                </div>
                                <div className="imgContainer">
                                    <img src="/twitter.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="specialization">
                            <div className="heading2">
                                <h2>I Specialize In</h2>
                            </div>
                            <div className="specializationContainer">
                                <div className="specializationCard">
                                    <div className="imgContainer">
                                        <img src="/Women.png" alt="" />
                                    </div>
                                    <span>Women's Health</span>
                                </div>
                                <div className="specializationCard">
                                    <div className="imgContainer">
                                        <img src="/Skincare.png" alt="" />
                                    </div>
                                    <span>Skin care</span>
                                </div>
                                <div className="specializationCard">
                                    <div className="imgContainer">
                                        <img src="/Immunity.png" alt="" />
                                    </div>
                                    <span>
                                        Immunity
                                    </span>
                                </div>
                                <div className="specializationCard">
                                    <div className="imgContainer">
                                        <img src="/Hair.png" alt="" />
                                    </div>
                                    <span>
                                        Hair Care
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="concerns">
                            <div className="heading3">
                                <h2>The Concerns i Treat</h2>
                            </div>
                            <div className="concernContainer">
                                <div className="spanContainer">
                                    <span>Skin Treatment</span>
                                </div>
                                <div className="spanContainer">
                                    <span>Pregnancy</span>
                                </div>
                                <div className="spanContainer">
                                    <span>Period Doubts</span>
                                </div>
                                <div className="spanContainer">
                                    <span>Endometriosis</span>
                                </div>
                                <div className="spanContainer">
                                    <span>Pelvic Pain</span>
                                </div>
                                <div className="spanContainer">
                                    <span>Ovarian Cysts</span>
                                </div>
                                <div className="spanContainer">
                                    <span>+ 5 More</span>
                                </div>

                            </div>
                        </div>


                        <div className="experience">
                            <div className="heading4">
                                <h2>My Work Experience</h2>
                            </div>
                            <div className="numberExp">
                                <h2>I have been in practice for : 7+ Years</h2>
                            </div>
                            <div className="line"></div>
                            <div className="lowerCont">
                                <div className="Element">
                                    <img src="/element.png" alt="" />
                                    <div className="right">
                                        <div className="detail">
                                            <span className="hospital">Midtown Medical Clinic</span>
                                            <span className="post">Senior doctor</span>
                                        </div>
                                        <div className="duration">2016-PRESENT</div>
                                    </div>
                                </div>
                                <div className="Element">
                                    <img src="/element.png" alt="" />
                                    <div className="right">
                                        <div className="detail">
                                            <span className="hospital">Midtown Medical Clinic</span>
                                            <span className="post">Senior doctor</span>
                                        </div>
                                        <div className="duration">2010 -2015</div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="review">
                            <div className="heading5">
                                <h2>Featured Reviews (102)</h2>
                            </div>
                            <div className="review-wrapper">
                                <div className="reviewContainer">
                                    <div className="upper">
                                        <img src="/reviewPic.png" alt="" />
                                        <div className="details">
                                            <div className="detail">

                                                <span className="name">Alicent Hightower</span>
                                                <span className="issue">Consulted for Skin care</span>
                                            </div>
                                            <div className="time">
                                                20 January 2023
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviewgiven">
                                        <div className="imgContainer"><img src="/stars.png" alt="" /></div>
                                        <p className="para">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                                    </div>

                                </div>
                                <div className="reviewContainer">
                                    <div className="upper">
                                        <img src="/reviewPic.png" alt="" />
                                        <div className="details">
                                            <div className="detail">

                                                <span className="name">Alicent Hightower</span>
                                                <span className="issue">Consulted for Skin care</span>
                                            </div>
                                            <div className="time">
                                                20 January 2023
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviewgiven">
                                        <div className="imgContainer"><img src="/stars.png" alt="" /></div>
                                        <p className="para">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="right">
                        <div className="wrapper">
                            <div className="feeContainer">
                                <h2>Appointment fee</h2>
                                <span>₹699.00</span>
                            </div>
                            <div className="subheading1">
                                <h2>Select your mode of session</h2>
                                <div></div>
                            </div>

                            <div className="sessions">
                                <div className="session">
                                    <span className="type">In-clinic</span>
                                    <span className="duration">45 Mins</span>
                                </div>
                                <div className="session">
                                    <span className="type">Video</span>
                                    <span className="duration">45 Mins</span>
                                </div>
                                <div className="session">
                                    <span className="type">Chat</span>
                                    <span className="duration">10 Mins</span>
                                </div>

                            </div>
                            <div className="subheading2">
                                <h2>Pick a Time slot</h2>
                                <div className="line"></div>
                                <div className="calender">
                                    <img src="/calendar.png" alt="" />
                                </div>
                            </div>

                            <div className="slot-timings">
                                <CiCircleChevLeft className="navs" />

                                <div className="slot">
                                    <span className="day">Mon, 10 Oct</span>
                                    <span className="avilable">10 slots</span>
                                </div>

                                <div className="slot">
                                    <span className="day">Tue, 11 Oct</span>
                                    <span className="avilable">02 slots</span>
                                </div>

                                <div className="slot">
                                    <span className="day">Wed, 12 Oct</span>
                                    <span className="avilable"> 5 slots</span>
                                </div>

                                <CiCircleChevRight className="navs" />

                            </div>

                            <div className="zone">
                                <h2>Morning</h2>
                                <div className="timings">
                                    <div className={activeId === 1 ? 'active' : ''}
                                        onClick={() => handleClick(1)}>09:00 AM</div>
                                    <div className={activeId === 2 ? 'active' : ''}
                                        onClick={() => handleClick(2)} >09:30 AM</div>
                                    <div className={activeId === 3 ? 'active' : ''}
                                        onClick={() => handleClick(3)}>10:00 AM</div>
                                    <div className={activeId === 4 ? 'active' : ''}
                                        onClick={() => handleClick(4)}>10:15 AM</div>
                                    <div className={activeId === 5 ? 'active' : ''}
                                        onClick={() => handleClick(5)}>10:45 AM</div>
                                    <div className={activeId === 6 ? 'active' : ''}
                                        onClick={() => handleClick(6)}>11:00 AM</div>
                                </div>
                            </div>
                            <div className="zone">
                                <h2>Evening</h2>
                                <div className="timings">
                                    <div className={activeId2 === 1 ? 'active' : ''}
                                        onClick={() => handleClick2(1)}>04:00 PM</div>
                                    <div className={activeId2 === 2 ? 'active' : ''}
                                        onClick={() => handleClick2(2)}>04:15 PM</div>
                                    <div className={activeId2 === 3 ? 'active' : ''}
                                        onClick={() => handleClick2(3)}>04:30 PM</div>
                                    <div className={activeId2 === 4 ? 'active' : ''}
                                        onClick={() => handleClick2(4)}>04:45 PM</div>
                                    <div className={activeId2 === 5 ? 'active' : ''}
                                        onClick={() => handleClick2(5)}>04:15 PM</div>
                                </div>
                            </div>
                            <button>Make An Appointment</button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}
export default Doctor;
