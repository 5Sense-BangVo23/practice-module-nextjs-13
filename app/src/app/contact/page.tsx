'use client';
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';

const ContactPage = () => {
    const router = useRouter();

    const handleBtn = () =>{
        alert('Me');
        router.push('/');
    }
    return (
        <>
            <h1>Contact Page</h1>
            <div>
                <Button variant='success'>Contact to me</Button>
                <button onClick={ () => handleBtn() }> Back Home</button> 
            </div>
        </>
    );
}

export default ContactPage;