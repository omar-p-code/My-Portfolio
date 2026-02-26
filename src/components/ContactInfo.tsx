import { contact } from '../constants'

function ContactInfo({ className }: { className?: string }) {
   return (
      <section className={`contact-info mt-3 flex flex-col justify-start items-start gap-2 ${className || ''}`}>
         <h3 className="text-lg font-semibold">Contact Information</h3>
         {
            Object.entries(contact).map(([key, value]) => (
               <p key={key} className="text-sm opacity-70 px-2 w-full flex justify-between items-center gap-2">
                  <span className="font-semibold capitalize flex-1 max-md:text-sm flex items-center">
                     <value.icon fontSize="small" className="mr-2 text-(--secondary)" />
                     {key}:
                  </span>
                  <a className="text-(--secondary) underline text-start flex-1" href={value.link} target="_blank">
                     <span>{value.value}</span>
                  </a>
               </p>
            ))
         }
      </section>
   )
}

export default ContactInfo