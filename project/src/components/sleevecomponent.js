// import React from 'react';
// import img1 from "../assets/shelves.png";
// import img2 from "../assets/AppMusic.png";
// import img3 from "../assets/AppSpotify.png";
// import img4 from "../assets/AppDoppler.png";

// const sharedClasses = {
//   bgWhite: 'bg-white',
//   bgDark: 'dark:bg-zinc-900',
//   textWhite: 'text-white',
//   textDark: 'dark:text-white',
//   textZinc300: 'dark:text-zinc-300',
//   textZinc400: 'dark:text-zinc-400',
//   textRed500: 'text-red-500',
//   textGreen500: 'text-green-500',
//   textBlue500: 'text-blue-500',
//   mt4: 'mt-4',
//   mt2: 'mt-2',
//   mt8: 'mt-8',
//   flexCenter: 'flex justify-center',
//   spaceX4: 'space-x-4',
//   bgBlack: 'bg-black',
//   textBlack: 'text-black',
//   px6: 'px-6',
//   py3: 'py-3',
//   roundedLG: 'rounded-lg',
//   flexItemsCenter: 'flex items-center',
//   spaceX2: 'space-x-2',
//   border: 'border',
//   borderZinc300: 'border-zinc-300',
//   textSm: 'text-sm',
//   textZinc500: 'text-zinc-500',
//   bgZinc100: 'bg-zinc-100',
//   bgDarkZinc800: 'dark:bg-zinc-800',
//   p4: 'p-4',
//   inlineFlex: 'inline-flex',
//   textZinc300: 'dark:text-zinc-300',
//   fontBold: 'font-bold',
// };

// const SleeveComponent = () => {
//   return (
//     <div className={`text-center py-16 ${sharedClasses.bgWhite} ${sharedClasses.bgDark}`}>
//       <h1 className={`text-5xl font-bold ${sharedClasses.textDark}`}>
//         Sleeve <span className="text-3xl">2</span>
//       </h1>
//       <p className={`mt-4 text-xl ${sharedClasses.textZinc300}`}>The ultimate music accessory for your Mac.</p>
//       <p className={`mt-2 text-lg ${sharedClasses.textZinc400}`}>Sleeve sits on the desktop, displaying and controlling the music you’re currently playing in <span className={sharedClasses.textRed500}><img src={img2}/> Apple Music</span>, <span className={sharedClasses.textGreen500}><img src={img3}/>Spotify</span>, and <span className={sharedClasses.textBlue500}><img src = {img4}/>Doppler</span>.</p>
//       <div className={`mt-8 ${sharedClasses.flexCenter} ${sharedClasses.spaceX4}`}>
//         <a href="#" className={`bg-black text-white px-6 py-3 rounded-lg ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
//           <img src="https://placehold.co/20x20" alt="Apple Logo" />
//           <span>Mac App Store</span>
//         </a>
//         <a href="#" className={`bg-white ${sharedClasses.border} ${sharedClasses.borderZinc300} text-black px-6 py-3 rounded-lg ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
//           <span>Buy Directly</span>
//           <span className={`bg-zinc-200 px-2 py-1 rounded-lg`}>$5.99</span>
//         </a>
//       </div>
//       <p className={`mt-4 ${sharedClasses.textSm} ${sharedClasses.textZinc500} ${sharedClasses.textZinc400}`}>No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.</p>
//       <div className={`mt-8 ${sharedClasses.bgZinc100} ${sharedClasses.bgDarkZinc800} ${sharedClasses.p4} ${sharedClasses.roundedLG} ${sharedClasses.inlineFlex} ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
//         <img src={img1} alt=" " />
//         <p className={`${sharedClasses.textZinc300}`}>Now with <span className={sharedClasses.fontBold}>shelves and a progress bar</span>. See what's new in Sleeve 2.3</p>
//       </div>
//     </div>
//   );
// };

// export default SleeveComponent;


import React from 'react';
import img1 from "../assets/shelves.png";
import img2 from "../assets/AppMusic.png";
import img3 from "../assets/AppSpotify.png";
import img4 from "../assets/AppDoppler.png";

