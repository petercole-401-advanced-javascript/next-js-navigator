import Layout from '../components/myLayout';
import Link from 'next/link';
import axios from 'axios';

const PostLink = (props) => (
	<li>
		<Link href="/p/[id]" as={`/p/${props.id}`}>
			<a>{props.id}</a>
		</Link>
	</li>
);

const Index = (props) => {
	return (
		<Layout>
			<h1>Home Page</h1>
			<ul>
				{props.shows.map((show) => {
					<PostLink key={show.id} id={show.id} name={show.name} />;
				})}
			</ul>
		</Layout>
	);
};

Index.getInitialProps = async function () {
	const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
	// console.log('response', res);
	return {
		shows: res.data.map((item) => item.show)
	};
};

export default Index;
