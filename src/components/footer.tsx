import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Code2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/50 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <div className="flex items-center gap-2">
                            <Code2 className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold font-heading">
                                Saim <span className="text-primary">Sultan</span>
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-light">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/saimsultan380"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                        >
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/saim-sultan-wordpress-developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="https://x.com/saimthewebguy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                        >
                            <Twitter className="w-5 h-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link
                            href="mailto:saim@mrwebsol.com"
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>

                    <p className="text-sm text-muted-foreground font-light">
                        © 2025 Saim Sultan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

