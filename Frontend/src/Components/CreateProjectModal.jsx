import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Textarea, useDisclosure } from "@chakra-ui/react"
import { BiAddToQueue } from "react-icons/bi"

const CreateProjectModal = () => {
    
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Button onClick={onOpen}>
        <BiAddToQueue size={20}/>
    </Button>
    <Modal
        isOpen = {isOpen}
        onClose= {onClose}
    >
     <ModalOverlay />
     <ModalContent>
        <ModalHeader> My New Project 🌟 </ModalHeader>
        <ModalCloseButton />
            <ModalBody pb={6}>
                <Flex alignItems={"center"} gap={4}>
                    {/* Left */}
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>
                    {/* Right */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <Input placeholder="Today" />
                    </FormControl>
                </Flex>
                <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea 
                          resize={"none"}
                          overflow={"hidden"} 
                          placeholder="Enter Project Description"
                        />
                </FormControl>
                <RadioGroup mt={4}>
                    <Flex gap={5}>
                        <Radio value='In-Progress' >In-Progress</Radio>
                        <Radio value='Completed' >Completed</Radio>
                    </Flex>
                </RadioGroup>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                    Add
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
     </ModalContent>
    </Modal>
  </>
  );
}

export default CreateProjectModal