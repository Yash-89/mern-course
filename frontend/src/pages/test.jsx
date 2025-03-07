import React from 'react';

const MyComponent = () => {
  const cardData = [
    { title: 'Card 1', description: 'This is the first card description.' },
    { title: 'Card 2', description: 'This is the second card description.' },
    { title: 'Card 3', description: 'This is the third card description.' },
    { title: 'Card 4', description: 'This is the fourth card description.' },
    { title: 'Card 5', description: 'This is the fifth card description.' },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Parent container: flex container with two equal width children on md+ screens */}
      <div className="flex flex-col md:flex-row gap-4">
      
        {/* Cards List (50% width on medium+ screens) */}
        <div className="bg-gray-100 p-4 rounded w-full md:w-1/2">
          {/* Using grid with 2 columns so only two cards appear per row */}
          <ul className="grid grid-cols-2 gap-4">
            {cardData.map((card, index) => (
              <li
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Table Section (50% width on medium+ screens) */}
        <div className="bg-white p-4 rounded w-full md:w-1/2 overflow-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Header 1</th>
                <th className="border border-gray-300 px-4 py-2">Header 2</th>
                <th className="border border-gray-300 px-4 py-2">Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Row 1, Cell 1</td>
                <td className="border border-gray-300 px-4 py-2">Row 1, Cell 2</td>
                <td className="border border-gray-300 px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Row 2, Cell 1</td>
                <td className="border border-gray-300 px-4 py-2">Row 2, Cell 2</td>
                <td className="border border-gray-300 px-4 py-2">Row 2, Cell 3</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      
      </div>
    </div>
  );
};

export default MyComponent;
