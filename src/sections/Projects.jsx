import { ArrowUpRight, Github } from "lucide-react";
import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.png';
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {
        title: "ChatGPT Clone",
        description: "Developed a responsive ChatGPT clone using React and Tailwind CSS, featuring an API-ready architecture, real-time message state, and persistent chat history via LocalStorage.",
        link: "https://chatgpt-cloneui.netlify.app/",
        image: project1,
        tags: ["ReactJS", "Tailwind CSS", "API Integration"],
        github: "https://github.com/TanviSudhalkar/ChatGPT-Clone"
    },
    {
        title: "TickIt - A To-Do-List Application",
        description: "Leveraging ReactJS and Tailwind CSS, I built a responsive and intuitive To-Do-List application that streamlines daily task management through real-time status control, persistent browser-based storage, and a modular architecture utilizing Hooks (useEffect), State, and Props.",
        link: "https://tickit-app.netlify.app/",
        image: project2,
        tags: ["ReactJS", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/TanviSudhalkar/To-Do-List"
    },
];

export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">

        {/* Background glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase abumate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in amination-delay-100 text-secondary-foreground">Projects that
                    <span  className="font-serif italic font-normal text-white">
                        {" "}make an impact.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, from complex web application to innovative tools that solve real-world problems.
                </p>                
            </div>
            
            {/* projects grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" 
                        style={{animationDelay: `${ (idx + 1) * 100}ms`}}>
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transperent opacity-600"/>
                        
                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center fap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                 <a href={project.github} className="p-3 rounded-full glass hover:bg-primary-foreground transition-all">
                                    <Github className="w-5 h-5"/>
                                </a>
                            </div>                            
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justiofy-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border borde-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All CTA
            <div className="text-center mt-12 animate-fade-in animation delay-500">               
                <AnimatedBorderButton>
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton> 
            </div> */}
        </div>
    </section>
    );   
}