'use client';

import { ChangeEvent } from 'react';

export interface InputBoxProps {
    value: string;
    onChangeAction: (value: string) => void;
    placeholder?: string;
    label?: string;
    maxLength?: number;
    required?: boolean;
    error?: string;
}

export default function InputBox({
    value,
    onChangeAction,
    placeholder = 'Enter text...',
    label,
    maxLength = 100,
    required = false,
    error,
}: InputBoxProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const sanitized = e.target.value.slice(0, maxLength);
        onChangeAction(sanitized);
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                maxLength={maxLength}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                autoComplete="off"
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
            {maxLength && (
                <span className="text-xs text-gray-500 self-end">
                    {value.length}/{maxLength}
                </span>
            )}
        </div>
    );
}
