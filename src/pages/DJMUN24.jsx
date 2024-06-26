import { React, useEffect } from 'react'
import '../components/Navbar.css'

const DJMUN24 = () => {
  const cardsInfo = [
    {title: "OPEC: Political Club vs. Economic Cartel", content: "Assessing the global oil market implications when member nations prioritize leveraging OPEC as a platform for geopolitical influence over its economic functions.", logo: "./icons/opec.png"},
    {title: "UNSC: The Nagorno-Karabakh Conflict", content: "Addressing the historical claims, influence of regional powers and their strategic interests and the efficacy of international ceasefire agreements.", logo: "./icons/unsc.png"},
    {title: "LOK SABHA: Reservation: A Baggage carried too far?", content: "Debating on caste-based reservations, the extension of reservations to economically weaker sections (EWS), and the implications of these policies on social justice.", logo: "./icons/loksabha.jpg"},
    {title: "UNCSW: Where are the Women Leaders?", content: "Discussing the lack of women representation in political leadership with a special emphasis on the MENA region.", logo: "./icons/uncsw.png"},
    {title: "Continuous Crisis Committee", content: "", logo: "./icons/crisis.jpg"},
    {title: "International Press (IP)", content: "", logo: "./icons/ip.png"}
  ];

  return (
    <>
      <div 
        className='w-full lg:pt-6 pt-6 min-h-screen flex-col justify-center items-center' 
        // data-aos="fade-down" 
        // data-aos-delay="300"
      >
        <div className='text-center text-5xl lg:text-[120px] font-bold font-Quicksand lg:pb-8 pb-12'>DJSMUN'24</div>
        <div className="w-full lg:px-44 px-[14px] text-xl text-center pb-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore et nostrum hic itaque doloremque, distinctio consequuntur officia harum culpa eveniet aliquid iusto ad autem laboriosam vitae illum ex magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem nostrum atque explicabo porro, magnam eum iste rem dolorum eos neque aperiam dolorem assumenda vero, nisi facilis ad deserunt perferendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis, blanditiis minus inventore sequi officiis unde earum quos aut distinctio nisi laudantium, quae aliquam quas ratione quam perspiciatis magni nostrum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore et nostrum hic itaque doloremque, distinctio consequuntur officia harum culpa eveniet aliquid iusto ad autem laboriosam vitae illum ex magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem nostrum atque explicabo porro, magnam eum iste rem dolorum eos neque aperiam dolorem assumenda vero, nisi facilis ad deserunt perferendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis, blanditiis minus inventore sequi officiis unde earum quos aut distinctio nisi laudantium, quae aliquam quas ratione quam perspiciatis magni nostrum!
          </p>
        </div>
      
        <a 
          // data-aos="fade-up" 
          // data-aos-delay="1300"
          href="https://instagram.com"
          target="_blank"
          className="pointer text-[18px] w-[225px] ml-[70px] lg:ml-[650px] lg:mb-32 mb-6 flex items-center justify-start gap-1 px-4 py-2 text-white hover:text-[#242424] hover:bg-white hover:scale-110 rounded-full border-[2px] border-solid border-white font-medium leading-normal button-2"
        >
          Apply for this event
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>

        <div className='w-full flex justify-center'>
          <div className="w-full p-4 pt-20">
            <h1 className="text-5xl font-bold text-center text-white mb-12">COMMITTEES</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardsInfo.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} logo={card.logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

const Card = ({ title, content, logo }) => (
  <div className="border-solid border-2 border-white text-white lg:p-6 p-4 rounded-xl shadow-md w-full mb-6 flex-row lg:flex justify-center items-center lg:gap-5">
    <div className="lg:hidden w-full lg:w-1/4 ml-[90px] lg:ml-0">
      <div className='w-28 h-28 lg:w-36 lg:h-36 bg-gray-300 rounded-full lg:mx-4'>
        {logo && <img src={logo} className="h-full w-full object-cover rounded-full" />}
      </div>
    </div>
    <div className="w-full lg:w-3/4 flex-col items-center gap-1 mb-4 pt-3 text-center">
      <h2 className="text-2xl font-bold pb-3">{title}</h2>
      <p className='lg:text-lg text-sm'>{content}</p>
    </div>
    <div className="hidden lg:block w-full lg:w-1/4">
      <div className='w-28 h-28 lg:w-36 lg:h-36 rounded-full lg:mx-4'>
        {logo && <img src={logo} className="h-full w-full object-cover rounded-full" />}
      </div>
    </div>
  </div>
);

export default DJMUN24
