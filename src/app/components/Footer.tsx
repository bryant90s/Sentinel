import { Shield, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl tracking-tight text-foreground">SENTINEL</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Enterprise-grade AI cybersecurity platform providing real-time threat detection, 
              anomaly analysis, and automated response for modern security teams.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-border hover:border-primary hover:bg-card transition-colors"
              >
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="p-2 border border-border hover:border-primary hover:bg-card transition-colors"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="p-2 border border-border hover:border-primary hover:bg-card transition-colors"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-foreground mb-4 uppercase tracking-wide" style={{ fontWeight: 600 }}>
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-foreground mb-4 uppercase tracking-wide" style={{ fontWeight: 600 }}>
              Developers
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  SDKs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-foreground mb-4 uppercase tracking-wide" style={{ fontWeight: 600 }}>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Sentinel AI Security. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
