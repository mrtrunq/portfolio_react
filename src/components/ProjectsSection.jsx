import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Page 1",
        description: "This is template 1",
        image: `${import.meta.env.BASE_URL}/projects/proj_01.jpg`,
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Page 2",
        description: "This is template 2",
        image: `${import.meta.env.BASE_URL}/projects/proj_02.jpg`,
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Page 3",
        description: "This is template 3",
        image: `${import.meta.env.BASE_URL}/projects/proj_03.jpg`,
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                    Dự Án <span className="text-primary">Nổi Bật</span>
                </h2>
                <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">Đây là một số dự án gần đây của tôi, mỗi dự án được thiết kế chi tiết, chú ý đến trải nghiệm của người dùng</p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card card-hover overflow-hidden rounded-lg shadow-xs">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span className="bg-primary/20 text-secondary-foreground rounded-full border px-2 py-1 text-xs font-medium">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_bank">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_bank">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/mrtrunq" className="cosmic-button mx-auto flex w-fit items-center gap-2" target="_blank">
                        Kiểm tra GitHub của tôi <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
