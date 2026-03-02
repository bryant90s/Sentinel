import { Code2, Terminal } from 'lucide-react';

export function API() {
  return (
    <section id="api" className="py-20 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 mb-6">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-xs text-primary tracking-wide uppercase">
                Developer API
              </span>
            </div>

            <h2 className="text-4xl mb-6 text-foreground" style={{ fontWeight: 600 }}>
              RESTful API & SDKs
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Integrate Sentinel's threat intelligence and detection capabilities directly into 
              your applications, workflows, and security orchestration platforms.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border border-border bg-card p-6">
                <h3 className="text-xl mb-3 text-foreground" style={{ fontWeight: 600 }}>
                  Features
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary" />
                    Real-time threat query endpoints
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary" />
                    Webhook-based event streaming
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary" />
                    GraphQL support for complex queries
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary" />
                    Rate limiting: 10,000 requests/min
                  </li>
                </ul>
              </div>

              <div className="border border-border bg-card p-6">
                <h3 className="text-xl mb-3 text-foreground" style={{ fontWeight: 600 }}>
                  SDK Support
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Python', 'Node.js', 'Go', 'Java', 'Ruby', '.NET'].map((sdk) => (
                    <div
                      key={sdk}
                      className="px-3 py-2 border border-border bg-background text-sm text-foreground text-center"
                    >
                      {sdk}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                View Documentation
              </button>
              <button className="px-6 py-3 border border-border text-foreground hover:bg-card transition-colors">
                API Reference
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border bg-card">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">GET /v1/threats/active</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-foreground">
{`curl -X GET \\
  https://api.sentinel.io/v1/threats/active \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </code>
              </pre>
            </div>

            <div className="border border-border bg-card">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Response</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-foreground">
{`{
  "status": "success",
  "data": {
    "threats": [
      {
        "id": "thr_2k9f8a7b",
        "severity": "critical",
        "type": "ransomware",
        "source_ip": "203.0.113.45",
        "target": "192.168.1.100",
        "blocked": true,
        "timestamp": "2026-03-01T14:23:41Z"
      }
    ],
    "total": 127,
    "blocked": 127
  }
}`}
                </code>
              </pre>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="text-lg mb-3 text-foreground" style={{ fontWeight: 600 }}>
                Authentication
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sentinel uses API key authentication. Include your key in the Authorization 
                header of each request.
              </p>
              <div className="px-3 py-2 bg-background border border-border">
                <code className="text-xs text-primary">
                  Authorization: Bearer sk_live_abc123xyz789...
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-border bg-card p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl text-primary mb-2" style={{ fontWeight: 600 }}>
                99.99%
              </div>
              <div className="text-sm text-muted-foreground">API Uptime</div>
            </div>
            <div>
              <div className="text-2xl text-primary mb-2" style={{ fontWeight: 600 }}>
                &lt;50ms
              </div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
            <div>
              <div className="text-2xl text-primary mb-2" style={{ fontWeight: 600 }}>
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Requests Per Minute</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
