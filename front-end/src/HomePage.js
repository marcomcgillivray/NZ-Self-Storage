import Storage from './storage.jpeg';

const HomePage = () => {
    return (
        <>
            <div>
            <section id="hero">
    <div class="container">
        <div class="flex-group">
            <span class="topper">Storage NZ</span>
            <h1 class="title">NZ Storage Units for Every Need</h1>
            <p class="text">
                Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Nibh tortor id aliquet lectus proin nibh condimentum.
            </p>
            <a href="/" class="button-solid">Learn More</a>
            <a href="/" class="button-transparent">
                <img class="img" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Hero/play.svg" alt="play icon" width="17" height="17"></img>
                Rent a Unit
            </a>
        </div>
    </div>

    <picture class="picture">
        <img loading="lazy" decoding="async" src={Storage} alt="Storage" width="2250" height="1500" aria-hidden="true"></img>
    </picture>
</section>
            </div>
        </>
    )
};

export default HomePage;