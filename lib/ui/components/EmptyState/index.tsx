import Image from "next/image";

interface Props {
  message: string;
}

const EmptyState = ({ message }: Props) => {
  return (
    <div className="bg-[#eee] flex flex-col gap-4 items-center justify-center h-[calc(100vh-(48px+80px))]">
      <div>
        <Image src="/images/empty.png" alt="Empty" width={100} height={100} />
      </div>
      <p className="text-3xl text-center">{message}</p>
    </div>
  );
};

export default EmptyState;
