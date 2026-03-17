import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-xl font-bold mr-4">Blaypad</div>
        <div className="bg-[#aed] w-4 h-4 rounded mr-2"></div>
      </div>
      <div className="flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <a href="/" className="hover:text-gray-300">Início</a>
        <a href="/practice" className="hover:text-gray-300">Prática</a>
        <a href="/others" className="hover:text-gray-300">Outros</a>
        <div className="relative group">
            <button className="hover:text-gray-300">Learning</button>
            <div className="absolute left-0 mt-0 w-48 bg-gray-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <a href="/learning/basics" className="block px-4 py-2 hover:bg-gray-700">Basics</a>
                <a href="/learning/intermediate" className="block px-4 py-2 hover:bg-gray-700">Intermediate</a>
                <a href="/learning/advanced" className="block px-4 py-2 hover:bg-gray-700">Advanced</a>
                <a href="/learning/resources" className="block px-4 py-2 hover:bg-gray-700">Resources</a>
                <a href="/learning/community" className="block px-4 py-2 hover:bg-gray-700">Community</a>
            </div>
        </div>
        <a href="/about" className="hover:text-gray-300">Sobre</a>
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
      </div>
    </nav>
  );
};

export default NavBar;