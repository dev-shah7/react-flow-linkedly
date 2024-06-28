import { Card } from 'antd';
import PropTypes from 'prop-types';

const DraggableCard = ({ text }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData('type', text);
  };

  return (
    <Card className='draggable' draggable={true} onDragStart={onDragStart}>
      {text}
    </Card>
  );
};

DraggableCard.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default DraggableCard;
