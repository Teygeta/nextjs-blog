import Head from "next/head";

export default function HeadPage({title, description}: any) {
    return(
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
            </Head>
    )
}