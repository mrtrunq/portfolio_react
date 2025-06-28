export const HeroSection = () => {
    return (
        <section id="hero" className="flex min-h-screen flex-col items-center justify-center px-4">
            <div className="z-10 mx-auto max-w-4xl text-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                        <span className="animate-fade-in opacity-0">Xin chào, Tôi là</span>
                        <span className="text-primary animate-fade-in-delay-1 opacity-0"> Trung</span>
                        <span className="text-gradient animate-fade-in-delay-2 ml-2 opacity-0"> Hoàng</span>
                    </h1>

                    <p className="text-muted-foreground animate-fade-in-delay-3 mx-auto text-lg opacity-0 md:text-xl">Tôi tạo ra những trải nghiệm web tuyệt vời với công nghệ hiện đại. Chuyên về phát triển front-end, tôi xây dựng các giao diện vừa đẹp vừa hữu ích.</p>

                    <div className="animate-fade-in-delay-4 pt-4 opacity-0">
                        <a href="#projects" className="cosmic-button">
                            Xem công việc của tôi
                        </a>
                    </div>
                </div>
            </div>

            <div className="-translate-x-1/ absolute bottom-8 left-1/2 transform"></div>
        </section>
    );
};