const sharedClasses = {
  bgWhite: 'bg-white',
  bgDark: 'dark:bg-zinc-900',
  textWhite: 'text-white',
  textDark: 'dark:text-white',
  textZinc300: 'dark:text-zinc-300',
  textZinc400: 'dark:text-zinc-400',
  textRed500: 'text-red-500',
  textGreen500: 'text-green-500',
  textBlue500: 'text-blue-500',
  mt4: 'mt-4',
  mt2: 'mt-2',
  mt8: 'mt-8',
  flexCenter: 'flex justify-center',
  spaceX4: 'space-x-4',
  bgBlack: 'bg-black',
  textBlack: 'text-black',
  px6: 'px-6',
  py3: 'py-3',
  roundedLG: 'rounded-lg',
  flexItemsCenter: 'flex items-center',
  spaceX2: 'space-x-2',
  border: 'border',
  borderZinc300: 'border-zinc-300',
  textSm: 'text-sm',
  textZinc500: 'text-zinc-500',
  bgZinc100: 'bg-zinc-100',
  bgDarkZinc800: 'dark:bg-zinc-800',
  p4: 'p-4',
  inlineFlex: 'inline-flex',
  fontBold: 'font-bold',
};

const SleeveComponent = () => {
  return (
    <div className={`text-center py-16 ${sharedClasses.bgWhite} ${sharedClasses.bgDark}`}>
      <h1 className={`text-5xl font-bold ${sharedClasses.textDark}`}>
        Sleeve <span className="text-3xl">2</span>
      </h1>
      <p className={`mt-4 text-xl ${sharedClasses.textZinc300}`}>The ultimate music accessory for your Mac.</p>
      <p className={`mt-2 text-lg ${sharedClasses.textZinc400}`}>
        Sleeve sits on the desktop, displaying and controlling the music you’re currently playing in
        <span className={`inline-flex items-center ${sharedClasses.textRed500} ml-2`}>
          <img src={img2} alt="Apple Music" className="w-5 h-5 mr-1" /> Apple Music
        </span>,
        <span className={`inline-flex items-center ${sharedClasses.textGreen500} ml-2`}>
          <img src={img3} alt="Spotify" className="w-5 h-5 mr-1" /> Spotify
        </span>, and
        <span className={`inline-flex items-center ${sharedClasses.textBlue500} ml-2`}>
          <img src={img4} alt="Doppler" className="w-5 h-5 mr-1" /> Doppler
        </span>.
      </p>
      <div className={`mt-8 ${sharedClasses.flexCenter} ${sharedClasses.spaceX4}`}>
        <a href="#" className={`bg-black text-white px-6 py-3 rounded-lg ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
          <img src="https://placehold.co/20x20" alt="Apple Logo" />
          <span>Mac App Store</span>
        </a>
        <a href="#" className={`bg-white ${sharedClasses.border} ${sharedClasses.borderZinc300} text-black px-6 py-3 rounded-lg ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
          <span>Buy Directly</span>
          <span className={`bg-zinc-200 px-2 py-1 rounded-lg`}>$5.99</span>
        </a>
      </div>
      <p className={`mt-4 ${sharedClasses.textSm} ${sharedClasses.textZinc500}`}>
        No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.
      </p>
      <div className={`mt-8 ${sharedClasses.bgZinc100} ${sharedClasses.bgDarkZinc800} ${sharedClasses.p4} ${sharedClasses.roundedLG} ${sharedClasses.inlineFlex} ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
        <img src={img1} alt="Shelves" className="w-16 h-16" />
        <p className={`${sharedClasses.textZinc300}`}>
          Now with <span className={sharedClasses.fontBold}>shelves and a progress bar</span>. See what's new in Sleeve 2.3
        </p>
      </div>
    </div>
  );
};

export default SleeveComponent;


// import React from 'react';
// import img1 from "../assets/shelves.png";
// import img2 from "../assets/AppMusic.png";
// import img3 from "../assets/AppSpotify.png";
// import img4 from "../assets/AppDoppler.png";

// const sharedClasses = {
//   bgWhite: 'bg-white',
//   bgDark: 'dark:bg-zinc-900',
//   textWhite: 'text-white',
//   textDark: 'dark:text-white',
//   textZinc300: 'dark:text-zinc-300',
//   textZinc400: 'dark:text-zinc-400',
//   textRed500: 'text-red-500',
//   textGreen500: 'text-green-500',
//   textBlue500: 'text-blue-500',
//   mt4: 'mt-4',
//   mt2: 'mt-2',
//   mt8: 'mt-8',
//   flexCenter: 'flex justify-center',
//   spaceX4: 'space-x-4',
//   bgBlack: 'bg-black',
//   textBlack: 'text-black',
//   px6: 'px-6',
//   py3: 'py-3',
//   roundedLG: 'rounded-lg',
//   flexItemsCenter: 'flex items-center',
//   spaceX2: 'space-x-2',
//   border: 'border',
//   borderZinc300: 'border-zinc-300',
//   textSm: 'text-sm',
//   textZinc500: 'text-zinc-500',
//   bgZinc100: 'bg-zinc-100',
//   bgDarkZinc800: 'dark:bg-zinc-800',
//   p4: 'p-4',
//   inlineFlex: 'inline-flex',
//   fontBold: 'font-bold',
// };

// const SleeveComponent = () => {
//   return (
//     <div className={`text-center py-16 ${sharedClasses.bgWhite} ${sharedClasses.bgDark}`}>
//       <h1 className={`text-5xl font-bold ${sharedClasses.textDark}`}>
//         Sleeve <span className="text-3xl">2</span>
//       </h1>
//       <p className={`mt-4 text-xl ${sharedClasses.textDark} font-bold`}>The ultimate music accessory for your Mac.</p>
//       <p className={`mt-2 text-lg ${sharedClasses.textDark} font-bold`}>
//         Sleeve sits on the desktop, displaying and controlling the music you’re currently playing in
//         <span className={`inline-flex items-center ml-2 ${sharedClasses.textRed500}`}>
//           <img src={img2} alt="Apple Music" className="w-5 h-5 mr-1" /> Apple Music
//         </span>,
//         <span className={`inline-flex items-center ml-2 ${sharedClasses.textGreen500}`}>
//           <img src={img3} alt="Spotify" className="w-5 h-5 mr-1" /> Spotify
//         </span>, and
//         <span className={`inline-flex items-center ml-2 ${sharedClasses.textBlue500}`}>
//           <img src={img4} alt="Doppler" className="w-5 h-5 mr-1" /> Doppler
//         </span>.
//       </p>
//       <div className={`mt-8 ${sharedClasses.flexCenter} ${sharedClasses.spaceX4}`}>
//         <a href="#" className={`bg-black text-white px-6 py-3 rounded-lg ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
//           <img src="https://placehold.co/20x20" alt="Apple Logo" />
//           <span>Mac App Store</span>
//         </a>
//         <a href="#" className={`bg-white ${sharedClasses.border} ${sharedClasses.borderZinc300} text-black px-6 py-3 rounded-lg ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
//           <span>Buy Directly</span>
//           <span className={`bg-zinc-200 px-2 py-1 rounded-lg`}>$5.99</span>
//         </a>
//       </div>
//       <p className={`mt-4 ${sharedClasses.textSm} ${sharedClasses.textZinc500}`}>
//         No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.
//       </p>
//       <div className={`mt-8 ${sharedClasses.bgZinc100} ${sharedClasses.bgDarkZinc800} ${sharedClasses.p4} ${sharedClasses.roundedLG} ${sharedClasses.inlineFlex} ${sharedClasses.flexItemsCenter} ${sharedClasses.spaceX2}`}>
//         <img src={img1} alt="Shelves" className="w-16 h-16" />
//         <p className={`${sharedClasses.textZinc300}`}>
//           Now with <span className={sharedClasses.fontBold}>shelves and a progress bar</span>. See what's new in Sleeve 2.3
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SleeveComponent;
