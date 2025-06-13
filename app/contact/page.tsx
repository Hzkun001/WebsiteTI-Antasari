import Section from '../components/Section';
import Button from '../components/Button';

export default function ContactPage() {
  return (
    <Section title="Kontak Himpunan">
      <form className="max-w-xl mx-auto flex flex-col gap-4 mt-6">
        <input type="text" placeholder="Nama" className="p-3 rounded bg-gray-800 text-white" required />
        <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white" required />
        <textarea placeholder="Pesan" className="p-3 rounded bg-gray-800 text-white" rows={4} required />
        <Button type="submit">Kirim Pesan</Button>
      </form>
    </Section>
  );
}
