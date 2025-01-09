import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProjectsList from '../components/ProjectsList/ProjectsList';

function Home() {
    return (
        <>
            <Header />    
            <Hero />
            <ProjectsList />
            <Footer />
        </>
    )
}

export default Home;