
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Navbar.css'; // Ensure this path is correct

const DJMUN24 = () => {
  const navigate = useNavigate();

  const cardsInfo = [
    {
      title: 'AFRICAN UNION PEACE AND SECURITY COUNCIL (FLAGSHIP COMMITTEE)',
      content: 'CLASSIFIED',
      logo: './icons/crisis.jpg',
      listlink: 'list1',
      flowlink: 'flow',
      timelink: 'time',
    },
    {
      title: 'UNSC: The Nagorno-Karabakh Conflict',
      content: 'Addressing the historical claims, influence of regional powers and their strategic interests and the efficacy of international ceasefire agreements.',
      logo: './icons/unsc.png',
      listlink: 'list2',
      flowlink: 'flow1',
      timelink: 'time1',
    },
    {
      title: 'LOK SABHA: Reservation: A Baggage carried too far',
      content: 'Debating on caste-based reservations, the extension of reservations to economically weaker sections (EWS), and the implications of these policies on social justice.',
      logo: './icons/loksabha.jpg',
      listlink: 'list3',
      flowlink: 'flow2',
      timelink: 'time2',
    },
    {
      title: 'UNCSW: Lack of Women in Political Leadership',
      content: 'Discussing the lack of women representation in political leadership with a special emphasis on the MENA region.',
      logo: './icons/uncsw.png',
      listlink: 'list4',
      flowlink: 'flow1',
      timelink: 'time3',
    },
    {
      title: 'International Press (IP)',
      content: 'Press combines in-depth journalism with captivating photography to bring you stories that matter.',
      logo: './icons/ip.png',
      listlink: 'list5',
      flowlink: 'flow',
      timelink: 'time4',
    },
  ];

  const handleParticipantsClick = (listlink) => {
    navigate(`/${listlink}`);
  };

  const handleFlowClick = (flowlink) => {
    navigate(`/${flowlink}`);
  };

  const handleTimeClick = (timelink) => {
    navigate(`/${timelink}`);
  };

  const Card = ({ title, content, logo, listlink, flowlink, timelink }) => (
    <div
      className='border-solid border-2 border-white text-white lg:p-6 p-4 rounded-xl shadow-md w-full mb-6 flex-row lg:flex justify-center items-center lg:gap-5'
      data-aos='fade-up'
      data-aos-delay='100'
    >
      <div className='lg:hidden w-full lg:w-1/4 ml-[90px] lg:ml-0'>
        <div className='w-32 h-32 lg:w-36 lg:h-36 bg-gray-300 rounded-full lg:mx-4'>
          {logo && <img src={logo} className='h-full w-full object-cover rounded-full' alt={title} />}
        </div>
      </div>
      <div className='w-full lg:w-3/4 flex-col items-center gap-1 mb-4 pt-3 text-center'>
        <h2 className='text-2xl font-bold pb-3'>{title}</h2>
        <p className='lg:text-lg text-sm'>{content}</p>
        <div className='flex justify-center gap-4 mt-4'>
          <button
            onClick={() => handleFlowClick(flowlink)}
            className='text-white px-4 py-2 rounded-full border-2 border-white hover:text-black hover:bg-white hover:scale-110 transition duration-400'
          >
            Flow of Committee
          </button>
          <button
            onClick={() => handleParticipantsClick(listlink)}
            className='text-white px-4 py-2 rounded-full border-2 border-white hover:text-black hover:bg-white hover:scale-110 transition duration-400'
          >
            Participants List
          </button>
          <button
            onClick={() => handleTimeClick(timelink)}
            className='text-white px-4 py-2 rounded-full border-2 border-white hover:text-black hover:bg-white hover:scale-110 transition duration-400'
          >
            &#x1F552;
          </button>
        </div>
      </div>
      <div className='hidden lg:block w-full lg:w-1/4'>
        <div className='w-36 h-36 lg:w-36 lg:h-36 rounded-full lg:mx-4'>
          {logo && <img src={logo} className='h-full w-full object-cover rounded-full' alt={title} />}
        </div>
      </div>
    </div>
  );

  return (
    <div className='w-full lg:pt-6 pt-6 min-h-screen flex-col justify-center items-center'>
      <div
        className='text-center text-6xl lg:text-[120px] font-bold font-Quicksand lg:pb-8 pb-5'
        data-aos='fade-down'
        data-aos-delay='300'
      >
        DJMUN'24
      </div>
      <div className='w-full text-xl lg:text-3xl font-bold lg:font-extrabold mb-10 lg:pl-1 pl-3' data-aos='fade-down' data-aos-delay='300'>
        <p className='w-full text-center'>Date: 27th and 28th July, 2024</p>
      </div>
      <div className='w-full lg:px-44 px-[14px] text-2xl text-center pb-10' data-aos='fade-down' data-aos-delay='300'>
        <p>
          Join us for an exhilarating journey of diplomacy and debate at the DJMUN 2024 Conference! With five engaging committees tackling critical global issues, this is your opportunity to step into the shoes of international diplomats, collaborate with peers, and make your voice heard on the world stage. <br /> <br />Registrations are now live – don't miss out on being a part of this transformative experience. Sharpen your negotiation skills, expand your global perspective, and contribute to impactful resolutions
        </p>
      </div>

      

      <div className='w-full flex flex-col justify-center items-center pt-2' data-aos='fade-up' data-aos-delay='500'>
        <button
          className='pointer text-center text-[15px] w-[80px] lg:mb-10 mb-1 flex items-center justify-start gap-1 px-2 py-2 text-white hover:text-[#242424] hover:scale-110 transition duration-400 rounded-full border-[2px] border-solid border-white font-medium leading-normal'
          onClick={() => navigate('/cntdwn')}
        > 
          <img src='/clock.png' alt='clock'/>
        </button>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-full p-4 pt-20'>
          <h1 className='text-5xl font-bold text-center text-white mb-12' data-aos='fade-in' data-aos-delay='300'>
            COMMITTEES
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {cardsInfo.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                content={card.content}
                logo={card.logo}
                listlink={card.listlink}
                flowlink={card.flowlink}
                timelink={card.timelink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJMUN24;
