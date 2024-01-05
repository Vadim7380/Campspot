import HomePagePO from './HomePagePO.cy.js';

describe ('Home Page', ()=>{
   
    const page = new HomePagePO();
    const User = Cypress.env ('User');
    const Password = Cypress.env ('Password');

    beforeEach('Page Open', ()=>{

        cy.visit('');
        // page.signIn().click();
        // cy.login(User, Password);
        // cy.get('.header-nav-link-email').should('contain', 'prikhodkovn@gmail.com')
        
    })

    it ('list view should contain correct element', ()=>{

      //icons and links on nav bar
      page.dashboardButton().should('be.visible');
      page.rentAnRV().should('be.visible');
      page.signIn().should('be.visible');
      page.createAccount().should('be.visible');
      page.shoppingCart().should('be.visible');

      //find your campspot searching
      page.searchHeading().should('be.visible'); 
      page.searchDescription().should('be.visible');
      page.searchDescription().should('contain', 'Discover and book the best campgrounds');
      page.locationLabel().should('be.visible');
      page.locationValue().should('be.visible');
      page.datesLabel().should('be.visible');
      page.checkInDate().should('be.visible');
      page.checkOutDate().should('be.visible');
      page.guestsLabel().should('be.visible');
      page.guestsValue().should('be.visible');
      page.searchButton().should('be.visible');

      //home why content
      page.whyCampspotTitle().should('be.visible');
      page.favoriteCampgroundsTitle().should('be.visible');
      page.favoriteCampgroundsTitle().should('contain', ' Your favorite campgrounds');
      page.favoriteCampgroundsDescription().should('be.visible');
      page.favoriteCampgroundsDescription().should('contain', 'Campspot lists top-rated camping destinations available for online booking in North America.');
      page.instantBookingTitle().should('be.visible');
      page.instantBookingDescription().should('be.visible');
      page.instantBookingDescription().should('contain', 'No need to call the campground or wait for your booking to be accepted.');
      page.noMembershipFeeTitle().should('be.visible');
      page.noMembershipFeeDescription().should('be.visible');
      page.noMembershipFeeDescription().should('contain', 'Book all listed campgrounds on our app instantly');

      //way to stay
      page.wayToStayTitle().should('be.visible');
      page.cabinsLodging().should('be.visible');
      page.cabinsLodgingDescription().should('be.visible');
      page.cabinsLodgingDescription().should('contain', 'Find comfort and convenience with a cabin or lodge'); 
      page.cabinsLodgingImage().should('be.visible')

      //alternative option to validate image
      //.and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        // expect($img[0].naturalWidth).to.be.eq(670)
        // expect($img[0].naturalHeight).to.be.eq(447)
      //})
      page.rvSites().should('be.visible');
      page.rvSitesDescription().should('be.visible');
      page.rvSitesDescription().should('contain', 'Camp in style from the comfort of your vehicle'); 
      page.rvSitesImage().should('be.visible') 
      page.tentSites().should('be.visible');
      page.tentSitesDescription().should('be.visible');
      page.tentSitesDescription().should('contain', 'Pitch your tent and relax next to the fire'); 
      page.tentSitesImage().should('be.visible');
      
      //ads content
      page.adContentLink().should('have.attr', 'href').and('include', 'https://clicks-partners.rvshare.com');
      page.adContentImage().should('be.visible');

      //popular campgrounds for fall getaways
      page.campgroundsForFallTitle().should('be.visible');
      page.wildFoxCabins().should('be.visible');
      page.wildFoxCabinsLocation().should('be.visible');
      page.wildFoxCabinsImage().should('be.visible');
      page.yogiBears().should('be.visible');
      page.yogiBearsLocation().should('be.visible');
      page.yogiBearsImage().should('be.visible');

      //to be continued......

  
    })

    it('Sign in menu', ()=>{

      page.signIn().click();



      cy.login(User, Password);
      page.emailLink().should('contain', 'prikhodkovn@gmail.com');
      page.emailLink().click();
      page.accountDetails().should('be.visible');
      page.paymentMethods().should('be.visible');
      page.reservations().should('be.visible');
      page.saved().should('be.visible');
      page.signOut().should('be.visible');
      page.signOut().click();


    })

    it('Create account', ()=>{

      page.createAccount().click();
      page.createAccountTitle().should('be.visible');
      page.emailAddressTitle().should('be.visible');
      page.emailAddressValue().should('be.visible');
      page.passwordTitle().should('be.visible');
      page.passwordValue().should('be.visible');
      page.createAccountButton().should('be.visible');
      page.createAccountAgree().should('be.visible');
      page.createAccountAgree().should('contain', 'By creating an account')
      page.termsAndConditions().should('be.visible');
      page.termsAndConditions().invoke('removeAttr', 'target').click()
      cy.url().should('include', '/about/terms-and-conditions');
      cy.go('back');
      page.createAccount().click();
      page.privacyPolicy().should('be.visible');
      page.privacyPolicy().invoke('removeAttr', 'target').click()
      cy.url().should('include', '/about/privacy');
      cy.go('back');
      page.createAccount().click();
      page.facebookButton().should('be.visible');
      page.googleButton().should('be.visible');
      page.appleButton().should('be.visible');
      page.alreadyHaveAnAccount().should('be.visible');
      page.createAccountSignIn().should('be.visible');
      page.createAccountSignIn().click();
      page.signInTitle().should('be.visible');
      page.signInModalCloseIcon().click();

    })

})