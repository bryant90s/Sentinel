import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the detection accuracy rate?',
      answer:
        'Sentinel achieves 99.9% threat detection accuracy with a false positive rate below 0.01%. Our AI models are continuously trained on emerging threat patterns from our global threat intelligence network.',
    },
    {
      question: 'How does Sentinel integrate with existing security infrastructure?',
      answer:
        'Sentinel provides native integrations with major SIEM platforms (Splunk, QRadar, ArcSight), cloud providers (AWS, Azure, GCP), and identity management systems. Our REST API and webhook support enable custom integrations with proprietary systems.',
    },
    {
      question: 'What is the typical deployment timeline?',
      answer:
        'Initial deployment takes 2-4 weeks depending on infrastructure complexity. This includes agent installation, integration configuration, baseline establishment, and security team training. Enterprise customers receive dedicated implementation support.',
    },
    {
      question: 'How does Sentinel handle data sovereignty and compliance?',
      answer:
        'Sentinel supports multi-region deployment with full data residency control. We maintain SOC 2 Type II, ISO 27001, GDPR, HIPAA, and FedRAMP certifications. All customer data is encrypted at rest and in transit using AES-256.',
    },
    {
      question: 'What machine learning models power the threat detection?',
      answer:
        'Sentinel employs ensemble methods combining gradient-boosted decision trees, recurrent neural networks for sequence analysis, and transformer architectures for pattern recognition. Models are trained on 500M+ labeled security events and updated continuously.',
    },
    {
      question: 'Can Sentinel detect zero-day vulnerabilities?',
      answer:
        'Yes. Our behavioral analysis algorithms identify anomalous patterns that indicate zero-day exploits before signature definitions exist. We combine static analysis, dynamic analysis, and sandboxing techniques for comprehensive coverage.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-foreground" style={{ fontWeight: 600 }}>
            Technical FAQ
          </h2>
          <p className="text-lg text-muted-foreground">
            Answers to common technical questions from security architects and CTOs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border bg-background overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-card transition-colors"
              >
                <span className="text-foreground pr-4" style={{ fontWeight: 500 }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Have more questions? Our security engineers are here to help.
          </p>
          <button className="px-6 py-3 border border-border text-foreground hover:bg-card transition-colors">
            Contact Technical Team
          </button>
        </div>
      </div>
    </section>
  );
}
