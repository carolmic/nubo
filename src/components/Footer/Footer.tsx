const Footer = () => {
	return (
		<footer className="w-screen bg-(--color-footer-bg) py-10">
			<div className="max-w-8xl mx-auto px-6 flex justify-between items-start text-white">
				<div>
					<h1 className="text-4xl font-bold">nubo.ai</h1>
					<p className="text-sm mt-1">Made by AGES - PUCRS</p>
				</div>
				<div className="flex gap-32">
					<div>
						<h2 className="text-xl font-bold">Location</h2>
						<p className="text-sm mt-1">
							123 Av. Ipiranga Porto
							<br />
							Alegre, RS Sala 518
						</p>
					</div>
					<div>
						<h2 className="text-xl font-bold">Contact</h2>
						<p className="text-sm mt-1">ages@nubo.com.br</p>
						<p className="text-sm">(+55) (xx) xxxx-xxxx</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
