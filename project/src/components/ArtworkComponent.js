import React from 'react';
import img1 from "../assets/IconArrayArtwork.png";

const sharedClasses = {
  button: 'w-8 h-8 bg-zinc-200 dark:bg-zinc-700 rounded-md',
  activeButton: 'w-8 h-8 bg-blue-500 text-white rounded-md',
  card: 'bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md',
  flexCol: 'flex flex-col',
  itemsCenter: 'items-center',
  itemsStart: 'items-start',
  spaceY: 'space-y-4',
  spaceX: 'space-x-2',
  range: 'w-full',
  textZinc: 'text-zinc-700 dark:text-zinc-300',
  textZincBold: 'text-2xl font-bold',
  mb4: 'mb-4',
};

const ArtworkComponent = () => {
  return (
    <div className={`${sharedClasses.flexCol} ${sharedClasses.itemsCenter} md:${sharedClasses.itemsStart} p-6 ${sharedClasses.spaceY} md:${sharedClasses.spaceY} md:${sharedClasses.spaceX}`}>
      <div className={`${sharedClasses.flexCol} ${sharedClasses.itemsCenter} md:${sharedClasses.itemsStart}`}>
        <img src={img1} alt="Artwork Icon" className="w-20 h-20 mb-4" />
        <h2 className={`${sharedClasses.textZincBold} ${sharedClasses.mb4}`}>Artwork</h2>
        <p className={`${sharedClasses.textZinc} ${sharedClasses.mb4}`}>
          Scale artwork all the way up or all the way down. Round the corners or leave them square.
        </p>
        <p className={`${sharedClasses.textZinc} ${sharedClasses.mb4}`}>
          Choose shadow and lighting effects to bring your album artwork to life.
        </p>
        <p className={sharedClasses.textZinc}>Or hide it completely.</p>
      </div>
      <div className={sharedClasses.flexCol}>
        <div className={sharedClasses.card}>
          <div className={`flex ${sharedClasses.itemsCenter} ${sharedClasses.spaceX} mb-2`}>
            <button className={sharedClasses.button}>S</button>
            <button className={sharedClasses.activeButton}>M</button>
            <button className={sharedClasses.button}>L</button>
            <button className={sharedClasses.button}>XL</button>
          </div>
          <input type="range" min="0" max="100" className={sharedClasses.range} />
        </div>
        <div className={sharedClasses.card}>
          <div className={`flex ${sharedClasses.itemsCenter} ${sharedClasses.spaceX}`}>
            <button className={sharedClasses.button}>None</button>
            <button className={sharedClasses.button}>Subtle</button>
            <button className={sharedClasses.button}>Regular</button>
            <button className={sharedClasses.activeButton}>Deep</button>
          </div>
        </div>
        <div className={sharedClasses.card}>
          <div className={`flex ${sharedClasses.itemsCenter} ${sharedClasses.spaceX}`}>
            <button className={sharedClasses.button}>None</button>
            <button className={sharedClasses.activeButton}>Spotlight</button>
            <button className={sharedClasses.button}>Glare</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkComponent;
