import { BackgroundImage, Center, Text, Box, Title } from '@mantine/core';

export default function Home() {
  return (
    <>
      <Box mx="auto">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          radius="lg"
        >
          <Center p="md">
            <Title order={1}>
              Start Using Outstanding Phonebook Right Now!
            </Title>
          </Center>
        </BackgroundImage>
        <Center p="md">
          <Text fz="lg">
            Welcome to our online phonebook!
            <br /> Here you can easily search for and find contact information
            for individuals and businesses in your community.
            <br /> Our database is constantly updated to ensure you have the
            most accurate information. Save your favorite contacts for quick
            access, and add new listings to keep your phonebook current.
            <br /> With our user-friendly interface, finding the information you
            need has never been easier. <br />
            Try it out today and make connecting with your community a breeze.
          </Text>
        </Center>
      </Box>
    </>
  );
}
