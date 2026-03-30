interface CardType {
   name: string,
   img: string
}

function Card({ name, img }: CardType) {
   return (
      <div key={name + img} className='card flex-1 flex flex-row gap-3 items-center justify-between min-w-80'>
         <div className="img-cont w-14 h-14 bg-(--secondary)/20 rounded-md p-2">
            <img src={img} alt={name} className='w-full h-full object-center aspect-square' />
         </div>
         <h3 className='w-full text-end p-3'>{name}</h3>
      </div>
   )
}

export default Card