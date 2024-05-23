import React from 'react';
import img1 from "../assets/eternal sunshine.png";
import img2 from "../assets/bunny is a rider.png";
import img3 from "../assets/are u listening.png";

const sharedClasses = {
  gradientBg: 'bg-gradient-to-r from-green-400 to-blue-500',
  textWhite: 'text-white',
  hoverText: 'hover:text-zinc-200',
  flexItemsCenter: 'flex items-center',
}

const MusicCard = ({ title, artist, imageUrl }) => {
  return (
    <div className={`relative ${sharedClasses.gradientBg} rounded-lg shadow-lg overflow-hidden`}>
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src={imageUrl}
        alt={title}
      />
      <div className="relative p-6">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 text-sm">{artist}</p>
        <div className={`mt-4 ${sharedClasses.flexItemsCenter}`}>
          <button className={`${sharedClasses.textWhite} ${sharedClasses.hoverText}`}>
            <img aria-hidden="true" alt="play" src="/icons/play.svg" />
          </button>
          <button className={`ml-2 ${sharedClasses.textWhite} ${sharedClasses.hoverText}`}>
            <img aria-hidden="true" alt="pause" src="/icons/pause.svg" />
          </button>
        </div>
      </div>
    </div>
  )
}

const MusicSection = () => {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-3">
      <MusicCard
        title="Eternal Sunshine"
        artist="Forgotten Feels<br>Slow Magic"
        imageUrl={img1}
      />
      <MusicCard
        title=" "
        artist=" "
        imageUrl={img2}
      />
      <MusicCard
        title="Are You Listening"
        artist="How To Be Human<br>Chelsea Cutler"
        imageUrl={img3}
      />
    </div>
  )
}

const MainSection = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">NEW IN 2.0</p>
        <h2 className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
          Themes. Unlimited themes.
        </h2>
        <p className="mt-4 text-lg leading-6 text-zinc-500 dark:text-zinc-300">
          Themes in Sleeve make creating and switching between customizations easy. Share your own
          creations with friends and install as many themes as you like with just a double-click.
        </p>
      </div>
      <MusicSection />
    </div>
  )
}

const BodyComponent = () => {
  return <MainSection />
}

export default BodyComponent;
