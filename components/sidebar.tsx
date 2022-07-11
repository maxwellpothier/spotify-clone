import NextImage from "next/image";
import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/layout";
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from "react-icons/md";
import Link from "next/link";

const navMenu = [
    {
        name: "Home",
        icon: MdHome,
        route: "/",
    },
    {
        name: "Search",
        icon: MdSearch,
        route: "/search",
    },
    {
        name: "Your Library",
        icon: MdLibraryMusic,
        route: "/library",
    },
];

const musicMenu = [
    {
        name: "Create Playlist",
        icon: MdPlaylistAdd,
        route: "/",
    },
    {
        name: "Favorites",
        icon: MdFavorite,
        route: "/favorites",
    },
];

const Sidebar = () => {
    return (
        <Box
            width={"100%"}
            height={"calc(100vh - 100px)"}
            bg={"black"}
            paddingX={"5px"}
            color={"gray"}
        >
            <Box paddingY={"20px"}>
                <Box width={"120px"} marginBottom={"20px"} paddingX={"20px"}>
                    <NextImage
                        src={"/logo.svg"}
                        height={60}
                        width={120}
                    />
                </Box>
                <Box marginBottom={"20px"}>
                    <List spacing={2}>
                        {navMenu.map((menuItem) => (
                            <ListItem paddingX={"20px"} fontSize={"16px"} key={menuItem.name}>
                                <LinkBox>
                                    <Link href={menuItem.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon
                                                as={menuItem.icon}
                                                color={"white"}
                                                marginRight={"20px"}
                                            />
                                            {menuItem.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider color={"gray.800"}/>
                <Box marginTop={"20px"}>
                    <List spacing={2}>
                        {musicMenu.map((item) => (
                            <ListItem paddingX={"20px"} fontSize={"16px"} key={item.name}>
                                <LinkBox>
                                    <Link href={item.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon
                                                as={item.icon}
                                                color={"white"}
                                                marginRight={"20px"}
                                            />
                                            {item.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;