import Image from 'next/image';
export default function BottomControlCenter() {
    return (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 border border-white rounded-md bg-[#ebefff]">
            <div className="flex items-center space-x-5 pl-2 py-2 pr-4">
                <Image
                    src="/mousePointer.svg"
                    width={35}
                    height={35}
                    alt="Mouse Pointer"
                />
                <Image
                    src="/handPanning.svg"
                    width={32}
                    height={32}
                    alt="Background Moving"
                />
                <Image src="/event.svg" width={32} height={32} alt="Event" />
                <Image
                    src="/linearConnection.svg"
                    width={32}
                    height={32}
                    alt="Connection"
                />
                <Image src="/extras.svg" width={32} height={32} alt="Pointy Hub" />
            </div>
        </div>
    );
}
