import React from 'react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Blurred background overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        
      />
      
      {/* Modal content */}
      <div className="relative z-10 text-center animate-text-slide-up">
        {/* Glow effect wrapper */}
        <div className="relative">
          <h2 className="text-6xl font-bold text-white mb-4 animate-pulse">
            {/* Text glow effect */}
            <span className="relative">
              {/* Multiple text shadows for stronger glow */}
              <span className="absolute inset-0 blur-md text-purple-500 animate-pulse">
                COMING SOON
              </span>
              <span className="relative text-white drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
                COMING SOON
              </span>
            </span>
          </h2>
        </div>
        
        <p className="text-gray-300 text-xl mt-4">
          The Soleer marketplace is under development.
          <br />
          Stay tuned for the launch!
        </p>
        
        <button

          className="mt-8 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold"
        >
          <a href='../'>Got it</a>
        </button>
      </div>
    </div>
  );
};

export default ComingSoonModal;