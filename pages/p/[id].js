import axios from 'router';
import Layout from '../../components/myLayout';

const Post = (props) => {
	return (
		<Layout>
			<p>{props.show.name}</p>
		</Layout>
	);
};

Post.getInitialProps = async function (context) {
	const { id } = context.query;
	const res = axios.get(`https://api.tvmaze.com/search/shows?q=batman/${id}`);
	const show = await res.json();

	return { show };
};

export default Post;
