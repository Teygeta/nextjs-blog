import Link from "next/link";
import Layout from "../../components/Layout";

export async function getStaticProps() {
    //estrazione dei dati (in questo caso da un json)
    const res = await fetch('https://www.jsonkeeper.com/b/GWLS');
    //da questa estrazione otteniamo una risposta che trasformiamo con .json()
    const data = await res.json();
    //in questo modo stiamo leggendo tutti i dati all'interno del file json.


    return {
        //questi dati json li salviamo dentro una proprietà che ha come oggetto 'account'
        props: {
            user: data
        }
    }
}

export default function Account({user}:any) {
    return (
        <Layout>
            <h2>Account list: </h2>
            <ul>
                {
                    user.map((person: any) => (
                        <li style={{marginBottom: '.7rem', padding: '1rem'}} key={person.id}>
                            {person.name}
                            <button style={{margin: '0 .5rem'}}><Link href={`/admin/${person.id}`}>Open</Link></button>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}