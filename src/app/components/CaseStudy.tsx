import { TrendingDown, Users, Clock, Building2 } from 'lucide-react';

export function CaseStudy() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
            Enterprise Case Study
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How a Fortune 500 financial institution reduced incident response time by 87% 
            with Sentinel.
          </p>
        </div>

        <div className="border border-border bg-background">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 mb-4">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="text-xs text-primary tracking-wide uppercase">Financial Services</span>
                </div>
                <h3 className="text-3xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
                  Global Investment Bank
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  $2.3T AUM, 85,000 employees, 45 countries
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl mb-3 text-foreground" style={{ fontWeight: 600 }}>
                    Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Legacy SIEM infrastructure generated 50,000+ daily alerts with 94% false 
                    positive rate. Security team overwhelmed, average incident response time 
                    exceeded 18 hours.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-foreground" style={{ fontWeight: 600 }}>
                    Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Deployed Sentinel across all cloud and on-premises environments. AI models 
                    trained on historical attack patterns and integrated with existing security 
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l border-border bg-card p-12 flex items-center justify-center">
              <div className="w-full">
                <div className="aspect-video bg-background border border-border relative overflow-hidden mb-6">
                  <div className="absolute inset-0 grid grid-cols-10 grid-rows-8">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div key={i} className="border-r border-b border-border/20" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Building2 className="h-20 w-20 text-primary mx-auto mb-4" />
                      <div className="text-lg text-muted-foreground">
                        Enterprise Security Operations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border p-12">
            <h4 className="text-xl mb-8 text-foreground" style={{ fontWeight: 600 }}>
              Results After 6 Months
            </h4>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 border border-border bg-background">
                    <TrendingDown className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-3xl text-primary" style={{ fontWeight: 600 }}>
                    94%
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Reduction in false positive alerts
                </p>
              </div>

              <div className="border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 border border-border bg-background">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-3xl text-primary" style={{ fontWeight: 600 }}>
                    87%
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Faster mean time to response
                </p>
              </div>

              <div className="border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 border border-border bg-background">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-3xl text-primary" style={{ fontWeight: 600 }}>
                    60%
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Reduction in SOC analyst workload
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 border border-border text-foreground hover:bg-card transition-colors">
            Read Full Case Study
          </button>
        </div>
      </div>
    </section>
  );
}