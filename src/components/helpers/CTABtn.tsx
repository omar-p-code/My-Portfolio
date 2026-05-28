import { useNavigate } from "react-router-dom";
import { hero } from "../../constants"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function CTABtn({ className, icon, text, onClick, type }: {
   className?: string
   icon?: React.ReactNode
   text?: string
   onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
   type?: "button" | "submit" | "reset"
}) {
   const navigation = useNavigate();

   return (
      <button type={type || 'button'} onClick={onClick} className={`w-fit h-fit ${className || ''}`}>
         <div onClick={() => navigation('/projects')} className={`mt-6 flex items-center justify-center w-fit h-fit px-6 py-3 border-x-3 border-x-(--secondary) font-bold rounded-lg hover:border-x-(--primary) gap-3 transition-colors text-(--secondary) hover:text-(--primary) bg-(--border)/10 group ${className || ''}`}>
            <span className=" animate-bounce text-(--secondary) group-hover:text-(--primary) transition-colors">
               {icon !== 'none' && (icon || <KeyboardDoubleArrowDownIcon />)}
            </span>
            <span>{text || hero.ctaText}</span>
         </div>
      </button>
   )
}

export default CTABtn