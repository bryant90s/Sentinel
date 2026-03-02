import { CheckCircle2, Shield } from 'lucide-react';

export function Security() {
  const certifications = [
    'SOC 2 Type II',
    'ISO 27001:2013',
    'GDPR Compliant',
    'HIPAA Ready',
    'PCI DSS Level 1',
    'FedRAMP Authorized',
  ];

  const securityFeatures = [
    'End-to-end AES-256 encryption',
    'Zero-trust network architecture',
    'Multi-factor authentication',
    'Role-based access control',
    'Continuous compliance monitoring',
    'Immutable audit logs',
  ];

  return (
    <section id="security" className="py-20 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-xs text-primary tracking-wide uppercase">
                Enterprise Security
              </span>
            </div>

            <h2 className="text-4xl mb-6 text-foreground" style={{ fontWeight: 600 }}>
              Compliance & Certifications
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sentinel meets the highest standards for data security, privacy, and regulatory 
              compliance across global jurisdictions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border border-border bg-card p-4 text-center hover:border-primary/50 transition-colors"
                >
                  <span className="text-sm text-foreground" style={{ fontWeight: 500 }}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border bg-card p-1">
              <div className="aspect-video bg-background border border-border relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border-r border-b border-border/20" />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl text-foreground mb-2" style={{ fontWeight: 600 }}>
                      Secure by Design
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Infrastructure Protection
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="text-xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
                Data Sovereignty
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Deploy Sentinel in your preferred region with full control over data residency. 
                Available in US, EU, APAC, and on-premises configurations.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['US East', 'EU West', 'APAC', 'On-Prem'].map((region) => (
                  <div key={region} className="px-3 py-2 border border-border bg-background text-sm text-foreground text-center">
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}