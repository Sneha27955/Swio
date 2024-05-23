import React from 'react';

// Shared Tailwind CSS classes
const flexCenter = 'flex items-center justify-center';
const textColorRed = 'text-red-600 dark:text-red-400';
const boldText = 'font-bold'; // Add this class for bold text

const HeadingComponent = () => {
  return (
    <div className={`${flexCenter} h-screen bg-white dark:bg-zinc-900`}>
      {/* Apply the boldText class to make the text bold */}
      <h2 className={`text-sm text-black ${boldText} mb-2`}>Like, Scrobble.</h2>
    </div>
  );
};

export default HeadingComponent;
