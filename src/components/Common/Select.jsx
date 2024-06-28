import { Select } from 'antd';

const SelectBox = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };
  return (
    <Select
      showSearch
      placeholder='Select a person'
      optionFilterProp='label'
      onChange={onChange}
      onSearch={onSearch}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'tom',
          label: 'Tom',
        },
      ]}
    />
  );
};

export default SelectBox;
