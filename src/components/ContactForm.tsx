import { CTABtn } from ".";
import Input from "./helpers/Input"
import emailjs from '@emailjs/browser';
import React from 'react';



function ContactForm({ className }: { className?: string }) {
   const name = React.useRef<HTMLInputElement>(null);
   const email = React.useRef<HTMLInputElement>(null);
   const message = React.useRef<HTMLInputElement>(null);
   const title = React.useRef<HTMLInputElement>(null);

   function handleSubmit(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
      e.preventDefault();
      console.log(name.current?.querySelector('input')?.value,
         email.current?.querySelector('input')?.value,
         message.current?.querySelector('input')?.value);
      if (name.current && email.current && message.current && title.current) {
         const templateParams = {
            title: title.current!.querySelector('input')!.value,
            from_name: name.current!.querySelector('input')!.value,
            from_email: email.current!.querySelector('input')!.value,
            message: message.current!.querySelector('textarea')!.value,
         };
         emailjs.send('service_xfatylr', 'template_5fr5unb', templateParams, '-kvs95NuhZP9gaLcj')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
               alert('Message sent successfully!');
               title.current!.querySelector('input')!.value = '';
               name.current!.querySelector('input')!.value = '';
               email.current!.querySelector('input')!.value = '';
               message.current!.querySelector('textarea')!.value = '';
            }, (err) => {
               console.log('FAILED...', err);
               alert('Failed to send message. Please try again later.');
            });
      }
   }


   return (
      <section className={`${className || ''}`}>
         <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
         <form className="space-y-4">
            <div>
               <Input ref={title} label="Title" placeholder="Subject of your message?" />
            </div>
            <div>
               <Input ref={name} label="Name" placeholder="Your Name" />
            </div>
            <div>
               <Input ref={email} label="Email" placeholder="Your Email" />
            </div>
            <div>
               <Input ref={message} label="Message" placeholder="Your Message" variant="filled" multiline rows={4} />
            </div>
            <CTABtn className="mt-2 text-center w-full" icon='none' text="Send Message" onClick={handleSubmit} />
         </form>
      </section>
   )
}

export default ContactForm