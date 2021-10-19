
import background from '../images/eat-code-sleep-repeat.jpeg'

console.log(background);
function Home(props) {
    return (
        <div className="home">
            <h1>Hello and Welcome to my Portfolio! Click any of the links above to navigate yourself around the webpage. </h1>
            <img src={background} className='esrpic'/>
        </div>
    )
}

export default Home;