import React from 'react';
import img from "../assets/IconArraySettings.png";

const sharedClasses = {
  flex: 'flex',
  flexCol: 'flex flex-col',
  flexRow: 'flex md:flex-row',
  itemsCenter: 'items-center md:items-start',
  padding: 'p-6',
  spaceY: 'space-y-6 md:space-y-0',
  spaceX: 'md:space-x-6',
  flexShrink: 'flex-shrink-0',
  image: 'w-24 h-24',
  text: 'text-3xl font-bold mb-4',
  paragraph: 'mb-4',
  roundedShadow: 'rounded-lg shadow-lg',
};

const SettingsComponent = () => {
  return (
    <div className={`${sharedClasses.flexCol} ${sharedClasses.flexRow} ${sharedClasses.itemsCenter} ${sharedClasses.padding} ${sharedClasses.spaceY} ${sharedClasses.spaceX}`}>
      <div className={sharedClasses.flexShrink}>
        <img
          src={img}
          alt="Settings Icon"
          className={sharedClasses.image}
        />
      </div>
      <div className="flex-1">
        <h1 className={sharedClasses.text}>Settings</h1>
        <p className={sharedClasses.paragraph}>
          Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.
        </p>
        <p className={sharedClasses.paragraph}>
          Show it in the Dock, choose from custom icons, or keep it on the Desktop only.
        </p>
        <p>
          Set your custom keyboard shortcuts and integrate with the apps you use.
        </p>
      </div>
      <div className={sharedClasses.flexShrink}>
        <img
          src="https://placehold.co/300x500"
          alt="Settings Screenshot"
          className={sharedClasses.roundedShadow}
        />
      </div>
    </div>
  );
};

export default SettingsComponent;
