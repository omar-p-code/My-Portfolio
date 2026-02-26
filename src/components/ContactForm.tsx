import { CTABtn } from ".";
import Input from "./helpers/Input"


function ContactForm({ className }: { className?: string }) {
   return (
      <section className={`${className || ''}`}>
         <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
         <form className="space-y-4">
            <div>
               <Input label="Name" placeholder="Your Name" />
            </div>
            <div>
               <Input label="Email" placeholder="Your Email" />
            </div>
            <div>
               <Input label="Message" placeholder="Your Message" variant="filled" multiline rows={4} />
            </div>
            <CTABtn className="mt-2 text-center w-full" icon='none' text="Send Message" onClick={(e) => {
               e.preventDefault();
               alert('Message sent! (This is a demo, so no actual message will be sent.)');
            }} />
         </form>
      </section>
   )
}

export default ContactForm