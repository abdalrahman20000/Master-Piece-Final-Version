import React from 'react';
import { User, Play } from 'lucide-react';

const LibraryItem = ({ name, comments, date }) => (
  // <div className="bg-blue-500 p-4 rounded-lg mb-4 flex items-center justify-between">
  <div className="bg-dark-blue p-4 rounded-lg mb-4 flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className="bg-white rounded-full p-2">
        <User className="w-6 h-6 text-dark-blue" />
      </div>
      {/* <div className=""></div> */}
      <div className="flex-grow">
        <input
          type="text"
          value={name}
          placeholder="name"
          className="bg-transparent border-b border-white text-white placeholder-white w-full mb-2"
        />
        <div className="flex items-center text-sm text-white">
          <input
            type="text"
            value={comments}
            placeholder="Comments"
            className="bg-transparent border-b border-white placeholder-white w-full mr-2"
          />
          <span>-</span>
          <span className="ml-2">Date: {date}</span>
        </div>
      </div>
    </div>
    <button className="bg-white rounded-lg p-2 ml-4">
      <Play className="w-6 h-6 text-dark-yellow-hover" />
    </button>
  </div>
);

const LibraryPage = () => {
  const libraryItems = [
    { name: '', comments: '', date: '30/12/2024' },
    { name: '', comments: '', date: '30/12/2024' },
    { name: '', comments: '', date: '30/12/2024' },
    { name: '', comments: '', date: '30/12/2024' },
    { name: '', comments: '', date: '30/12/2024' },
    { name: '', comments: '', date: '30/12/2024' },
    { name: '', comments: '', date: '30/12/2024' },
  ];

  return (
    // <div className="bg-blue-600 min-h-screen p-4 md:p-8">
    <div className="bg-[#ffffff] min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-dark-blue text-2xl font-bold mb-6">Library</h1>
        <div className="space-y-4">
          {libraryItems.map((item, index) => (
            <LibraryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;