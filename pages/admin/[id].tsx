import {useRouter} from "next/router";
import Layout from "../../components/Layout";

export default function Admin({user}: any) {
    const router = useRouter();
    return (
        <Layout>
            <h1>Account ID: {user[0].id}</h1>
        </Layout>
    )
}


export async function getStaticPaths(context: any) {
    const res = await fetch('https://www.jsonkeeper.com/b/GWLS');
    const data = await res.json();
    const paths = data.map((user: any) => ({
        params: {id: user.id}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}: any) {
    const res = await fetch('https://www.jsonkeeper.com/b/GWLS');
    const data = await res.json();
    const user = data.filter((p: any) => p.id == params.id)

    return {
        props: {
            user
        }
    }
}




