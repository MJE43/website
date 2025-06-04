// Placeholder action for form submission
// This is a temporary implementation for development purposes

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const endpoint = 'https://formspree.io/f/xdkzkdnk';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Failed to submit form');
  }
}
