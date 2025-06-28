import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Twitch, Send } from "lucide-react";
import { cn } from "../lib/ultis";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Tin nhắn đã gửi",
                description: "Cảm ơn tin nhắn của bạn. Tôi sẽ sớm liên lạc lại với bạn",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="bg-secondary/30 relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                    Liên <span className="text-primary">Lạc</span>
                </h2>
                <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">Bạn có dự án hoặc muốn hợp tác? Hãy thoải mái liên hệ. Tôi luôn sẵn sàng thảo luận về các cơ hội mới</p>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-8">
                        <h3 className="mb-6 text-2xl font-semibold">Thông Tin Liên Hệ</h3>

                        <div className="justify-center space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <Mail className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:mrtrunq@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        mrtrunq@email.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <Phone className="text-primary h-6 w-6" />
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+84988235381" className="text-muted-foreground hover:text-primary transition-colors">
                                        0988 235 381
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Hạ Long, Quảng Ninh</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="mb-4 font-medium">Kết Nối Với Tôi</h4>
                            <div className="flex justify-center space-x-4">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitch />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg p-8 shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="mb-6 text-xl font-semibold">Gửi tin nhắn</h3>
                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                    Tên Của Bạn
                                </label>
                                <input type="text" id="name" name="name" required className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden" placeholder="Tên…" />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                    Email Của Bạn
                                </label>
                                <input type="email" id="email" name="email" required className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                                    Tin Nhắn Của Bạn
                                </label>
                                <textarea id="message" name="message" required className="border-input bg-background focus:ring-primary w-full resize-none rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden" placeholder="Xin chào, tôi muốn nói chuyện về…" />
                            </div>
                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button flex w-full items-center justify-center gap-2")}>
                                {isSubmitting ? "Đang Gửi..." : "Gửi Tin Nhắn"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
