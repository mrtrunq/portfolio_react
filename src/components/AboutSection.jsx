import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                    Thông Tin Của <span className="text-primary">Tôi</span>
                </h2>

                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Web Developer</h3>
                        <p className="text-muted-foreground">Với 1 năm kinh nghiệm trong lĩnh vực phát triền web, tôi tạo ra các ứng dụng web có khả năng đáp ứng, dễ truy cập bằng các công nghệ hiện đại</p>
                        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                            <a href="#contact" className="cosmic-button">
                                Liên Lạc
                            </a>
                            <a href="#contact" className="border-primary text-primary hover:bg-primary/10 rounded-full border px-6 py-2 transition-colors duration-300">
                                Tải xuống CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border card-hover p-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <Code className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold"> Web Development</h4>
                                    <p className="text-muted-foreground">Tạo ra websites đáp ứng và ứng dụng web với frameworks hiện đại</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border card-hover p-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <User className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold"> UI/UX Design</h4>
                                    <p className="text-muted-foreground">Thiết kế giao diện người dùng trực quan và trải nghiệm liền mạch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
