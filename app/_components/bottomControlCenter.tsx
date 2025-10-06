import Image from 'next/image';
import { Panel } from '@xyflow/react';

interface BottomControlCenterProps {
    onClickEvent?: () => void;
}

export default function BottomControlCenter({
    onClickEvent,
}: BottomControlCenterProps) {
    return (
        <Panel
            position="bottom-center"
            className="border border-white rounded-lg bg-[#ebefff]"
        >
            <div className="flex items-center space-x-5 p-2">
                <Image
                    src="/event.svg"
                    width={32}
                    height={32}
                    alt="Event"
                    onClick={onClickEvent}
                />
                <Image
                    src="/linearConnection.svg"
                    width={32}
                    height={32}
                    alt="Connection"
                />
                <Image src="/extras.svg" width={32} height={32} alt="Pointy Hub" />
            </div>
        </Panel>
    );
}
