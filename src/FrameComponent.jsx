import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import wave1 from './assets/wave1.png'
import wave2 from './assets/wave2.png'

export default function MyComponent() {

  const [activeCard, setActiveCard] = useState('');



  const scrollToCard = (id) => {
    setActiveCard(id);
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };



  useEffect(() => {
    if (activeCard) {
      const timer = setTimeout(() => setActiveCard(''), 1000); // Remove active class after 1 second
      return () => clearTimeout(timer);
    }
  }, [activeCard]);


  return (

    <>
      <div className="button-container">
        <button className="scroll-button bg-red-500 hover:bg-red-300" onClick={() => scrollToCard('card1')}>Go to Card 1</button>
        <button className="scroll-button bg-green-500 hover:bg-green-300" onClick={() => scrollToCard('card2')}>Go to Card 2</button>
        <button className="scroll-button bg-blue-500 hover:bg-blue-300" onClick={() => scrollToCard('card3')}>Go to Card 3</button>
      </div>

      <div className="flex relative top-[120px] flex-col bg-white">
        <div className="flex z-10 flex-col items-center self-center px-5  w-full max-w-[1207px] max-md:max-w-full">

          <div className=" max-md:max-w-full ">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                {/*  img 1 */}
                <div id="card1" className={`card ${activeCard === 'card1' ? 'active' : ''}  shrink-0 mx-auto max-w-full  h-[400px] w-[340px] max-md:mt-10 img1   `} />
              </div>
              <div className="flex flex-col ml-5 w-96 max-md:ml-0 max-md:w-full">
                <div id="card2" className={`card ${activeCard === 'card1' ? 'active' : ''} p-5 flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full `}>

                  <h3 className="m-4 text-2xl text-center">Submit Application</h3>
                  <p>Introduce yourself and discuss your reasons for wanting to participate in this programs.</p>
                  <p>valuable resources for students, educators. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur hic voluptas velit dolore mollitia a voluptatem laudantium, commodi eos nesciunt officiis ducimus odio, distinctio quasi minima facere numquam ea adipisci.</p>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src={wave1}
            className="max-w-full    aspect-[3.85] stroke-[4px]   w-[680px]"
          />
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className={`card ${activeCard === 'card2' ? 'active' : ''} p-5 flex flex-col w-80 max-md:ml-0 max-md:w-full`} id="card4">
                <div className="flex flex-col  self-stretch  max-md:mt-10 max-md:max-w-full">
                  <h3 className="m-4 text-2xl text-center">Submit Application</h3>
                  <p>Introduce yourself and discuss your reasons for wanting to participate in this programs.</p>
                  <p>valuable resources for students, educators. </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">

                {/* img 2 */}
                <div className={`card ${activeCard === 'card2' ? 'active' : ''} img2 shrink-0 mx-auto max-w-full  h-[400px] w-[340px] max-md:mt-10 `} id="card3" />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src={wave2}
            className="max-w-full  aspect-[3.85]  w-[600px]"
          />
          <div className="z-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">

                  {/* img-3 */}
                  <div className={`card ${activeCard === 'card3' ? 'active' : ''} shrink-0 img-3 h-[400px] max-md:max-w-full  `} id="card5" />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ec01cc7cd4f9825085707439bc049614020a03b354ba9b5823acaf1ccc05fd3?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                    className="self-end max-w-full  aspect-[1.79] stroke-[4px]  w-[380px]"
                  />
                </div>
              </div>
              <div className={`card ${activeCard === 'card3' ? 'active' : ''} shrink-0 mx-auto max-w-full ml-8  h-[400px] w-[340px] max-md:mt-10 `} id="card6">
                <div className="flex flex-col p-5 max-md:mt-10 max-md:max-w-full">

                  <h3 className="text-2xl m-4 text-center">Certification</h3>
                  <p>Get certification after completion of the workshop.Join us in embracing the future of learning, where technology meets personalized education, creating opportunities for everyone to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 self-end mt-60 max-w-full h-[98px] w-[591px] max-md:mt-10 max-md:mr-2.5" />
        </div>
      </div>
    </>
  );
}

