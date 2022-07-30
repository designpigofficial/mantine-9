import { Box, Text } from "@mantine/core";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Box
            sx={theme => ({
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4rem",
                padding: "10rem",
                backgroundColor:
                    theme.colorScheme === "dark"
                        ? theme.fn.darken(theme.colors.gray[9], 0.1)
                        : theme.fn.lighten(theme.colors.gray[1], 0.1),
            })}
        >
            <Text
                size="xl"
                variant="text"
                sx={{
                    fontSize: "4rem",
                    fontWeight: "bolder",
                }}
            >
                NextJs Mantine Starter
            </Text>
        </Box>
    );
};

export default Home;
