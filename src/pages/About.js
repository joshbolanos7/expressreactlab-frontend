import { useState, useEffect } from "react";
import { Document, Page } from 'react-pdf';
import SinglePagePDFViewer from "../components/pdf/single-page"
import resumepdf from '../components/pdf/bolanos-resume2021.pdf';

function About(props) {
    //create state to hold about data
    const [about, setAbout] = useState(null);

    //create function to make api call
    const getAboutData = async () => {
        // make api call and get response
        const response = await fetch(props.URL + "about");
        //turn response into javascript object
        const data = await response.json();
        // set the about state to the data
        setAbout(data);
    };

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getAboutData(), []);

    //define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <div className="backend-info">
                {/* <h2>{about.name}</h2>
                <h3>{about.email}</h3> */}
                <p>{about.bio}</p>
            </div>

            <div className="plat-techs">
                <h2>Experinced Technology</h2>
                <li>React JS</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Express</li>
                <li>JavaScript</li>

            </div>

       
            <div className="resume">
                <SinglePagePDFViewer pdf={resumepdf} />
            </div>


        </div>
    );

    //if data arrives return the result of loaded, if not an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;