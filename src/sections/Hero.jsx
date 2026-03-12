import { Button } from "@/components/Button";
import heroBg from '@/assets/hero-bg.jpg';
import profilepic from '@/assets/profile-photo.png';
import { ArrowRight, Github as githubIcon, Linkedin as linkedinIcon, Mail, Download, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState } from 'react';

const skills = [
    "React", "JavaScript", "TypeScript", "Tailwind CSS", "GitHub", "SQL", "MongoDB", "Node.js", "Java", "SVN", "Postman", 
    "Jira", "Jenkins", "Restful APIs"
];

export const Hero = () => {
    const [copied, setCopied] = useState(false);

    const handleMailClick = (e, href) => {
        if (href.startsWith('mailto:')) {
            e.preventDefault(); //preventing browser to open email in next tab during the copy function.
            const email = href.replace('mailto:', '');
            navigator.clipboard.writeText(email);
            
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
        }
    };

    return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background*/}
        <div className="absolute inset-0">
            <img 
                src={heroBg} 
                alt="background" 
                className="w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/70 to-background/20" />
        </div>                                                                                       

        {/* Green dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                    style={{
                        backgroundColor: "#20B2A6",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>

        {/* Content */}
        <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
            
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
                {/* Left Column - Text Content */}
                <div className='space-y-8'>
                    <div className='animate-fade-in'>
                        <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-md text-primary'>
                            <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />React Developer  
                        </span>                        
                    </div>

                    {/* Headline */}
                    <div className='space-y-4'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in 
                        animation-delay-100'>
                            Crafting <span className='text-primary glow-text'>digital</span> 
                            <br /> experiences with 
                            <br />
                            <span className='font-serif italic font-normal text-white'>precision.</span>
                        </h1>
                        <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                            Hi, I'm Tanvi, a passionate Front End Developer specializing in React, JavaScript. I build 
                            performant and engaging web applications. I bring ideas to life in the digital realm.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg" aria-label="Contact me" className="cursor-pointer" onClick={() => {
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth'});
                        }}>
                            Contact Me
                        </Button>
                        <AnimatedBorderButton aria-label="Download CV">
                            <Download className="w-5 h-5" />
                            Download CV
                        </AnimatedBorderButton>
                    </div>
                
                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me: </span>                        
                        {[
                            {icon: githubIcon, href: 'https://github.com/TanviSudhalkar', label: "Github"},
                            {icon: linkedinIcon, href: 'https://www.linkedin.com/in/tanvisudhalkar/', label: "Linkedin"},
                            {icon: Mail, href: 'mailto:tanvi1sudhalkar@gmail.com', label: "tanvi1sudhalkar@gmail.com" },                            
                        ].map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.href} 
                                title={social.label}
                                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                onClick={(e) => handleMailClick(e, social.href)}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5" />

                                {/* Fancy Floating text for email copied */}
                                {social.icon === Mail && copied && (
                                    <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold py-1 px-2 rounded shadow-lg animate-bounce">
                                        Copied!
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
               
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/20 to-primary/20 blur-2xl 
                        animate-pulse"/>
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src={profilepic} alt="Tanvi Sudhalkar" className="w-full aspect-4/5 object-cover 
                            rounded-2xl" />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>

                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float 
                            animation-delay-500">
                                <div className="text-2xl font-bold text-primary">5+</div>
                                <div className="text-xs text-muted-foreground">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            {/* Skills */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
                        <div className="flex animate-marquee">
                            {[...skills, ...skills] .map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground 
                                    transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                </div>
            </div>                                            
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
            </a>
        </div>
        
   </section>
   );
};
