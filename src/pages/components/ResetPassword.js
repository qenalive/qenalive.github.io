import { useState } from 'react'
import supabase from '../../supabase'
import { 
    Button,
    FormControl, 
    FormLabel,  
    Input,  
    useToast,  
    VStack,
} from '@chakra-ui/react'

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const toast = useToast();
  
    const Reset = async event => {
      event.preventDefault();
  
      try {
        const { data, err } = await supabase.auth.resetPasswordForEmail(
          email, { redirectTo: "http://localhost:3000/updatepassword" }
        );
  
        return toast({
          title: 'Reset link sent.',
          description: "We've sent a password reset link to your email from supabase.io.",
          status: 'success',
          duration: 5000,
          isClosable: true,
      })
    
      } catch (error) {
        // Handle the error
        console.log("Error is: ", error);
      }
    }
  
    return (
        <VStack as='form'>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder='rsmith@gmail.com' 
                type='email' />
            </FormControl>
            <Button onClick={Reset} bg='gray.300'>Reset</Button>
        </VStack>
    )
}
