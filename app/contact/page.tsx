"use client"
import axios from 'axios';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    msg: ""
  });

  const handleChange = (e:any) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user, [name]:value});
  }
  
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validations
    if(!user.name) return toast.error("Name Is required!");
    if(!user.email) return toast.error("Email Is required!");
    if(!user.msg) return toast.error("Message Is required!");

    try{
      setLoading(true);
      const {data} = await axios.post('/api/contact', {
        name: user.name,
        email: user.email, 
        phone: user.phone, 
        message: user.msg
      });
      if(data.success) toast.success(data.message)
      else toast.error(data.message);

      setUser({name: "", email: "", phone: "", msg: ""});
      setLoading(false);
    }catch(error){
      console.log(error);
      //@ts-ignore
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  }

  return (
    <main>
    <div className='md:px-10 px-3 md:mb-10 mb-20 flex flex-wrap gap-4 justify-center items-center bg-bg min-h-[90vh]'>
      <ToastContainer/>

      <div className='col2 flex items-center justify-center'>
        <Image src="/hero-image.jpg" width={500} height={400} alt='Contact Us' className='rounded-lg'/>
      </div>

      <div className='col1'>
        <div className='bg-bg shadow-lg max-w-[1000px] w-full mx-auto min-h-[200px] rounded-md md:px-4 px-2 py-4'>
          <h2 className='md:text-3xl text-xl font-bold'>Contact Us:</h2>

          <form 
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 md:max-w-[700px] md:px-5 mt-5 pb-5'>

            <div className='w-full flex items-center justify-start gap-4'>
              <i className='fas fa-user md:text-2xl text-lg'></i>
              <input type="text" placeholder='Name' autoComplete='off'
              name='name'
              value={user.name}
              onChange={handleChange}
              className='w-full py-2.5 px-3 bg-gray-200 rounded-md outline-none text-text'/>
            </div>

            <div className='w-full flex items-center justify-start gap-4'>
              <i className='fas fa-envelope md:text-2xl text-lg'></i>
              <input type="email" placeholder='Email' autoComplete='off'
              name='email'
              value={user.email}
              onChange={handleChange}
              className='w-full py-2.5 px-3 bg-gray-200 rounded-md outline-none text-text'/>
            </div>

            <div className='w-full flex items-center justify-start gap-4'>
              <i className='fas fa-phone md:text-2xl text-lg'></i>
              <input type="text" placeholder='Phone' autoComplete='off'
              name='phone'
              value={user.phone}
              onChange={handleChange}
              className='w-full py-2.5 px-3 bg-gray-200 rounded-md outline-none text-text'/>
            </div>

            <div className='w-full flex items-start justify-start gap-4'>
              <i className='fas fa-message md:text-2xl text-lg pt-2'></i>
              <textarea placeholder='Leave a message...' rows={4} autoComplete='off'
              name='msg'
              value={user.msg}
              onChange={handleChange}
              className='w-full py-2.5 px-3 bg-gray-200 rounded-md outline-none resize-none text-text'></textarea>
            </div>

            <div className='w-full flex justify-end'>
              <button 
              type='submit'
              className='bg-primary text-bg rounded-md shadow-sm max-sm:w-full px-10 py-2.5 flex gap-2 items-center justify-center'
              >
                <i className='fas fa-paper-plane'></i>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
    </main>
  )
}

export default Contact;