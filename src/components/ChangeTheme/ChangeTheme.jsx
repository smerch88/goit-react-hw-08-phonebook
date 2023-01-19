import { ActionIcon } from '@mantine/core';
import { IconBulb } from '@tabler/icons';

export const ChangeTheme = ({ changeTheme }) => {
  const handleSubmit = () => {
    changeTheme();
  };
  return (
    <ActionIcon onClick={handleSubmit}>
      <IconBulb size={18} />
    </ActionIcon>
  );
};
