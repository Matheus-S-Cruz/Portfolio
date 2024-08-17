import React from 'react'

export const Cards = ({ titulo, descricao, imgUrl, link, mais }) => {

  const handleClick = () => {
    if (link) {
        window.open(link, '_blank');
    }
};

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 p-4" onClick={handleClick} style={{ cursor: 'pointer'}}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <img src={imgUrl} className="w-full h-48 object-cover" alt={titulo} />
        <div className="p-4">
          <h4 className="text-xl font-semibold">{titulo}</h4>
          <p className="text-gray-700">{descricao}</p>
          <p className="text-blue-500 mt-2">{mais}</p>
        </div>
      </div>
    </div>
  )
}