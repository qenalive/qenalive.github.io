import { Center, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import LoginTab from "./components/LoginTab";
import SignUpTab from './components/SignUpTab'
import ResetPassword from "./components/ResetPassword";

export default function Home(){



    return(
        <Center
        h='100vh'
        w='100vw'
        >
            <Tabs p='20px' bg='gray.300' borderRadius='10px' w='30vw'>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Sign Up</Tab>
                    <Tab>Reset Password</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <LoginTab />
                    </TabPanel>
                    <TabPanel>
                        <SignUpTab />
                    </TabPanel>
                    <TabPanel>
                        <ResetPassword />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Center>
    )
}