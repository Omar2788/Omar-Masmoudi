import { Carousel } from '@sefailyasoz/react-carousel'
import "./carousel.css"
import c1 from "../../img/Jquery.jpg";
import c2 from "../../img/badge1.png";
import c3 from "../../img/awsCertif.png";
import c4 from "../../img/datacamp.jpg";
import c5 from "../../img/java.png";
import c6 from "../../img/python.jpg";
import c7 from "../../img/pythonCore.jpg";
import c8 from "../../img/JavaScript.png";
import c9 from "../../img/NodeJs.jpg";

const Certification = () => {

const CarouselData = [
  {
    headerText: null,
    subText: null,
    image: c4,
  },
  {
    headerText: null,
    subText: null,
    image: c3,
  },
  {
    headerText: null,
    subText: null,
    image: c1,
  },
  {
    
    image: c5,
  },
  {
    
    image: c6,
  },
  {
    headerText: 'Badge from IBM',
    subText: null,
    image: c2,
  },
  {
    headerText: null,
    subText: null,
    image: c8,
  },
  {
    headerText: null,
    subText: null,
    image: c7,
  },
  {
    headerText: null,
    subText: null,
    image: c9,
  },
]
  return    <Carousel
              data={CarouselData}
              autoPlay={false}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
}

export default Certification