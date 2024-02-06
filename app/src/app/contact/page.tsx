'use client';
import { useRouter } from 'next/navigation'
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
                <button onClick={ () => handleBtn() }> Back Home</button> 
            </div>
        </>
    );
}

export default ContactPage;