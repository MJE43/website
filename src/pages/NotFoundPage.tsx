import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
      <p className="mb-8 text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button asChild>
        <Link to="/">Return Home</Link>
      </Button>
    </section>
  );
}
