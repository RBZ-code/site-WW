class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        HTML header
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer -->
    <footer class="mainFooter">
        <div class="footerBlock">
            <section class="corporateContainer">
                <figure class="footerLogo">
                    <img src="/img/footer/dark-logo.svg" alt="Logo EventGrids">
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, libero. Nobis animi laudantium eligendi
                    ex asperiores, inventore nam accusamus rerum veniam commodi quam itaque nostrum ut. Accusantium quos
                    veritatis aspernatur.</p>
                <p>Follow Us On:</p>
                <div class="socialIcons">
                    <figure><a href="#"><img src="/img/icons/facebook_icon.svg" alt="Facebook icon"></a></figure>
                    <figure><a href="#"><img src="/img/icons/twitter_icon.svg" alt="Twitter icon"></a></figure>
                    <figure><a href="#"><img src="/img/icons/linkedin_icon.svg" alt="LinkedIn Icon"></a></figure>
                    <figure><a href="#"><img src="/img/icons/instagram_icon.svg" alt="Instagram"></a></figure>
                </div>
            </section>
            <section class="linksContainer">
                <div class="quickContainer">
                    <h3>Quick Links</h3>
                    <nav>
                        <ul>
                            <li><a href="#">Get Directions</a></li>
                            <li><a href="#">Sponsor</a></li>
                            <li><a href="#">What We Offer</a></li>
                            <li><a href="#">Recent Events</a></li>
                            <li><a href="#">Insights</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="exploreContainer">
                    <h3>Explore More</h3>
                    <nav>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Pricing</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section class="subscribeContainer">
                <h3>Subscribe to our Newsletter</h3>
                <form action="">
                    <label for="">
                        <input type="text" name="" id="" placeholder="Name">
                    </label>
                    <label for="">
                        <input type="email" name="" id="" placeholder="Email Address">
                    </label>
                    <button>Subscribe</button>
                </form>
            </section>
        </div>
    </footer>
        `
    }
}

class Banner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="banner">
        <div class="bannerImage">
            <div class="bannerText">
                <p class="hurry">Hurry up!</p>
                <h2>Europe's leading conference - Book your seat now!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga harum excepturi totam quam eum commodi quaerat beatae eius temporibus.</p>
                <a href="#" class="button ticketButton">Get Tickets <img src="/img/icons/ticket_icon.svg" alt="Icone ticket"></a>
            </div>
        </div>
    </section>
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('main-banner', Banner);
