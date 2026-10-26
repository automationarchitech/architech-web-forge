import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  'bot-field': z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Attribution fields stored by the tracking script in Layout.astro
const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'landing_page'];

function readAttribution(): Record<string, string> {
  try {
    const stored = JSON.parse(localStorage.getItem('aa_attribution') ?? '{}');
    return Object.fromEntries(
      attributionKeys.filter((key) => typeof stored[key] === 'string').map((key) => [key, stored[key]])
    );
  } catch {
    return {};
  }
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

      // Submit to Netlify Forms (form is defined statically in public/__forms.html)
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'bot-field': data['bot-field'] ?? '',
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
          ...readAttribution(),
        }).toString(),
      });

      if (!response.ok) throw new Error('Submission failed');

      window.gtag?.('event', 'generate_lead', { form_name: 'contact' });

      // Success
      toast.success('Message received!', {
        description: "We'll be in touch soon.",
      });
      reset(); // Clear form
    } catch (error) {
      // Error
      toast.error('Failed to send message', {
        description:
          'Please email us directly at hello@automationarchitech.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6 max-w-2xl mx-auto"
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <label>
          Don't fill this out if you're human: <input {...register('bot-field')} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Name field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 text-left mb-2"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 text-left mb-2"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Company field */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 text-left mb-2"
        >
          Company <span className="text-red-500">*</span>
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
          placeholder="Your company"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 text-left mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none transition-colors"
          placeholder="Tell us about your biggest operational bottleneck. What manual process is consuming the most time or creating the most errors?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
