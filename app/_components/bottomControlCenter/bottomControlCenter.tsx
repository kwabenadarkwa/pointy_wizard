import Image from 'next/image';
import { Panel } from '@xyflow/react';
import { useState } from 'react';
import EventCreationPopUp from './popups/eventCreationPopUp';

interface BottomControlCenterProps {
    actions?: {
        onEventClick?: (name: string) => void;
        onConnectionClick?: () => void;
        onExtrasClick?: () => void;
    };
}

export default function BottomControlCenter({
    actions,
}: BottomControlCenterProps) {
    const [isEventCreationPopUpOpen, setIsEventCreationPopUpOpen] =
        useState(false);
    const handleEventSubmit = (name: string) => {
        actions?.onEventClick?.(name);
        setIsEventCreationPopUpOpen(false);
    };

    return (
        <div>
            {isEventCreationPopUpOpen && (
                <EventCreationPopUp
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 pb-10"
                    onSubmit={handleEventSubmit}
                />
            )}

            <Panel
                position="bottom-center"
                className="border border-white rounded-lg bg-[#ebefff]"
            >
                <div className="flex items-center space-x-5 p-2">
                    <div
                        className="rounded-md p-1 transition-colors hover:bg-[#261577]/20 cursor-pointer"
                        onClick={() => {
                            setIsEventCreationPopUpOpen(!isEventCreationPopUpOpen);
                        }}
                    >
                        <Image src="/event.svg" width={32} height={32} alt="Event" />
                    </div>
                    <div
                        className="rounded-md p-1 transition-colors hover:bg-[#261577]/20 cursor-pointer"
                        onClick={actions?.onConnectionClick}
                    >
                        <Image
                            src="/linearConnection.svg"
                            width={32}
                            height={32}
                            alt="Connection"
                        />
                    </div>
                    <div
                        className="rounded-md p-1 transition-colors hover:bg-[#261577]/20 cursor-pointer"
                        onClick={actions?.onExtrasClick}
                    >
                        <Image src="/extras.svg" width={32} height={32} alt="Pointy Hub" />
                    </div>
                </div>
            </Panel>
        </div>
    );
}
