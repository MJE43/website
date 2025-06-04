import ContactForm from '../components/sections/ContactForm';

export default function ContactPage() {
  return (
    <div className="container relative py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's Build Something <span className="text-gradient">Amazing</span> Together
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within
            24 hours.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
