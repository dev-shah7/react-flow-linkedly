import { Typography } from 'antd';

import PropTypes from 'prop-types';
import DraggableCard from '../DraggableCard';

const { Title } = Typography;

const SidebarSection = ({ title, cards }) => {
  return (
    <div className='section'>
      <Title level={4} className='section-title'>
        {title}
      </Title>
      {cards.map((card) => (
        <DraggableCard key={card.type} type={card.type} text={card.text} />
      ))}
    </div>
  );
};

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SidebarSection;
