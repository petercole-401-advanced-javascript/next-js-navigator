import Layout from '../components/myLayout';
import Link from 'next/link';
import axios from 'axios';

export default (props) => {
	// console.log('props', props);
	return (
		<Layout>
			<h1>Today's XKCD Comic</h1>
			<h3>{props.comic.safe_title}</h3>
			<img src={props.comic.img} alt={props.comic.alt} />
			<h3>Previous Ten Comics</h3>
			<ul>
				{props.comicsIdToLink.map((num) => (
					<li key={num}>
						<Link href="/num/[id]" as={`/num/${num}`}>
							<a>{num}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await axios.get('https://xkcd.com/info.0.json');
	const currentComicId = res.data.num;
	const comicsIdToLink = [];
	for (let i = currentComicId - 1; i >= currentComicId - 10; i--) {
		comicsIdToLink.push(i);
	}
	return {
		props: { comic: res.data, currentComicId, comicsIdToLink }
	};
}
