import { 
  Button, Flex, FormControl, FormLabel, Input, Modal, 
  ModalBody, ModalCloseButton, ModalContent, ModalFooter, 
  ModalHeader, ModalOverlay, Radio, RadioGroup, Textarea, 
  useDisclosure, useToast 
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BASE_URL } from "../App";

const CreateProjectModal = ({ setUsers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });
  const toast = useToast();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs)
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      toast({
        status: "success",
        title: "Congrats",
        description: "Project Added Successfully.",
        duration: 2000,
        position: "top",
      });
      onClose();
      setUsers((prevUsers) => [...prevUsers, data]);
      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      });
    } catch (error) {
      toast({
        status: "error",
        title: "An error has occurred",
        description: error.message,
        duration: 4000,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleCreateUser}>
          <ModalContent>
            <ModalHeader> My New Project 🌟 </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                {/* Left */}
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input 
                    placeholder="Jonathan"
                    value={inputs.name}
                    onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                  />
                </FormControl>
                {/* Right */}
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input 
                    placeholder="Today" 
                    value={inputs.role}
                    onChange={(e) => setInputs({ ...inputs, role: e.target.value })}                        
                  />
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea 
                  resize={"none"}
                  overflow={"hidden"} 
                  placeholder="Enter Project Description"
                  value={inputs.description}
                  onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                />
              </FormControl>
              <RadioGroup mt={4}>
                <Flex gap={5}>
                  <Radio 
                  value='in-progress'
                  onChange={(value) => setInputs({ ...inputs, gender: value })}
                  >In-Progress</Radio>
                  <Radio value='completed'
                  onChange={(value) => setInputs({ ...inputs, gender: value })}
                  >Completed</Radio>
                </Flex>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} type='submit' isLoading={isLoading}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default CreateProjectModal;