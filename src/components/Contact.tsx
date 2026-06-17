import { ContactForm, ContactInfo } from "."

function Contact({ className }: { className?: string }) {
   return (
      <section className={`contacts p-5 py-10 ${className || ''}`}>
         <h3 className="text-3xl text-(--secondary) font-extrabold text-center mb-3">Contact Me</h3>
         <p className="text-sm opacity-70 text-center">Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
         <div className="contact-main flex gap-3 flex-wrap mt-8 max-sm:flex-col justify-evenly items-start">
            <ContactInfo className="flex-1 w-full mb-5" />
            <ContactForm className="flex-1 w-full" />
         </div>
      </section>
   )
}

export default Contact