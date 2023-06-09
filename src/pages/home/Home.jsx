import './home.css';
import Navbar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx';
import Featured from '../../components/featured/Featured.jsx';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Homes Guests love</h1>
          <FeaturedProperties/>
          <MailList />
          <Footer/>
        </div>
    </div>
  )
}

export default Home