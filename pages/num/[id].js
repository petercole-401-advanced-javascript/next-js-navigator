import axios from 'axios';
import Layout from '../../components/myLayout';

const Post = (props) => {
	return (
		<Layout>
			<h1>{props.info.safe_title}</h1>
			<img src={props.info.img} alt={props.info.alt} />
		</Layout>
	);
};

Post.getInitialProps = async function (context) {
	const num = context.query.id;
	const res = await axios.get(`https://xkcd.com/${num}/info.0.json`);
	return { info: res.data };
};

export default Post;
