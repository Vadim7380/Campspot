import HomePagePO from './HomePagePO.cy.js';

describe ('Home Page', ()=>{
   
    const page = new HomePagePO();
    const User = Cypress.env ('User');
    const Password = Cypress.env ('Password');

    beforeEach('Page Open', ()=>{

        // cy.visit('');
        // page.signIn().click();
        cy.login(User, Password);
        cy.get('.header-nav-link-email').should('contain', 'prikhodkovn@gmail.com')
        
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

      //why campspot
      page.whyCampspotTitle().should('be.visible');
      page.campingYourWayTitle().should('be.visible');
      page.campingYourWayTitle().should('contain', ' Camping, Your Way');
      page.campingYourWayDescription().should('be.visible');
      page.campingYourWayDescription().should('contain', 'From RV resorts to glamping tents to cozy cabins');
      page.seriousSavingsTitle().should('be.visible');
      page.seriousSavingsTitle().should('contain', ' Serious Savings');
      page.seriousSavingsDescription().should('be.visible');
      page.seriousSavingsDescription().should('contain', 'Campspot is free to use — no membership required.');
      page.weatherProtectionTitle().should('be.visible');
      page.weatherProtectionTitle().should('contain', 'Weather Protection');
      page.weatherProtectionDescription().should('be.visible');
      page.weatherProtectionDescription().should('contain', 'Add a Sensible Weather Guarantee to any eligible trip');

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
      page.campgroundsForWinterTitle().should('be.visible');
      page.campgroundsForWinterTitle().should('contain', 'Popular Campgrounds for Winter Getaways');
      page.spaciousSkiesHiddenCreek().should('be.visible');
      page.spaciousSkiesHiddenCreekLocation().should('be.visible');
      page.spaciousSkiesHiddenCreekImage().should('be.visible');
      page.portalRvResort().should('be.visible');
      page.portalRvResortLocation().should('be.visible');
      page.portalRvResortImage().should('be.visible');

      //to be continued......

  
    })

    it('Sign in menu', ()=>{

      //sign in modal
      page.signIn().click();
      page.signInTitle().should('be.visible');
      page.emailAddressSignInTitle().should('be.visible');
      page.emailAddressSignInValue().should('be.visible');
      page.passwordSignInTitle().should('be.visible');
      page.passwordSignInValue().should('be.visible');
      page.signInButton().should('be.visible');
      page.signingInAgree().should('be.visible');
      page.signingInAgree().should('contain', 'By signing in')
      page.signInTermsAndConditions().should('be.visible');
      page.signInTermsAndConditions().invoke('removeAttr', 'target').click()
      cy.url().should('include', '/about/terms-and-conditions');
      cy.go('back');
      page.signIn().click();
      page.signInPrivacyPolicy().should('be.visible');
      page.signInPrivacyPolicy().invoke('removeAttr', 'target').click()
      cy.url().should('include', '/about/privacy');
      cy.go('back');
      page.signIn().click();
      page.signInFacebookButton().should('be.visible');
      page.signInGoogleButton().should('be.visible');
      page.signInAppleButton().should('be.visible');
      page.dontHaveAnAccount().should('be.visible');
      page.signInSignUp().should('be.visible');
      page.signInSignUp().click();
      page.createAccountTitle().should('be.visible');
      page.createAccountModalCloseIcon().click();

      //sign in
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

    it('Create account modal', ()=>{

      //create account modal
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

    /*it('Create account', ()=>{

      // Generate a unique email using a timestamp
      const timestamp = new Date().getTime();
      const uniqueEmail = `prikhodkovn+${timestamp}@gmail.com`;

      // Visit the registration page
      page.createAccount().click();
      page.emailAddressValue().type(uniqueEmail);
      page.passwordValue().type('PasswordSuper!+1');
      page.createAccountButton().click();
      page.emailLink().should('contain', 'prikhodkovn');

      //welcome to campspot modal
      page.accountModalClose().should('be.visible');
      page.welcomeConfirmation().should('be.visible');
      page.welcomeToCampspotTitle().should('be.visible');
      page.welcomeToCampspotText().should('be.visible');
      page.startExploringButton().should('be.visible');
      page.goToAccountButton().should('be.visible');
      page.accountModalClose().click();
    
    })*/

})