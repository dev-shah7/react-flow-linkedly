import { Divider, Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './Sidebar.css';
import SidebarSection from './SidebarSection';
import Connect from '../Connect';
import { sections } from '../../utils/data';

const { Title } = Typography;

const Sidebar = ({ selectedNode, handleClearSelection }) => {
  const panelClassName = selectedNode
    ? 'connected-component active'
    : 'connected-component';

  return (
    <div className='sidebar'>
      <div className='search-bar'>
        <Input
          placeholder='Search'
          prefix={<SearchOutlined />}
          className='custom-search'
        />
      </div>
      <Divider />
      {sections.map((section) => (
        <SidebarSection
          key={section.title}
          title={section.title}
          cards={section.cards}
        />
      ))}
      <div className={panelClassName}>
        {selectedNode && (
          <>
            <Title level={4} className='connected-title'>
              Connected Component
            </Title>
            <Connect handleClearSelection={handleClearSelection} />
          </>
        )}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  selectedNode: PropTypes.object,
  handleClearSelection: PropTypes.func.isRequired,
};

export default Sidebar;
