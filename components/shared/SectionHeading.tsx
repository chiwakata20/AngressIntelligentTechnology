export type SectionHeadingProps={eyebrow:string;title:string;text?:string;center?:boolean};
export function SectionHeading({eyebrow,title,text,center=false}:SectionHeadingProps){return <div className={center?"mx-auto max-w-2xl text-center":"max-w-2xl"}><span className="eyebrow">{eyebrow}</span><h2 className="section-title">{title}</h2>{text&&<p className="section-copy">{text}</p>}</div>}
