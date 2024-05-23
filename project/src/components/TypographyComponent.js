import React from 'react';
import img from "../assets/IconArrayTrack (1).png";

const cardClass = 'bg-white shadow-md rounded-lg p-6';
const titleClass = 'text-xl font-bold mb-4';
const buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

// const Card = () => {
//   return (
//     <div className={cardClass}>
//       <h2 className={titleClass}>Welcome to My Website</h2>
//       <p className="text-gray-700 mb-4">Feel free to browse around and learn more about me.</p>
//       <button className={buttonClass}>Contact Me</button>
//     </div>
//   );
// };

// export default Card;


const sharedClasses = {
  button: 'px-4 py-2 rounded-lg',
  lightButton: 'bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200',
  darkButton: 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 border border-blue-600',
};

const TypographyComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-4 space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex items-start space-x-4">
        <img src={img} alt="Typography Icon" className="w-16 h-16" />
        <div>
          <h1 className="text-3xl font-bold">Typography</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">Pick the track info you want to display, and then exactly how to display it.</p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <button className={`${sharedClasses.button} ${sharedClasses.lightButton}`}>In Light Mode</button>
            <button className={`${sharedClasses.button} ${sharedClasses.lightButton}`}>In Dark Mode</button>
          </div>
          <div className="flex space-x-4 mb-4">
            <button className={`${sharedClasses.button} ${sharedClasses.darkButton}`}>Aa</button>
            <button className={`${sharedClasses.button} ${sharedClasses.lightButton}`}>Aa</button>
          </div>
          <div className="flex space-x-4">
            <button className={`${sharedClasses.button} ${sharedClasses.lightButton}`}>No shadow</button>
            <button className={`${sharedClasses.button} ${sharedClasses.darkButton}`}>Subtle</button>
            <button className={`${sharedClasses.button} ${sharedClasses.lightButton}`}>Regular</button>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <span className="text-zinc-800 dark:text-zinc-200">Name</span>
            <span className="text-zinc-800 dark:text-zinc-200">Album</span>
            <span className="text-zinc-800 dark:text-zinc-200">Artist</span>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-zinc-800 dark:text-zinc-200">Display track name</span>
          </div>
          <div className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 p-4 rounded-lg mb-4">Girl With Headphones</div>
          <div className="flex space-x-4 mb-4">
            <button className={`${sharedClasses.button} ${sharedClasses.lightButton}`}>Button 1</button>
            <button className={`${sharedClasses.button} ${sharedClasses.darkButton}`}>Button 2</button>
            <button className={`${sharedClasses.button} ${sharedClasses.lightButton}`}>Button 3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyComponent;
