
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className="footer-distributed">
            <div>
                <div class="footer-left">
                    <h3>Contact Me</h3>

                </div>
                <div className="footer-center">

                    <a href='https://github.com/joshbolanos7'> <AiFillGithub size = {40} /></a> 

                    <a href='https://www.linkedin.com/in/joshua-bolanos7/'><AiFillLinkedin size ={40} /> </a> 

                    <a href="mailto:josh.bolanos7@gmail.com">Email Me</a> <br />

                    <copy> &copy; Joshua Bolanos 2021</copy>


                </div>

            </div>
        </footer>
    )
}

// function Footer(props) {
//     return (
//         <div className="footer">
//             <p>A Josh Bolanos Creation: JOSH,INC</p>
//         </div>
//     )
// }

// export default Footer;