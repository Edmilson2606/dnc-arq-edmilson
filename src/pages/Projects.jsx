import { useContext } from 'react'
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import Footer from '../components/Footer/Footer';

// CONTEXTS
import { AppContext } from '../contexts/AppContext'

function Projects() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg" />
            <ProjectsList />
            <Footer />
        </>
    );
}

export default Projects;
