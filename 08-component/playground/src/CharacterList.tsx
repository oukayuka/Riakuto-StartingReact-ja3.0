import { FC } from "react";

type Props = {
  characterNames: string[];
};

const CharacterList: FC<Props> = (props) => {
  const { characterNames } = props;

  return (
    <ul>
      {characterNames.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;
