import type {FC} from 'react';
import {useRouter} from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import {GetStaticPaths, GetStaticProps} from 'next';
import {ParsedUrlQuery} from 'querystring';

interface PostPageProps {
	post: Post
	related: Array<Post>
}

type Post = {
	id: string
	permalink: string
	title: string
	preview: string
	article: string
	author: string
	related?: Array<string>
}

export const PostPage: FC<PostPageProps> = ({post, related}) => {
	// const router = useRouter();

	return (
		<Layout>
			<div className="post-card">
				<h1>{post.title}</h1>
				<p>{post.article}</p>
			</div>

			<div className="more-post">
				<h2 style={{textAlign: 'center'}}>Leggi altri post:</h2>
				<div className="more-post-cont">
					{related.map(item => (
						<div key={item.id} className="more-card">
							<h4>{item.title}</h4>
							<p className="line-clamp">{item.article}</p>
							<Link className={'continue-button'} href={`/post/${item.permalink}`}>
								Continua a leggere...
							</Link>
							<i style={{fontSize: '16px', float: 'right'}}>
								Autore: {item.author}
							</i>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

interface QueryParams extends ParsedUrlQuery {
	id: string
}

export const getStaticProps: GetStaticProps<PostPageProps, QueryParams> = async ({params}) => {
	const res = await fetch('https://www.jsonkeeper.com/b/1EMU');
	const posts = await res.json() as Array<Post>;

	// const posts = dataJson.filter((p: any) => p.permalink == context.params.id);
	const post = posts.find(p => p.permalink == params?.id ?? '1')
		?? {id: '1', article: '1', permalink: '2', author: '1', related: ['1'], preview: '1', title: '1'} as Post;


	const related = posts.filter(p => {
		if (typeof post.related == 'undefined') return false;

		return post.related.findIndex((r: any) => {
			return r == p.id;
		}) >= 0;
	});

	// const related = posts.filter(p => {
	// 	return post.related.findIndex((r: any) => {
	// 		return r == p.id;
	// 	}) >= 0;
	// });


	return {
		props: {
			post,
			related,
			// post: dataJson[i], //[{post1}]
			// [{post1}, {post2}, {post3}]
		},
	};
}

export const getStaticPaths: GetStaticPaths<QueryParams> = async () => {
	const res = await fetch('https://www.jsonkeeper.com/b/1EMU');
	const json = await res.json() as Array<Post>;
	const paths = json.map(post => ({
		params: {id: post.permalink},
	}));

	return {
		paths,
		fallback: false,
	};
}

export default PostPage
