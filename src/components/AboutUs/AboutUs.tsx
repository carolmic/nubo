const AboutUs = () => {
    return (
        <section id="AboutUs" className="flex items-start justify-center w-screen min-h-150 py-10 bg-white">
            <div className="w-align flex ">
                <div className="w-9/20">
                    <img 
                        src="../src/assets/aboutus_img.png" 
                        alt="Meeting Room" 
                        className="rounded-50 "
                    />
                </div>
                
                <div className="w-11/20 pl-5 pr-10">
                    <h2 className="text-5xl font-bold pt-3 text-(--color-blue-title)">About us</h2>
                    <p className="mt-4 text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. 
                        Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Aenean 
                        dignissim lorem ut orci efficitur, id malesuada elit tristique. Fusce id libero eget metus 
                        varius pretium."
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
