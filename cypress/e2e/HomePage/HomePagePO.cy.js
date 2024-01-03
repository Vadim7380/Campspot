class HomePagePO {


    //icons and links on nav bar
    dashboardButton() { return cy.get('.mod-white');}
    rentAnRV() { return cy.get('.header-nav-link.mod-rent-an-rv.mod-home');}
    signIn() { return cy.get('.app-sign-in-nav-link');}
    createAccount() { return cy.get('.mod-create-account');}
    shoppingCart() { return cy.get('.header-cart-icon-image.mod-home');}

    //find your campspot searching
    searchHeading() { return cy.get('.home-hero-search-heading');}
    searchDescription() { return cy.get('.home-hero-search-description');}
    locationLabel() { return cy.get('.home-hero-search-form-location > .home-hero-search-form-label');}
    locationValue() { return cy.get('.location-search-input');}
    datesLabel() { return cy.get('.home-hero-search-form-dates > .home-hero-search-form-label');}
    checkInDate() { return cy.get('.aggredator-field-input.app-aggredator-checkin-date.mod-placeholder');}
    checkOutDate() { return cy.get('.aggredator-field-input.app-aggredator-checkout-date.mod-placeholder');}
    guestsLabel() { return cy.get('.home-hero-search-form-guests > .home-hero-search-form-label');}
    guestsValue() { return cy.get('.guests-picker-input-text');}
    searchButton() { return cy.get('.home-hero-search-form-submit-button');}

    //home why content
    whyCampspotTitle() { return cy.get('.home-why-title');}
    favoriteCampgroundsTitle() { return cy.get('li:nth-of-type(1) > .home-why-list-item-reason');}
    favoriteCampgroundsDescription() { return cy.get('li:nth-of-type(1) > .home-why-list-item-description');}
    instantBookingTitle() { return cy.get(':nth-child(2) > .home-why-list-item-reason');}
    instantBookingDescription() { return cy.get(':nth-child(2) > .home-why-list-item-description');}
    noMembershipFeeTitle()  { return cy.get("section[class='home-why'] li:nth-child(3) h3:nth-child(1)");}
    noMembershipFeeDescription()  { return cy.get("body > app-root:nth-child(2) > div:nth-child(1) > main:nth-child(2) > search:nth-child(2) > main:nth-child(1) > section:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > p:nth-child(2)");}

    //way to stay
    wayToStayTitle() { return cy.get('.home-categories-title');}
    cabinsLodging() { return cy.get(':nth-child(1) > .home-categories-list-item-tile > .home-categories-list-item-content > .home-categories-list-item-name');}
    cabinsLodgingDescription() { return cy.get(':nth-child(1) > .home-categories-list-item-tile > .home-categories-list-item-content > .home-categories-list-item-description');}
    cabinsLodgingImage() { return cy.get('img[src="/assets/img/home-ways-to-stay-lodging-cava-robles-670x447.jpg"]');}
    rvSites() { return cy.get('.app-rv-sites-category-button.home-categories-list-item-tile > .home-categories-list-item-content > .home-categories-list-item-name');}
    rvSitesDescription() { return cy.get('.app-rv-sites-category-button.home-categories-list-item-tile > .home-categories-list-item-content > .home-categories-list-item-description');}
    rvSitesImage() { return cy.get('img[src="/assets/img/home-ways-to-stay-rv-sites-elkamp-670x447.jpg"]');}
    tentSites() { return cy.get('.app-tent-category-button.home-categories-list-item-tile > .home-categories-list-item-content > .home-categories-list-item-name');}
    tentSitesDescription() { return cy.get('.app-tent-category-button.home-categories-list-item-tile > .home-categories-list-item-content > .home-categories-list-item-description');}
    tentSitesImage() { return cy.get('img[src="/assets/img/home-ways-to-stay-tent-sites.jpg"]');}

    //ads content
    adContentLink() { return cy.get('.home-ad-click');}
    adContentImage() { return cy.get('img[src="/assets/img/rvshare-1170x250.jpg"]');}

    //popular campgrounds for fall getaways
    campgroundsForFallTitle() { return cy.get('section:nth-child(5) h2:nth-child(1)');}
    wildFoxCabins() { return cy.get('body > app-root:nth-child(2) > div:nth-child(1) > main:nth-child(2) > search:nth-child(2) > main:nth-child(1) > section:nth-child(7) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1)');}
    wildFoxCabinsLocation() { return cy.get('body > app-root:nth-child(2) > div:nth-child(1) > main:nth-child(2) > search:nth-child(2) > main:nth-child(1) > section:nth-child(7) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > div:nth-child(2) > div:nth-child(2)');}
    wildFoxCabinsImage() { return cy.get('img[src="/assets/img/wild-fox-cabins-campground.jpg"]');}
    yogiBears() { return cy.get('body > app-root:nth-child(2) > div:nth-child(1) > main:nth-child(2) > search:nth-child(2) > main:nth-child(1) > section:nth-child(7) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1)');}
    yogiBearsLocation() { return cy.get('body > app-root:nth-child(2) > div:nth-child(1) > main:nth-child(2) > search:nth-child(2) > main:nth-child(1) > section:nth-child(7) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > div:nth-child(2) > div:nth-child(2)');}
    yogiBearsImage() { return cy.get('img[src="/assets/img/jellystone-gardiner.jpg"]');}


}

export default HomePagePO