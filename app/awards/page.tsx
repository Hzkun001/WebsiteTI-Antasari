import Section from '../components/Section';
import Card from '../components/Card';

const awards = [
	{ title: 'Juara 1 Lomba Coding', desc: 'Tingkat Nasional, 2024' },
	{ title: 'Best Innovation', desc: 'Hackathon 2023' },
	{ title: 'Finalis Data Science', desc: 'Kompetisi Kampus Merdeka 2023' },
];

export default function AwardsPage() {
	return (
		<Section title="Awards & Prestasi">
			<div className="grid md:grid-cols-3 gap-6 mt-6">
				{awards.map((a, i) => (
					<Card key={i} title={a.title} desc={a.desc} />
				))}
			</div>
		</Section>
	);
}
