

export const Square = ({ children, isSelected, updateBoard, index, isWinning }) => {
  const className = `square ${isSelected ? 'is-selected' : ''} ${isWinning ? 'is-winning' : ''}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
