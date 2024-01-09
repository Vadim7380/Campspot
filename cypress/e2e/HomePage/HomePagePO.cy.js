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

    //why campspot
    whyCampspotTitle() { return cy.get('.home-why-title');}
    campingYourWayTitle() { return cy.get('li:nth-of-type(1) > .home-why-list-item-reason');}
    campingYourWayDescription() { return cy.get('li:nth-of-type(1) > .home-why-list-item-description');}
    seriousSavingsTitle() { return cy.get(':nth-child(2) > .home-why-list-item-reason');}
    seriousSavingsDescription() { return cy.get(':nth-child(2) > .home-why-list-item-description');}
    weatherProtectionTitle()  { return cy.get("section[class='home-why'] li:nth-child(3) h3:nth-child(1)");}
    weatherProtectionDescription()  { return cy.get("body > app-root:nth-child(2) > div:nth-child(1) > main:nth-child(2) > home:nth-child(2) > main:nth-child(1) > home-winter:nth-child(1) > section:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > p:nth-child(2)");}

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
    campgroundsForWinterTitle() { return cy.get(':nth-child(7) > .home-most-popular-title');}
    spaciousSkiesHiddenCreek() { return cy.get('body > app-root:nth-child(2) > div:nth-child(1) > main:nth-child(2) > home:nth-child(2) > main:nth-child(1) > home-winter:nth-child(1) > section:nth-child(7) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1)');}
    spaciousSkiesHiddenCreekLocation() { return cy.get('body > app-root:nth-child(2) > div:nth-child(1) > main:nth-child(2) > home:nth-child(2) > main:nth-child(1) > home-winter:nth-child(1) > section:nth-child(7) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > div:nth-child(2) > div:nth-child(2)');}
    spaciousSkiesHiddenCreekImage() { return cy.get('img[src="/assets/img/home/winter/spacious-skies-hidden-creek.jpg"]');}
    portalRvResort() { return cy.get(':nth-child(7) > .home-most-popular-list > :nth-child(2) > .home-most-popular-list-item-tile > .home-most-popular-list-item-content > .home-most-popular-list-item-name');}
    portalRvResortLocation() { return cy.get(':nth-child(7) > .home-most-popular-list > :nth-child(2) > .home-most-popular-list-item-tile > .home-most-popular-list-item-content > .home-most-popular-list-item-location');}
    portalRvResortImage() { return cy.get('img[src="/assets/img/home/winter/portal-rv-resort-campground.jpg"]');}

    //sign in menu

    signInTitle() { return cy.get('.sign-in-title');};
    emailLink()   { return cy.get('.header-nav-link-email.app-global-header-nav-link-email');}
    signOut()  { return cy.get('.app-sign-out-nav-link');}
    accountDetails()  { return cy.get('.header-nav-account-dropdown-item.app-account-details-nav-link');}
    paymentMethods()  { return cy.get('.header-nav-account-dropdown-item.app-payment-methods-nav-link');}
    reservations()   { return cy.get('.header-nav-account-dropdown-item.app-payment-methods-nav-link');}
    saved()  { return cy.get('.header-nav-account-dropdown-item.app-saved-nav-link');}
    signInModalCloseIcon() { return cy.get('.account-modal-close-icon');};

    emailAddressSignInTitle()  { return cy.get("label[for='sign-in-email']");};
    emailAddressSignInValue()   { return cy.get('#sign-in-email');};
    passwordSignInTitle()   { return cy.get("label[for='sign-in-password']");};
    passwordSignInValue()   { return cy.get('#sign-in-password');};
    signInButton()  { return cy.get('.sign-in-submit > div');};
    signingInAgree() { return cy.get('.sign-in-agree');};
    signInTermsAndConditions()  { return cy.get('.sign-in-agree > [href="/about/terms-and-conditions"]');};
    signInPrivacyPolicy()  { return cy.get('.sign-in-agree > [href="/about/privacy"]');};
    signInFacebookButton()  { return cy.get('.sign-in-social > :nth-child(1)');};
    signInGoogleButton()  { return cy.get('.sign-in-social > :nth-child(2)');};
    signInAppleButton()  { return cy.get('.sign-in-social > :nth-child(3)');};
    dontHaveAnAccount()  { return cy.get('.sign-in-sign-up');};
    signInSignUp()  { return cy.get('.sign-in-sign-up-link.app-create-account-link');};





    //create account
    createAccountTitle()  { return cy.get('.create-account-title');}
    emailAddressTitle()  { return cy.get("label[for='create-account-email']");}
    emailAddressValue()  { return cy.get('#create-account-email');}
    passwordTitle()  { return cy.get("label[for='sign-up-password']");}
    passwordValue()  { return cy.get('#sign-up-password');}
    createAccountButton() { return cy.get("button[type='submit'] div");}
    createAccountAgree()  { return cy.get('.create-account-agree');};
    termsAndConditions()  { return cy.get('.create-account-agree > [href="/about/terms-and-conditions"]');};
    privacyPolicy()  { return cy.get('.create-account-agree > [href="/about/privacy"]');};
    facebookButton() { return cy.get('.create-account-social > :nth-child(1)');};
    googleButton() { return cy.get('.create-account-social > :nth-child(2)');};
    appleButton() { return cy.get('.create-account-social > :nth-child(3)');};
    alreadyHaveAnAccount() { return cy.get('.create-account-sign-in');};
    createAccountSignIn() { return cy.get('.create-account-sign-in-link.app-sign-in-link');};
    createAccountModalCloseIcon()  { return cy.get('.account-modal-close-icon');};
    

    //welcome to campspot modal
    accountModalClose() { return cy.get('.account-modal-close-icon');};
    welcomeConfirmation() { return cy.get('.welcome-confirmation > img');};
    welcomeToCampspotTitle() { return cy.get('.welcome-title');};
    welcomeToCampspotText() { return cy.get('.welcome-text');};
    startExploringButton() { return cy.get('.app-get-started-btn');};
    goToAccountButton() { return cy.get('.app-my-account-link');};

    


}

export default HomePagePO