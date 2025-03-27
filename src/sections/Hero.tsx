"use client";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import {motion , useAnimate} from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {

    const [LeftDesignScope, LeftDesignAnimate] = useAnimate();
    const [LeftPointerScope, LeftPointerAnimate] = useAnimate();
    const [RightDesignScope, RightDesignAnimate] = useAnimate();
    const [RightPointerScope, RightPointerAnimate] = useAnimate();

    useEffect(() => {
        LeftDesignAnimate([
            [LeftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
            [LeftDesignScope.current, { y:0 , x:0 }, { duration: 0.5 }]
        ]); 

       RightDesignAnimate([
            [ RightDesignScope.current, { opacity: [1] }, { duration: 0.5 , delay:1.5 }],
            [ RightDesignScope.current, { y:0 , x:0 }, { duration: 0.5 }],
        ]);

        LeftPointerAnimate([
            [LeftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
            [LeftPointerScope.current, { y:0 , x:-100 }, { duration: 0.5 }],
            [LeftPointerScope.current, { x:0 , y:[0,16,0] }, { duration: 0.5 , ease:"easeInOut"}], 
        ]);

            RightPointerAnimate([
                [ RightPointerScope.current, { opacity: [1] }, { duration: 0.5 , delay:1.5 }],
                [ RightPointerScope.current, { y:0 , x:175 }, { duration: 0.5 }],
                [ RightPointerScope.current, { x:0 , y:[0,20,0] }, { duration: 0.5 , ease:"easeInOut"}], 
            ]);
    }, 
    []);

    return (
    <section className="py-24 overflow-x-clip" style={{cursor: `url(${cursorYouImage.src}) , auto`}}>
<div className="container relative ">
    <motion.div ref={LeftDesignScope} initial={{opacity:0 , y:100 , x:-100}} drag className="absolute -left-32 top-16 hidden lg:block">
        <Image src={designExample1Image} draggable="false" alt="Design example 1 image" />
    </motion.div> 
    <motion.div ref={LeftPointerScope} initial={{opacity:0 , y:100 , x:-200}} className="absolute left-56 top-96 hidden lg:block">
        <Pointer name="Amdrea" />
    </motion.div>
    <motion.div drag ref={RightDesignScope} initial={{opacity:0 , x:100 , y:100 }} className="absolute -right-64 -top-16 hidden lg:block">
        <Image src={designExample2Image} draggable="false" alt="Design example 2 image" />
    </motion.div>
   
    <motion.div ref={RightPointerScope} initial={{opacity:0 , y:100 , x:275}} className="absolute right-80 -top-4 hidden lg:block">
    <Pointer name="Brian" color="red" />
    </motion.div>
    <div className="flex justify-center">
        <div className="inline-flex px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">✨7.5M seed round raised .</div>
        </div>
    
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">Impactful Design, created effortlessly</h1>
    <p className="text-center text-xl text-white/50 mt-8 md:max-w-2xl mx-auto">Design Tools shouldn&apos;t slow you down. Layers combine powerful Features with intuitive interface that keeps you in your creative flow. </p>
    <form className="flex border border-white/15 rounded-full mt-8 p-2 md:max-w-lg mx-auto">
        <input type="email" placeholder="enter your email" 
        className="bg-transparent px-4 md:flex-1 w-full"/>
        <Button 
        type="submit" 
        variant="primary" 
        className="whitespace-nowrap"
        size="sm"
        >Sign Up</Button>
    </form>
</div>
    </section>);
}
