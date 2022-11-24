import Link from "next/link";
import Layout from "../../components/Layout";

export async function getStaticProps() {
    const data = await fetch("https://www.jsonkeeper.com/b/D2MV");
    const dataJson = await data.json();

    return {
        props: {
            post: dataJson,
        },
    };
}

export default function Account({ post }: any) {
    return (
        <Layout>
            <div className="post">
                <h1>POST PAGE</h1>
                {post.map((item: any) => (
                    <div key={item.id} className="post-home-card">
                        <h2>{item.title}</h2>
                        <i style={{ fontSize: "16px" }}>- Autore: {item.author}</i>
                        <p>{item.preview}</p>
                        <Link className={"continue-button"} href={`/post/${item.permalink}`}>
                            Continua a leggere...
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
