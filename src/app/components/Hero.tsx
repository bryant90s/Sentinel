import { ArrowRight, Activity, Shield, AlertTriangle, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 mb-6">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-xs text-primary tracking-wide uppercase">Enterprise AI Security</span>
            </div>

            <h1 className="text-5xl lg:text-6xl tracking-tight mb-6 text-foreground" style={{ fontWeight: 600, lineHeight: 1.1 }}>
              Real-Time Threat Detection at Scale
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sentinel deploys advanced AI models to monitor, detect, and neutralize cybersecurity threats 
              across your infrastructure—24/7 autonomous protection for modern enterprises.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-6 py-3 border border-border text-foreground hover:bg-card transition-colors">
                View Documentation
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl text-primary mb-1" style={{ fontWeight: 600 }}>99.9%</div>
                <div className="text-sm text-muted-foreground">Threat Detection</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-1" style={{ fontWeight: 600 }}>&lt;100ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-1" style={{ fontWeight: 600 }}>24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Dashboard mockup */}
            <div className="border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground" style={{ fontWeight: 600 }}>Threat Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">LIVE</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-border bg-background p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="text-xs text-muted-foreground uppercase">Critical</span>
                  </div>
                  <div className="text-2xl text-foreground" style={{ fontWeight: 600 }}>3</div>
                  <div className="text-xs text-muted-foreground mt-1">Threats Blocked</div>
                </div>

                <div className="border border-border bg-background p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground uppercase">Protected</span>
                  </div>
                  <div className="text-2xl text-foreground" style={{ fontWeight: 600 }}>847</div>
                  <div className="text-xs text-muted-foreground mt-1">Active Nodes</div>
                </div>

                <div className="border border-border bg-background p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground uppercase">Uptime</span>
                  </div>
                  <div className="text-2xl text-foreground" style={{ fontWeight: 600 }}>99.99%</div>
                  <div className="text-xs text-muted-foreground mt-1">Last 30 Days</div>
                </div>

                <div className="border border-border bg-background p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground uppercase">Events/sec</span>
                  </div>
                  <div className="text-2xl text-foreground" style={{ fontWeight: 600 }}>12.4K</div>
                  <div className="text-xs text-muted-foreground mt-1">Processing Rate</div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-3">
                <div className="text-xs text-muted-foreground uppercase mb-3">Recent Activity</div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="h-2 w-2 bg-destructive mt-1.5" />
                  <div>
                    <div className="text-foreground">Malware detected & quarantined</div>
                    <div className="text-xs text-muted-foreground">203.0.113.45 • 2 min ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="h-2 w-2 bg-primary mt-1.5" />
                  <div>
                    <div className="text-foreground">Anomalous login blocked</div>
                    <div className="text-xs text-muted-foreground">198.51.100.23 • 8 min ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="h-2 w-2 bg-primary mt-1.5" />
                  <div>
                    <div className="text-foreground">DDoS attempt mitigated</div>
                    <div className="text-xs text-muted-foreground">Multiple IPs • 15 min ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}