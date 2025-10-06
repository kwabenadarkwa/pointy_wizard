'use client';
import { Panel } from '@xyflow/react';
import { useState } from 'react';
import InputBox from '../../general/inputBox';

interface EventCreationPopUpProps {
    className?: string;
    onSubmit?: (name: string) => void;
}

export default function EventCreationPopUp({
    className,
    onSubmit,
}: EventCreationPopUpProps) {
    const [name, setName] = useState('');
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && name.trim()) {
            onSubmit?.(name);
            setName('');
        }
    };
    return (
        <Panel position="bottom-center" className={className}>
            <div onKeyDown={handleKeyDown}>
                <InputBox
                    value={name}
                    onChangeAction={setName}
                    label="Event Name"
                    placeholder="Type the event name..."
                    maxLength={50}
                    required={true}
                />
            </div>
        </Panel>
    );
}
