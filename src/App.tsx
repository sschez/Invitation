import { useState } from 'react';
   import './index.css';

   function App() {
     const [showGift1, setShowGift1] = useState<boolean>(false);
     const [showGift2, setShowGift2] = useState<boolean>(false);

     return (
       <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center p-4">
         <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
           <h1 className="text-3xl font-bold text-purple-700 mb-4">
             ¡Una sorpresa para ti, mi amor! 💖
           </h1>
           <p className="text-gray-600 mb-6">
           Eres mi princesa👑 y te mereces todo el mundo, por lo que te tengo dos regalos. Haz clic en los botones para descubrir tus regalos.
           </p>
           <div className="flex justify-center gap-4 mb-6">
             <button
               onClick={() => setShowGift1(!showGift1)}
               className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
             >
               Regalo 1
             </button>
             <button
               onClick={() => setShowGift2(!showGift2)}
               className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
             >
               Regalo 2
             </button>
           </div>
           {showGift1 && (
             <div className="mb-4 animate-fade-in">
               <img
                 src="/Boleto_Badbunny.jpg"
                 alt="Regalo 1"
                 className="w-full rounded-lg shadow-md"
               />
               <p className="text-gray-600 mt-2">¡Este es tu primer regalo!</p>
             </div>
           )}
           {showGift2 && (
             <div className="animate-fade-in">
               <img
                 src="/Boleto_Sorpresa.jpg"
                 alt="Regalo 2"
                 className="w-full rounded-lg shadow-md"
               />
               <p className="text-gray-600 mt-2">¡Y este es tu segundo regalo!</p>
             </div>
           )}
         </div>
       </div>
     );
   }

   export default App;