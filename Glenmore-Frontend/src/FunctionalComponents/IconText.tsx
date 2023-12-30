import { Button } from "./Button";

interface Props {
  Icon: string;
  Title: string;
}

function ImageBox({ Icon, Title }: Props) {
  return (
    <>
      <div className="flex space-x-3">
        {Icon}
        <p className="text-md ">{Title}</p>
      </div>
    </>
  );
}

export default ImageBox;
