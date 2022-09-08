import {Box} from "@chakra-ui/layout";
import {Table, Thead, Td, Tr, Tbody, Th, IconButton} from "@chakra-ui/react";
import {BsFillPlayFill} from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";

const SongsTable = ({songs}) => {
    return (
        <Box bg={"transparent"}>
            <Box padding={"10px"} marginBottom={"20px"}>
                <IconButton
                    icon={<BsFillPlayFill/>}
                />
            </Box>
        </Box>
    );
};

export default SongsTable;