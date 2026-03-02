import { Check } from 'lucide-react';

export function Pricing() {
  const tiers = [
    {
      name: 'Professional',
      price: '$2,999',
      period: 'per month',
      description: 'For growing security teams',
      features: [
        'Up to 100K events/second',
        '500GB log storage',
        '3 months data retention',
        'Standard integrations',
        'Email support',
        '99.9% SLA',
      ],
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: 'per month',
      description: 'For large organizations',
      features: [
        'Up to 1M events/second',
        '5TB log storage',
        '13 months data retention',
        'Advanced integrations',
        '24/7 priority support',
        '99.99% SLA',
        'Custom ML models',
        'Dedicated account manager',
      ],
      highlighted: true,
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'us',
      description: 'For mission-critical operations',
      features: [
        'Unlimited event processing',
        'Unlimited storage',
        'Custom retention policies',
        'On-premises deployment',
        'White-glove onboarding',
        '99.999% SLA',
        'Custom development',
        'Security advisory services',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that matches your security requirements. All plans include core 
            threat detection features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`border ${
                tier.highlighted
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-card'
              } p-8 relative`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl mb-2 text-foreground" style={{ fontWeight: 600 }}>
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-foreground" style={{ fontWeight: 600 }}>
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">/ {tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border text-foreground hover:bg-background'
                } transition-colors`}
              >
                {tier.name === 'Custom' ? 'Contact Sales' : 'Start Trial'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include 14-day free trial. No credit card required. 
            <span className="text-primary ml-1 cursor-pointer hover:underline">
              View detailed comparison
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
