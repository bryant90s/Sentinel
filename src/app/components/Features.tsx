import { Brain, Eye, FileBarChart, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description:
        'Advanced machine learning models continuously analyze network traffic, user behavior, and system logs to identify anomalies in real-time.',
    },
    {
      icon: Eye,
      title: 'Anomaly Detection',
      description:
        'Behavioral analysis algorithms detect zero-day threats and advanced persistent threats that traditional signature-based systems miss.',
    },
    {
      icon: FileBarChart,
      title: 'Compliance Reporting',
      description:
        'Automated generation of SOC 2, ISO 27001, GDPR, and HIPAA compliance reports with full audit trails and evidence documentation.',
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description:
        'Sub-100ms threat detection and automated response protocols isolate compromised systems before lateral movement occurs.',
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
            Enterprise-Grade Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for security teams that demand precision, speed, and comprehensive visibility 
            across their entire attack surface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-border bg-background p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 border border-border bg-card">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-foreground" style={{ fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-border bg-card p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
                Technical Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Detection Latency</span>
                  <span className="text-foreground" style={{ fontWeight: 500 }}>&lt;100ms</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Events Per Second</span>
                  <span className="text-foreground" style={{ fontWeight: 500 }}>10M+</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">False Positive Rate</span>
                  <span className="text-foreground" style={{ fontWeight: 500 }}>&lt;0.01%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Data Retention</span>
                  <span className="text-foreground" style={{ fontWeight: 500 }}>13 months</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
                Integration Support
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-background border border-border">
                  <div className="h-2 w-2 bg-primary" />
                  <span className="text-foreground">SIEM Integration (Splunk, QRadar, ArcSight)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background border border-border">
                  <div className="h-2 w-2 bg-primary" />
                  <span className="text-foreground">Cloud Providers (AWS, Azure, GCP)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background border border-border">
                  <div className="h-2 w-2 bg-primary" />
                  <span className="text-foreground">Identity Providers (Okta, AD, Auth0)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background border border-border">
                  <div className="h-2 w-2 bg-primary" />
                  <span className="text-foreground">Ticketing Systems (Jira, ServiceNow)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
