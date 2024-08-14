import './Intro.css'
import TextSection from './TextSection';
import ImageSection from './ImageSection';

function Intro() {
    return (
        <>
            <div
                className="flex flex-col"
                style={{ minHeight: "calc(100vh - 84px)" }}
            >
                <TextSection />
                <div className="flex-grow"></div>
                <ImageSection />
            </div >
        </>

    );
}


export default Intro
