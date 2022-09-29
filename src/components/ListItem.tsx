import { useNavigate } from "react-router-dom";

const style = {
  border: "1px solid black",
  borderRadius: "15px",
  padding: "10px",
};

type ListItemProps = {
  name: string;
  volume: string;
};
const ListItem = (props: ListItemProps) => {
  const navigate = useNavigate();
  return (
    <li style={style} onClick={() => navigate(`/${props.name}`)}>
      {props.name}, {props.volume}
    </li>
  );
};

export default ListItem;
