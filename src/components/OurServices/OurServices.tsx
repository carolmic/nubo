const OurServices = () => {
    return (
        <section id="OurServices" className="flex items-start justify-center w-screen min-h-130 py-10 bg-white">
            <div className="w-align flex ">
                <div className="w-4/10 pr-5">
                    <h2 className="text-5xl font-bold pt-3 text-(--color-blue-title)">Our Services</h2>
                    <p className="mt-4 text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. 
                        Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Aenean 
                        dignissim lorem ut orci efficitur, id malesuada elit tristique. Fusce id libero eget metus 
                        varius pretium."
                    </p>
                </div>

				<div className="w-6/10 flex justify-center">
					<img
						src="../src/assets/services_img.png"
						alt="Business Data Charts"
						className="rounded-50 "
					/>
				</div>
			</div>
		</section>
	);
};

export default OurServices;
