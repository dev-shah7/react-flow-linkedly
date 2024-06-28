import { Button, Divider, Input, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './Sidebar/Sidebar.css';
import SelectBox from './Common/Select';
import PropTypes from 'prop-types';

const { TextArea } = Input;
const { Title } = Typography;

const Connect = ({ handleClearSelection }) => {
  return (
    <div className='panel-content'>
      <div className='panel-header'>
        <Title
          className='connect-title'
          level={5}
          style={{ fontSize: '15px', lineHeight: '16px', fontWeight: 500 }}
        >
          Connected Component
        </Title>
        <Button
          type='text'
          icon={<CloseCircleOutlined />}
          onClick={handleClearSelection}
          className='close-button'
        />
      </div>
      <Divider />
      <div className='input-group'>
        <Title level={5}>Change Task</Title>
        <SelectBox />
      </div>
      <div className='input-group'>
        <Title level={5}>Connection Message</Title>
        <TextArea rows={4} strong></TextArea>
      </div>
      <div className='input-group'>
        <Title level={5}> Fallback Message</Title>
        <TextArea rows={4} strong>
          Fallback Message
        </TextArea>
      </div>
    </div>
  );
};

Connect.propTypes = {
  handleClearSelection: PropTypes.func.isRequired,
};

export default Connect;
