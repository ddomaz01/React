import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [editing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing((isEditing) => !isEditing);
    if (editing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = 'Edit';

  if (editing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    buttonCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        <span className="player-name">{editablePlayerName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
