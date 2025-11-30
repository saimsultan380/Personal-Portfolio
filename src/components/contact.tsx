"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

const contactInfo = [
    { icon: Mail, label: "Email", value: "saim@mrwebsol.com", href: "mailto:saim@mrwebsol.com" },
    { icon: Phone, label: "Phone", value: "+92 300 6031380", href: "tel:+923006031380" },
    { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
];

export function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Create mailto link with form data
        const subject = `Portfolio Contact from ${values.name}`;
        const body = `Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0A%0D%0AMessage:%0D%0A${values.message}`;
        const mailtoLink = `mailto:saim@mrwebsol.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form
        form.reset();
    }

    return (
        <section id="contact" className="w-full py-12 md:py-24 px-4 md:px-6 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        <span className="text-primary/60">&lt;</span>Let's Work <span className="text-primary">Together</span><span className="text-primary/60">/&gt;</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how I can help bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Info - Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                                        {item.label}
                                    </h3>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-base font-semibold hover:text-primary transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-base font-semibold">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-card border border-border/50 rounded-xl p-8">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="john@example.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell me about your project..."
                                                        className="min-h-[150px] resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full" size="lg">
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
