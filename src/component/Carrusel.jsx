import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carrusel.css'

const Carrusel = ({ video, categoria }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="carousel-container">
            <h1 className="carousel-title">{categoria}</h1>
            <Slider {...settings}>
                {video.map(vi => (
                    <div key={vi.id} className="carousel-item">
                        <iframe 
                            className="carousel-video"
                            width="200"
                            height="200"
                            src={vi.enlaceUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Carrusel