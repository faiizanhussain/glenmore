import { Button } from "./Button";

interface Props {
  Icon: string;
  Title: string;
  Text: string;
}

function ImageBox({ Icon, Title, Text }: Props) {
  return (
    <>
      <div className="overflow-hidden">
        <div className="w-full h-100 object-fit">
          <img
            className="rounded-xl"
            src={Icon}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="py-4">
          <div className="font-bold text-2xl mb-2">{Title}</div>
          <p className="text-md text-gray-700 text-base">{Text}</p>
          <Button Text="Explore Services" Link="#" />
        </div>
      </div>
    </>
  );
}

export default ImageBox;
