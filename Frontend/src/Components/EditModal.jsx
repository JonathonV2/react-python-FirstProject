import { Button, Flex, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Textarea, useDisclosure } from "@chakra-ui/react"
import { BiEditAlt } from "react-icons/bi"

const EditModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <IconButton 
            onClick={onOpen}
            variant={'ghost'}
            colorScheme='blue'
            aria-label='See menu'
            size={"sm"}
            icon={<BiEditAlt size={20}  />}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader> My New Project 🌟</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Flex alignItems={"center"} gap={4}>
                        <FormControl>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder='Jonathan'/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <Input placeholder='Date'/>
                        </FormControl>
                    </Flex>
                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            resize={"none"}
                            overflow={"hidden"}
                            placeholder="My new Project is about..."
                        />
                    </FormControl>
                    <RadioGroup defaultValue='In-Progress' mt={4}>
                        <Flex gap={5}>
                            <Radio value='In-Progress'>In-Progres</Radio>
                            <Radio value='Completed'>Completed</Radio>
                        </Flex>
                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue'  mr={3}>
                        Add
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    
    </>
  )
}

export default EditModal