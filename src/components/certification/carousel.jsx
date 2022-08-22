import { Carousel } from '@sefailyasoz/react-carousel'
import "./carousel.css"
const Certification = () => {

const CarouselData = [
  {
    headerText: null,
    subText: null,
    image: 'https://media-exp1.licdn.com/dms/image/C4D22AQEqqRj09axTdQ/feedshare-shrink_2048_1536/0/1639680073955?e=1663804800&v=beta&t=nck1UERI1EaKqQG-LtWTtoNqemyCamQ_3ZSXpXn-lko',
  },
  {
    headerText: null,
    subText: null,
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GSP9KY4CXNWL/CERTIFICATE_LANDING_PAGE~GSP9KY4CXNWL.jpeg',
  },
  {
    headerText: null,
    subText: null,
    image: 'https://media-exp1.licdn.com/dms/image/C4E22AQHAxtyncJD95w/feedshare-shrink_800/0/1620470561219?e=1663804800&v=beta&t=EM9jPyiAgmwArRi8grDvtRI2zIkAi2bScE_il7MgB9w',
  },
  {
    
    image: 'https://media-exp1.licdn.com/dms/image/C4E22AQHVf81UmuRMfg/feedshare-shrink_800/0/1620160339532?e=1663804800&v=beta&t=atOFcDb6faMEt_BPSinGmF-2buBIaIVs9VEaw5nRaGc',
  },
  {
    
    image: 'https://media-exp1.licdn.com/dms/image/C4E22AQGQap6_ambS-g/feedshare-shrink_2048_1536/0/1619393278318?e=1663804800&v=beta&t=gbcqFFI140rIqjq4ENjYOidZ1dldTPZb-EBGRzzLU3k',
  },
  {
    headerText: 'Badge from IBM',
    subText: null,
    image: 'https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/300817407_401099382155719_1944027427041436373_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=G5NuhM6uMzoAX_K4Wnv&_nc_ht=scontent.ftun14-1.fna&oh=03_AVLizCiLx_mmE78jSIpUHQQfE440q_MAH4_s_0Xr95E0bw&oe=632B1FA0',
  },
  {
    headerText: null,
    subText: null,
    image: 'https://media-exp1.licdn.com/dms/image/C4E22AQFYgyPe06KOaQ/feedshare-shrink_2048_1536/0/1624229944472?e=1663804800&v=beta&t=fjBlWP-5CT0-UiAMmPRB58AVwEAwBw8vbi7PpjjZ86w',
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