import React from 'react';
import img from "../assets/IconInterface.png";

const sharedClasses = {
  flexCol: "flex flex-col",
  flexRow: "flex flex-row",
  itemsCenter: "items-center",
  itemsStart: "items-start",
  textCenter: "text-center",
  textLeft: "text-left",
  p6: "p-6",
  spaceY6: "space-y-6",
  spaceY4: "space-y-4",
  spaceX6: "space-x-6",
  mb4: "mb-4",
  mb2: "mb-2",
  bgWhite: "bg-white",
  bgZinc800: "dark:bg-zinc-800",
  roundedLg: "rounded-lg",
  shadowLg: "shadow-lg",
  p4: "p-4",
  text2xl: "text-2xl",
  fontBold: "font-bold",
  textZinc600: "text-zinc-600",
  darkTextZinc400: "dark:text-zinc-400",
};

const InterfaceComponent = () => {
  return (
    <div className={`${sharedClasses.flexCol} ${sharedClasses.flexRow} ${sharedClasses.itemsCenter} ${sharedClasses.p6} ${sharedClasses.spaceY6} ${sharedClasses.mdSpaceY0} ${sharedClasses.mdSpaceX6}`}>
      <div className={`${sharedClasses.flexCol} ${sharedClasses.itemsCenter} ${sharedClasses.textCenter} ${sharedClasses.mdItemsStart} ${sharedClasses.mdTextLeft}`}>
        <img src={img} alt="Interface Icons" className={sharedClasses.mb4} />
        <h2 className={`${sharedClasses.text2xl} ${sharedClasses.fontBold} ${sharedClasses.mb4}`}>Interface</h2>
        <p className={`${sharedClasses.textZinc600} ${sharedClasses.darkTextZinc400} ${sharedClasses.mb2}`}>Customize the layout, alignment and position to fit your setup.</p>
        <p className={`${sharedClasses.textZinc600} ${sharedClasses.darkTextZinc400}`}>Show and hide playback controls. Add a backdrop layer and customize it.</p>
      </div>
      
      <div className={`${sharedClasses.bgWhite} ${sharedClasses.bgZinc800} ${sharedClasses.roundedLg} ${sharedClasses.shadowLg} ${sharedClasses.p4}`}>
        <div className={sharedClasses.flexCol}>
          {/* Additional content goes here */}
        </div>
      </div>
    </div>
  );
};

export default InterfaceComponent;
