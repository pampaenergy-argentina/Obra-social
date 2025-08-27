
import React from 'react';
import { BotIcon } from './icons/BotIcon';

const TypingIndicator: React.FC = () => {
    return (
        <div className="flex items-start gap-3 justify-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center border-2 border-teal-200">
                <BotIcon />
            </div>
            <div className="max-w-lg p-4 rounded-2xl shadow-sm bg-slate-100 text-slate-800 rounded-tl-none flex items-center space-x-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
            </div>
        </div>
    );
};

export default TypingIndicator;
