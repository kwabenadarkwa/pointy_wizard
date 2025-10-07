'use client';
import Image from 'next/image';
import { Panel } from '@xyflow/react';
interface EventTypeProps {
    eventName: string;
    eventImage: string;
}
interface EventDropDownProps {
    className?: string;
}

//should get the thing currently selected and highlight it
// this should share the same state in terms of the image showing as the bottom control center
export default function EventDropDown({ className: className }: EventDropDownProps) {
    const events: EventTypeProps[] = [
        { eventName: 'Default Event', eventImage: '/event.svg' },
        { eventName: 'Decision Node', eventImage: '/decisionTree.svg' },
    ];
    return (
        <Panel position="bottom-center" className={className}>
            {events.map((event) => (
                <div
                    key={event.eventName}
                    className="flex items-center gap-2 rounded-md p-1 transition-colors hover:bg-[#261577]/20 cursor-pointer"
                >
                    <Image
                        src={event.eventImage}
                        alt={event.eventName}
                        width={24}
                        height={24}
                    />
                    <span>{event.eventName}</span>
                </div>
            ))}
        </Panel>
    );
}
