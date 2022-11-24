import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Admin({post, dataJson}: any) {
    const router = useRouter();

    return (
        <Layout>
            <div className="post-card">
                <h1>{post[0].title}</h1>
                <p>{post[0].article}</p>
            </div>

            <div className="more-post">
                <h2 style={{textAlign: 'center'}}>Leggi altri post:</h2>
                <div className="more-post-cont">
                    {dataJson.filter(function (d: any) {
                        return d.id != post[0].id;
                    }).map((item: any) => (

                        <div key={item.id} className="more-card">
                            <h4>{item.title}</h4>
                            <p>{item.preview}</p>
                            <Link className={'continue-button'} href={`/post/${item.permalink}`}>Continua a leggere...</Link>
                            <i style={{fontSize: '16px', float: 'right'}}>Autore: {item.author}</i>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(context: any) {

    const res = await fetch('https://www.jsonkeeper.com/b/D2MV');
    const dataJson = await res.json();
    const post = dataJson.filter((p: any) => p.permalink == context.params.id)

    return {
        props: {
            post,
            dataJson
        }
    }
}

export async function getStaticPaths(context: any) {
    const res = await fetch('https://www.jsonkeeper.com/b/D2MV');
    const dataJson = await res.json();
    const paths = dataJson.map((post: any) => ({
        params: {id: post.permalink}
    }))

    return {
        paths,
        fallback: false
    }
}






