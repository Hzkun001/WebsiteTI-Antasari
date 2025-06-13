import Section from '../components/Section';
import Card from '../components/Card';

const albums = [
	{ title: 'Kegiatan Seminar', desc: 'Dokumentasi seminar dan workshop.' },
	{ title: 'Kunjungan Industri', desc: 'Kunjungan ke perusahaan IT.' },
	{ title: 'Kebersamaan', desc: 'Momen kebersamaan anggota HMTI.' },
];

export default function AlbumsPage() {
	return (
		<Section title="Albums & Dokumentasi">
			<div className="grid md:grid-cols-3 gap-6 mt-6">
				{albums.map((a, i) => (
					<Card key={i} title={a.title} desc={a.desc} />
				))}
			</div>
		</Section>
	);
}
