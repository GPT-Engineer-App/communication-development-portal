import React from "react";
import { Box, Heading, Text, VStack, HStack, Wrap, WrapItem, Container, Image, Button, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGraduationCap, FaBook, FaUsers, FaBullhorn, FaNewspaper, FaFlask, FaBriefcase, FaQuestionCircle } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <WrapItem>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <HStack align="start">
          <IconButton icon={icon} size="lg" variant="outline" aria-label={title} />
          <VStack align="start">
            <Heading size="md">{title}</Heading>
            <Text mt={4}>{text}</Text>
          </VStack>
        </HStack>
      </Box>
    </WrapItem>
  );
};

const Index = () => {
  return (
    <Container maxW="7xl" py={12}>
      <VStack align="center" spacing={6}>
        <Heading as="h1" size="2xl">
          School of Communication and Development Studies
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Empowering students with knowledge and skills to excel in the fields of communication and development.
        </Text>
        <Image src="https://images.unsplash.com/photo-1602173979888-a6ba64ef5e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG9uJTIwY2FtcHVzfGVufDB8fHx8MTcxMDM2MDY5OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Students on campus" borderRadius="lg" />
        <Wrap spacing={8} justify="center">
          <Feature title="Academic Programs" text="Explore our undergraduate, graduate, and professional programs." icon={<FaGraduationCap />} />
          <Feature title="Admissions" text="Learn about admission requirements and application procedures." icon={<FaBook />} />
          <Feature title="Student Resources" text="Access academic calendars, course schedules, and support services." icon={<FaUsers />} />
          <Feature title="News & Events" text="Stay updated on school news, events, and activities." icon={<FaBullhorn />} />
          <Feature title="Research & Publications" text="Discover our research projects, publications, and opportunities." icon={<FaFlask />} />
          <Feature title="Career Services" text="Utilize our career development resources and job opportunities." icon={<FaBriefcase />} />
          <Feature title="Alumni Engagement" text="Connect with alumni and explore mentorship opportunities." icon={<FaNewspaper />} />
          <Feature title="FAQs & Support" text="Find answers to common questions and get support." icon={<FaQuestionCircle />} />
        </Wrap>
        <Button size="lg" colorScheme={useColorModeValue("blue", "teal")} onClick={() => alert("Apply now!")}>
          Apply Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
