import Homepage from './Homepage';
import Navbar from '../myrou/Navbar';
import CourseNavigation from './CourseNavigation'
import Testimonial from './Testimonial';
import Footer from './Footer';
import JoinPage from './JoinPage';
import TopArtists from './TopArtists';
import PortfolioPage from './PortfolioPage';
import OfferCardd from './OfferCardd'



function Mainpage() {
  return (
    <div style={{width:"98.5vw", overflow:"hidden"}}>
     <Navbar />
     <OfferCardd />
     <Homepage />
     <TopArtists />
    <PortfolioPage />
     <JoinPage />
     <Footer />
    </div>
  );
}

export default Mainpage;