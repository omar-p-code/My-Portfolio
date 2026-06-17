

type pointsType = 'important' | 'info' | 'opinion' | null | 'invite' | 'joke' | 'suggestion' | 'warning' | 'tip' | 'question' | 'quote' | 'example' | 'note' | 'exercise' | 'challenge' | 'solution' | 'reference' | 'summary' | 'conclusion' | 'introduction' | 'background' | 'context' | 'motivation' | 'implementation' | 'design' | 'architecture' | 'performance' | 'optimization' | 'security' | 'testing' | 'debugging' | 'deployment' | 'maintenance' | 'documentation' | 'collaboration' | 'communication' | 'teamwork' | 'leadership' | 'management' | 'strategy' | 'planning' | 'execution' | 'evaluation' | 'feedback' | 'reflection';

interface blog {
   image?: string,
   points: { title: string, content: string, type: pointsType }[],
}

export default function Blog({ image, points }: blog) {
   return (
      <div className="blog">
         {image && <img src={image} />}
         {points.map((point, i) => (
            <div key={i} className={`point ${point.type}`}>
               <h3>{point.title}</h3>
               <p>{point.content}</p>
            </div>
         ))}
      </div>
   )
}

