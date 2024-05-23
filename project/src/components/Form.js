import React from 'react';
import img1 from "../assets/IconArrayHotkeys.png";
import img2 from "../assets/IconArrayWindow.png";
import img3 from "../assets/IconArrayTrack.png";
import img4 from "../assets/IconArrayPosition.png";
import img5 from "../assets/IconArrayLayout.png";
import img6 from "../assets/IconArrayInterface.png";
import img7 from "../assets/IconArraySettings.png";
import img8 from "../assets/IconArrayArtwork.png";

const iconClass = 'w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg shadow-md';

const Form = () => {
  return (
    <div>
      <p>
        Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.
      </p>
      <div className="flex space-x-4">
        <img src={img1} alt="Hotkeys Icon" className={iconClass} />
        <img src={img2} alt="Window Icon" className={iconClass} />
        <img src={img3} alt="Play Icon" className={iconClass} />
        <img src={img4} alt="Grid Icon" className={iconClass} />
        <img src={img5} alt="Brush Icon" className={iconClass} />
        <img src={img6} alt="Text Icon" className={iconClass} />
        <img src={img7} alt="Move Icon" className={iconClass} />
        <img src={img8} alt="Settings Icon" className={iconClass} />
      </div>
    </div>
  );
};

export default Form;
