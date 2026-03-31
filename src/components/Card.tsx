import clsx from 'clsx';

interface CardType {
   name: string,
   img: string,
   vertical?: boolean,
}

function Card({ name, img, vertical = false }: CardType) {
   return (
      <div key={name + img} className={clsx('card flex-1 flex gap-3 items-center justify-between min-w-80', vertical ? 'flex-col' : 'flex-row')}>
         <div className={clsx("img-cont w-16 h-auto bg-(--secondary)/20 rounded-md p-2")}>
            <img loading="lazy" src={img} alt={name} className={clsx('w-full h-full object-center aspect-square')} />
         </div>
         <h3 className={clsx('w-full p-3', vertical ? 'text-center' : 'text-end')}>{name}</h3>
      </div>
   )
}

export default Card