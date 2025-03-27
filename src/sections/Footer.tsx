import LogoImage from "@/assets/images/logo.svg"
import Image from "next/image";
const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return( <section className="py-16"> 
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 ">
                    <div>
<Image src={LogoImage} alt="logo image" />
                    </div>
                    <div>
<nav className=" flex gap-6">
    {footerLinks.map(link=>(
        <a className="text-white/50 text-sm" key={link.label}  href={link.href}>{link.label}</a>
    ))}
   
</nav>
                    </div>
                </div>
            </div>
            </section>
    );
}
