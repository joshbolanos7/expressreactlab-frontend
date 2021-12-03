
import { Document, Page } from 'react-pdf';
import SinglePagePDFViewer from "../components/pdf/single-page"
import resumepdf from '../components/pdf/bolanos-resume2021.pdf';


// console.log(background);
function Home(props) {
    return (
        <div>
            <div className="home">
                <h1>Hello! I'm Joshua Bolanos and I am a Full Stack Developer.  </h1>

                <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.18172-8/13119809_1029267930454877_1757747452568621221_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a9b1d2&_nc_ohc=GJctq0yHlvsAX_AMy1s&_nc_ht=scontent-lga3-1.xx&oh=6daca34852538a58766059c7847b9293&oe=61D078C6" width='400px' height='500px' alt="josh-img"/>
            </div>

          

        </div>
    )
}

export default Home;