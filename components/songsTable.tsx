import {Box} from "@chakra-ui/layout";
import {Table, Thead, Td, Tr, Tbody, Th, IconButton, Tab} from "@chakra-ui/react";
import {BsFillPlayFill} from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";

const SongsTable = ({songs}) => {
    console.log(songs);
    return (
        <Box bg={"transparent"} color={"white"}>
            <Box padding={"10px"} marginBottom={"20px"}>
                <Box marginBottom={"30px"}>
                    <IconButton
                        icon={<BsFillPlayFill fontSize={"30px"}/>}
                        colorScheme={"green"}
                        size={"lg"}
                        aria-label={"play"}
                        isRound
                    />
                </Box>
                <Table variant={"unstyled"}>
                    <Thead borderBottom={"1px solid"} borderColor={"rgba(255, 255, 255, 0.2)"}>
                        <Tr>
                            <Th>#</Th>
                            <Th>Title</Th>
                            <Th>Date Added</Th>
                            <Th>
                                <AiOutlineClockCircle/>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {songs.map((song, i) => (
                            <Tr
                                sx={{
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        bg: "rgba(255, 255, 255, 0.1)"
                                    },
                                }}
                                key={song.id}
                                cursor={"cursor"}
                            >
                                <Td>
                                    {i + 1}
                                </Td>
                                <Td>
                                    {song.name}
                                </Td>
                                <Td>
                                    {song.createdAt.toString()}
                                </Td>
                                <Td>
                                    {song.duration}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default SongsTable;