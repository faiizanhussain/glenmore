interface Props {
  Icon: any;
  Text: string;
}

function IconCard({ Icon, Text }: Props) {
  return (
    <div className="icon-card flex">
      <div className="icon-card-image flex items-center">{Icon}</div>
      <div className="icon-card-text">
        <h3 className="text-lg ml-3">{Text}</h3>
      </div>
    </div>
  );
}

export default IconCard;
