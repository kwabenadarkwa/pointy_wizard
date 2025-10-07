'use client';
import Image from 'next/image';
import { Panel } from '@xyflow/react';
import { useState } from 'react';

interface EventTypeProps {
    eventName: string;
    eventImage: string;
}

export enum EventName {
    DefaultEvent = 'Default Event',
    DecisionNode = 'Decision Node',
}

interface EventDropDownProps {
    className?: string;
    eventSelected: EventName;
    setEventSelectedOnBottomControlPanel?: (eventName: EventName) => void;
}

export default function EventDropDown({
    className: className,
    eventSelected,
    setEventSelectedOnBottomControlPanel,
}: EventDropDownProps) {
    const events: EventTypeProps[] = [
        {
            eventName: EventName.DefaultEvent.toString(),
            eventImage: '/event.svg',
        },
        {
            eventName: EventName.DecisionNode.toString(),
            eventImage: '/decisionTree.svg',
        },
    ];
    const [selectedEvent, setSelectedEvent] = useState<EventName>(eventSelected);

    return (
        <Panel position="bottom-center" className={className}>
            {events.map((event) => (
                <div
                    key={event.eventName}
                    className="flex items-center gap-2 rounded-md p-1 transition-colors hover:bg-[#261577]/20 cursor-pointer"
                    onClick={() => {
                        setSelectedEvent(event.eventName as EventName);
                        setEventSelectedOnBottomControlPanel?.(event.eventName as EventName);
                    }}
                >
                    <div className="flex items-center gap-2">
                        {selectedEvent === event.eventName && (
                            <Image
                                src="/checkSymbol.svg"
                                width={18}
                                height={18}
                                alt="Check"
                            />
                        )}
                        <Image
                            src={event.eventImage}
                            alt={event.eventName}
                            width={24}
                            height={24}
                        />
                    </div>
                    <span>{event.eventName}</span>
                </div>
            ))}
        </Panel>
    );
}
