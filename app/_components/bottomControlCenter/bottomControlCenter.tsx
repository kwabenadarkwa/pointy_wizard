import Image from 'next/image';
import { Panel } from '@xyflow/react';
import { useState } from 'react';
import EventCreationPopUp from './popups/eventCreationPopUp';
import EventDropDown, { EventName } from './dropdowns/eventDropDown';

interface BottomControlCenterProps {
  actions?: {
    onEventClick?: (name: string, type: string) => void;
    onConnectionClick?: () => void;
    onExtrasClick?: () => void;
  };
}

export default function BottomControlCenter({
  actions,
}: BottomControlCenterProps) {
  const [isEventCreationPopUpOpen, setIsEventCreationPopUpOpen] =
    useState(false);
  const [isEventDropDownOpen, setIsEventDropDownOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState<EventName>(
    EventName.DefaultEvent
  );

  const handleEventSubmit = (name: string) => {
    actions?.onEventClick?.(
      name,
      selectedEventType === EventName.DecisionNode ? 'decisionNode' : ''
    );
    setIsEventCreationPopUpOpen(false);
  };

  return (
    <div>
      {isEventCreationPopUpOpen && (
        <EventCreationPopUp
          className="pb-15 pr-80"
          onSubmit={handleEventSubmit}
        />
      )}

      {isEventDropDownOpen && (
        <EventDropDown
          className="flex flex-col gap-2 text-xs pb-15 rounded bg-[#ebefff] px-2 py-2"
          eventSelected={selectedEventType}
          setEventSelectedOnBottomControlPanel={setSelectedEventType}
        />
      )}

      <Panel
        position="bottom-center"
        className="border border-white rounded-lg bg-[#ebefff] flex items-center space-x-5 p-2 drop-shadow-lg shadow-[#EBEFFF] "
      >
        <div className="">
          <div className="flex flex-horizontal">
            <Image
              src={
                selectedEventType === EventName.DefaultEvent
                  ? '/event.svg'
                  : '/decisionTree.svg'
              }
              width={32}
              height={32}
              alt="Event"
              className="rounded-md p-1 transition-colors hover:bg-[#261577]/20 cursor-pointer"
              onClick={() => {
                setIsEventCreationPopUpOpen(!isEventCreationPopUpOpen);
                setIsEventDropDownOpen(false);
              }}
            />
            <Image
              src="/dropDown.svg"
              width={24}
              height={24}
              alt="Drop Down"
              className="rounded-md p-0.5 transition-colors hover:bg-[#261577]/5 cursor-pointer"
              onClick={() => {
                setIsEventDropDownOpen(!isEventDropDownOpen);
                setIsEventCreationPopUpOpen(false);
              }}
            />
          </div>
        </div>

        <div className="" onClick={actions?.onConnectionClick}>
          <div className="flex flex-horizontal">
            <Image
              src="/linearConnection.svg"
              width={32}
              className="rounded-md p-1 transition-colors hover:bg-[#261577]/20 cursor-pointer"
              height={32}
              alt="Connection"
            />
            <Image
              src="/dropDown.svg"
              width={24}
              height={24}
              className="rounded-md p-0.5 transition-colors hover:bg-[#261577]/5 cursor-pointer"
              alt="
                            Drop Down"
            />
          </div>{' '}
        </div>

        <div
          className="rounded-md p-1 transition-colors hover:bg-[#261577]/20 cursor-pointer"
          onClick={actions?.onExtrasClick}
        >
          <Image src="/extras.svg" width={32} height={32} alt="Pointy Hub" />
        </div>
      </Panel>
    </div>
  );
}
