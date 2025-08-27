
import React from 'react';
import type { ChatMessage } from '../types';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';

interface MessageProps {
    message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const isModel = message.role === 'model';

    return (
        <div className={`flex items-start gap-3 ${isModel ? 'justify-start' : 'justify-end'}`}>
            {isModel && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center border-2 border-teal-200">
                    <BotIcon />
                </div>
            )}
            <div
                className={`max-w-lg p-4 rounded-2xl shadow-sm ${
                    isModel
                        ? 'bg-slate-100 text-slate-800 rounded-tl-none'
                        : 'bg-teal-600 text-white rounded-tr-none'
                }`}
            >
                <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
             {!isModel && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center border-2 border-slate-300">
                    <UserIcon />
                </div>
            )}
        </div>
    );
};

export default Message;
