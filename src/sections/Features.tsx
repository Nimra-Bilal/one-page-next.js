import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
    <section className="py-24">
    <div className="container">
        <div className="flex justify-center">
             <Tag>Features</Tag>
             </div>
       
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Where power meets <span className="text-lime-400">simplicity</span></h2>
        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3 md:grid-cols-4">

            <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1 group">
            <div className="aspect-video flex items-center justify-center">
                <Avatar className="z-40">
                    <Image src={avatar1} className="rounded-full" alt="avatar 1"/>
                </Avatar>

                <Avatar className="-ml-6 z-30 border-indigo-500">
                    <Image src={avatar2} className="rounded-full" alt="avatar 2"/>
                </Avatar>

                <Avatar className="-ml-6 z-20 border-amber-500">
                    <Image src={avatar3} className="rounded-full" alt="avatar 3"/>
                </Avatar>

<Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
    <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
<Image src={avatar4} alt="avatar 4" className="absolute rounded-full size-full opacity-0 group-hover:opacity-100 transition" />
{Array.from({length:3}).map((_,i)=>(
    <span className="rounded-full size-1.5 bg-white inline-flex" key={i}></span>
))}

    </div>
</Avatar>
            </div>
            </FeatureCard>

          

            <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions" className="md:col-span-2 lg:col-span-1 group">
<div className="aspect-video flex items-center justify-center">
    <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">We&apos;ve achieved{" "}<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative ">
        <span>incredible</span>
        <video 
        src="/assets/gif-incredible.mp4" 
        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl group-hover:opacity-100 transition duration-500 opacity-0 pointer-events-none" 
        autoPlay loop muted playsInline/>
        </span>{" "}
        growth this year
        </p>
</div>
            </FeatureCard>

            <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you create more designs quickly" className="group md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto">
<div className="aspect-video flex items-center justify-center gap-4">
    <Key className="w-28 duration-500 outline outline-transparent group-hover:outline transition-all outline-2 outline-offset-4  group-hover:outline-lime-400 group-hover:translate-y-1">Shift</Key>
    <Key className="outline duration-500 group-hover:outline outline-transparent transition-all outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 delay-150">Alt</Key>
    <Key className="outline duration-500 group-hover:outline outline-transparent transition-all outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 delay-300">Ctrl</Key>
</div>
            </FeatureCard>
           

        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
{features.map(feature=>(
<div className="bg-neutral-900 border border-white/10 py-1.5 px-3 md:px-5 md:py-2 inline-flex rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group" key={feature}>
    <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
    <span className="font-medium">{feature}</span>
</div>
))}
        </div>
        </div> 
        </section>);
}
