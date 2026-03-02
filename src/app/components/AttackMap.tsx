import { Globe2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AttackMap() {
  const [blockedCount, setBlockedCount] = useState(1247);
  const [recentAttacks, setRecentAttacks] = useState<Array<{ id: number; country: string; type: string; time: string }>>([
    { id: 1, country: 'Russia', type: 'Ransomware', time: '2s ago' },
    { id: 2, country: 'China', type: 'DDoS', time: '5s ago' },
    { id: 3, country: 'Brazil', type: 'Malware', time: '12s ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlockedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      
      const countries = ['Russia', 'China', 'Brazil', 'USA', 'India', 'Germany', 'Japan'];
      const types = ['Ransomware', 'DDoS', 'Malware', 'Phishing', 'SQL Injection'];
      
      setRecentAttacks(prev => [
        {
          id: Date.now(),
          country: countries[Math.floor(Math.random() * countries.length)],
          type: types[Math.floor(Math.random() * types.length)],
          time: 'just now'
        },
        ...prev.slice(0, 4)
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
            Real-Time Attack Monitoring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor global threat patterns as they happen. Our AI identifies and neutralizes attacks 
            before they reach your infrastructure.
          </p>
        </div>

        <div className="border border-border bg-card p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Stats */}
            <div className="space-y-6">
              <div className="border border-border bg-background p-6">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                  Threats Blocked Today
                </div>
                <div className="text-4xl text-primary mb-2" style={{ fontWeight: 600 }}>
                  {blockedCount.toLocaleString()}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">Live Monitoring</span>
                </div>
              </div>

              <div className="border border-border bg-background p-6">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                  Attack Origins
                </div>
                <div className="text-2xl text-foreground mb-4" style={{ fontWeight: 600 }}>
                  156 Countries
                </div>
                <div className="space-y-2">
                  {['Russia: 23%', 'China: 18%', 'Brazil: 12%', 'Other: 47%'].map((stat, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{stat.split(':')[0]}</span>
                      <span className="text-foreground">{stat.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center: Map visualization */}
            <div className="lg:col-span-2">
              <div className="border border-border bg-background p-6 h-full">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <Globe2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground" style={{ fontWeight: 600 }}>Global Threat Map</span>
                </div>

                {/* Simplified map representation */}
                <div className="relative h-64 border border-border bg-card mb-6">
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-8">
                    {Array.from({ length: 96 }).map((_, i) => (
                      <div key={i} className="border-r border-b border-border/30" />
                    ))}
                  </div>
                  
                  {/* Threat indicators */}
                  <div className="absolute top-1/4 left-1/3 h-3 w-3 bg-destructive animate-ping" />
                  <div className="absolute top-1/4 left-1/3 h-3 w-3 bg-destructive" />
                  
                  <div className="absolute top-1/3 right-1/4 h-3 w-3 bg-destructive animate-ping" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-1/3 right-1/4 h-3 w-3 bg-destructive" />
                  
                  <div className="absolute bottom-1/3 left-1/2 h-3 w-3 bg-primary animate-ping" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-1/3 left-1/2 h-3 w-3 bg-primary" />
                  
                  <div className="absolute top-1/2 right-1/3 h-3 w-3 bg-primary animate-ping" style={{ animationDelay: '1.5s' }} />
                  <div className="absolute top-1/2 right-1/3 h-3 w-3 bg-primary" />

                  {/* Center (protected zone) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="h-12 w-12 border-2 border-primary bg-primary/10 flex items-center justify-center">
                      <div className="h-6 w-6 bg-primary" />
                    </div>
                  </div>
                </div>

                {/* Recent attacks feed */}
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    Recent Blocks
                  </div>
                  <div className="space-y-2">
                    {recentAttacks.map((attack) => (
                      <div key={attack.id} className="flex items-center justify-between text-sm py-2 border-b border-border">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 bg-destructive" />
                          <span className="text-foreground">{attack.country}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{attack.type}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{attack.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="border border-border bg-card p-6">
            <div className="text-2xl text-primary mb-2" style={{ fontWeight: 600 }}>
              23 Attack Types
            </div>
            <div className="text-sm text-muted-foreground">
              Unique threat vectors identified
            </div>
          </div>
          <div className="border border-border bg-card p-6">
            <div className="text-2xl text-primary mb-2" style={{ fontWeight: 600 }}>
              99.97% Success
            </div>
            <div className="text-sm text-muted-foreground">
              Threat neutralization rate
            </div>
          </div>
          <div className="border border-border bg-card p-6">
            <div className="text-2xl text-primary mb-2" style={{ fontWeight: 600 }}>
              &lt;100ms Response
            </div>
            <div className="text-sm text-muted-foreground">
              Average detection time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}