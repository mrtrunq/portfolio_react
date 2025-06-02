export const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Xin chào, Tôi là</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Trung</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Hoàng</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground  mx-auto opacity-0 animate-fade-in-delay-3">Tôi tạo ra những trải nghiệm web tuyệt vời với công nghệ hiện đại. Chuyên về phát triển front-end, tôi xây dựng các giao diện vừa đẹp vừa hữu ích.</p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            Xem công việc của tôi
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/"></div>
        </section>
    );
};
