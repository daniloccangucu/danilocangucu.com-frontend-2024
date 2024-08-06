import './Home.css'
import TextSection from './TextSection';
import ImageSection from './ImageSection';

function Intro() {
    return (
        <>
            <TextSection />
            <div className="flex-grow"></div>
            <ImageSection />
        </>
    );
}


export default Intro
