import PropTypes from 'prop-types';
import { Box, Button, Center, Flex, Loader, Text } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  updateContact,
} from 'redux/contacts/contactsOperations';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/contacts/selectors';

export const ContactList = ({ deleteUser }) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && (
        <Center>
          <Loader variant="dots" size="xl" />
        </Center>
      )}
      {error && <p>{error}</p>}
      <ul>
        {contacts.length > 0 &&
          contacts
            .filter(contact =>
              contact.name
                .trim()
                .toLowerCase()
                .includes(filterValue.trim().toLowerCase())
            )
            .map((val, index, array) => array[array.length - 1 - index])
            .map(contact => (
              <li key={contact.id} data-aos="zoom-in" data-aos-offset="200">
                <Box
                  sx={theme => ({
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                    textAlign: 'center',
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,

                    '&:hover': {
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[5]
                          : theme.colors.gray[1],
                    },
                  })}
                >
                  <Flex
                    mih={50}
                    gap="md"
                    justify="space-between"
                    align="center"
                    direction="row"
                    wrap="wrap"
                  >
                    <Text fw={400}>
                      {contact.name}: {contact.number}
                    </Text>
                    <Button onClick={() => updateContact(contact.id)}>
                      Update
                    </Button>
                    <Button onClick={() => deleteUser(contact.id)}>
                      Delete
                    </Button>
                  </Flex>
                </Box>
              </li>
            ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  deleteUser: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
