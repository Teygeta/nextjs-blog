import Layout from '../components/Layout';

export default function About() {
	return (
		<Layout>
			<div className="about">
				<h1 style={{textAlign: 'center'}}>ABOUT PAGE</h1>
				<div className="about-cont">
					<h2>Salvatore Aranzulla</h2>
					<img src={'https://www.aranzulla.it/wp-content/contenuti/2020/02/salvatore_aranzulla_grande.jpg'}/>
					<p>
						Salvatore Aranzulla è il blogger e divulgatore informatico più letto in Italia. Noto per aver
						scoperto delle vulnerabilità nei siti di Google e Microsoft.
						<br/><br/>
						Collabora con riviste di informatica e cura la rubrica tecnologica del quotidiano Il Messaggero.
						Ha
						pubblicato per Mondadori e Mondadori Informatica.
						<br/><br/>
						È il fondatore di Aranzulla.it, uno dei trenta siti più visitati d’Italia, nel quale risponde
						con
						semplicità a migliaia di dubbi di tipo informatico.
						<br/><br/>
						Il sito Internet Aranzulla.it è di proprietà della società:
						<br/><br/>
						Aranzulla Srl
						Piazza della Repubblica 10
						20121 Milano
						P.IVA e CF IT 08200970963
						<br/><br/>
						La foto di Salvatore Aranzulla è stata scattata da Elena Datrino.
						<br/><br/>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered
						alteration in some form, by injected humour, or randomised words which don't look even slightly
						believable.
						<br/><br/>
						If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
						anything embarrassing hidden in the middle of text.
						<br/><br/>
						All the Lorem Ipsum generators on the Internet
						tend to repeat predefined chunks as necessary, making this the first true generator on the
						Internet.
						It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
						structures,
						to generate Lorem Ipsum which looks reasonable.
						<br/><br/>
						The generated Lorem Ipsum is therefore always free
						from repetition, injected humour, or non-characteristic words etc.
					</p>
					<img style={{marginBottom: '5rem'}}
					     src={'https://www.aranzulla.it/wp-content/contenuti/2020/02/salvatore_aranzulla_grande.jpg'}/>
				</div>
			</div>
		</Layout>
	)
}