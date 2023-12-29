import { Button } from "./Button";

interface Props {
  Image: string;
  Title: string;
  Text: string;
}

function ImageBox({ Image, Title, Text }: Props) {
  return (
    <>
      <div className="overflow-hidden">
        <div className="w-full h-100 object-fit">
          <img
            className="w-full rounded-xl"
            src={Image}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="py-4">
          <div className="font-bold text-3xl mb-2">{Title}</div>
          <p className="text-gray-700 text-base">{Text}</p>
          <Button Text="Explore Services" Link="#" />
        </div>
      </div>
    </>
  );
}

export default ImageBox;
