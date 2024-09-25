import React, { useContext } from 'react';
import { MyContext } from '@/context/MyContext';

export default function GrandChildComp() {
    
    const ourContext: any = useContext(MyContext);
    const { nameState, setNameState } = ourContext;

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
                
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Welcome to the GrandChild Component
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                    Current Name: <span className="font-semibold text-blue-600">{nameState}</span>
                </p>

                <button 
                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300"
                    onClick={() => setNameState("safdar")}
                >
                    Change Name
                </button>
                
            </div>
        </div>
    )
}
