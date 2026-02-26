import { hero } from "../../constants"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function CTABtn({ className, icon, text, onClick }: {
   className?: string
   icon?: React.ReactNode
   text?: string
   onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void

}) {
   return (
      <a href={hero.ctaLink} onClick={onClick} className={`mt-6 flex items-center justify-center w-fit h-fit px-6 py-3 border-x-3 border-x-(--secondary) font-bold rounded-lg hover:border-x-(--primary) gap-3 transition-colors text-(--secondary) hover:text-(--primary) bg-(--border)/10 group ${className || ''}`}>
         <span className=" animate-bounce text-(--secondary) group-hover:text-(--primary) transition-colors">
            {icon !== 'none' && (icon || <KeyboardDoubleArrowDownIcon />)}
         </span>
         <span>{text || hero.ctaText}</span>
      </a>
   )
}

export default CTABtn