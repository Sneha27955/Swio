import React from 'react';
import img1 from "../assets/ThemeUI.png";
import img2 from "../assets/Shareable.png";

const sharedClasses = {
  bgWhite: 'bg-white',
  bgZinc800: 'dark:bg-zinc-800',
  p6: 'p-6',
  roundedLg: 'rounded-lg',
  shadowMd: 'shadow-md',
  textXl: 'text-xl',
  fontSemibold: 'font-semibold',
  mb2: 'mb-2',
  textZinc700: 'text-zinc-700',
  darkTextZinc300: 'dark:text-zinc-300',
  mb4: 'mb-4',
  rounded: 'rounded-lg',
  textCenter: 'text-center',
  mt16: 'mt-16',
  textPurple600: 'text-purple-600',
  uppercase: 'uppercase',
  text3xl: 'text-3xl',
  fontBold: 'font-bold',
  maxW2xl: 'max-w-2xl',
  mxAuto: 'mx-auto',
};

const ThemeCard = ({ title, description, imageUrl, altText }) => {
  return (
    <div className={`${sharedClasses.bgWhite} ${sharedClasses.bgZinc800} ${sharedClasses.p6} ${sharedClasses.roundedLg} ${sharedClasses.shadowMd}`}>
      <h3 className={`${sharedClasses.textXl} ${sharedClasses.fontSemibold} ${sharedClasses.mb2}`}>{title}</h3>
      <p className={`${sharedClasses.textZinc700} ${sharedClasses.darkTextZinc300} ${sharedClasses.mb4}`}>{description}</p>
      <img src={imageUrl} alt={altText} className={sharedClasses.rounded} />
    </div>
  );
};

const CustomizationSection = () => {
  return (
    <div className={`${sharedClasses.bgZinc50} ${sharedClasses.darkBgZinc900} ${sharedClasses.p8}`}>
      <div className={`grid md:grid-cols-2 ${sharedClasses.gap8}`}>
        <ThemeCard
          title="Change it up"
          description="Switch between themes with just a click. Modify the built-in themes or create your own using Sleeve’s extensive preferences."
          imageUrl={img1}
          altText="Theme options"
        />
        <ThemeCard
          title="Shareable"
          description="Export your themes and share them with friends using the handy new Sleeve Theme file format. Install themes from anywhere with a double-click or a drag and drop."
          imageUrl={img2}
          altText="Share theme"
        />
      </div>
      <div className={`${sharedClasses.textCenter} ${sharedClasses.mt16}`}>
        <p className={`${sharedClasses.textPurple600} ${sharedClasses.uppercase} ${sharedClasses.mb2}`}>Customization</p>
        <h2 className={`${sharedClasses.text3xl} ${sharedClasses.fontBold} ${sharedClasses.mb4}`}>Countless ways to customize.</h2>
        <p className={`${sharedClasses.textZinc700} ${sharedClasses.darkTextZinc300} ${sharedClasses.maxW2xl} ${sharedClasses.mxAuto}`}>Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</p>
      </div>
    </div>
  );
};

export default CustomizationSection;
