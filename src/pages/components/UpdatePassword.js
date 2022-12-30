import { useState } from 'react';
import supabase from '../../supabase'
import { 
    Button,
    FormControl, 
    FormLabel,  
    Input,  
    useToast,  
    VStack,
    Center
} from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function UpdatePassword() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [newPassword, setPassword] = useState('');
    const [session, setSession] = useState();
    const [user, setUser] = useState(undefined);
  
    const Update = async event => {
        event.preventDefault();

        try {
            const { data, err } = await supabase.auth.updateUser({
                password: newPassword
            });
            console.log(data);
            console.log('After calling supabase.updateUser');

            navigate('/login', { state: {session: data.session}})
            // Save the authentication token in local storage or a cookie
            // so that it can be used on subsequent requests
        } catch (error) {
            // Handle the error
            console.log("The try-catch has an error: ");
            console.log(error);
        }
        console.log("Did it succeed?");
    };

    return (
        <Center
        h='100vh'
        w='100vw'
        >
            <VStack as='form'>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input 
                    value={newPassword}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder='password' 
                    type='password' />
                </FormControl>
                <Button onClick={Update} bg='gray.300'>Update Password</Button>
            </VStack>
        </Center>
    );
}
