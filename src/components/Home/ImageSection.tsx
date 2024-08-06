import daniloDuotone from '../../assets/danilo-duotone.jpg';

function ImageSection() {
    return (
        <div className="flex justify-end mb-10">
            <img className="w-80 rounded-2xl" src={daniloDuotone} alt="Danilo Duotone" />
        </div>
    );
}

export default ImageSection;
