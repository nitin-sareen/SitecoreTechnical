// Define the Boxever queue 
var _boxeverq = _boxeverq || [];

// Define the Boxever settings 
var _boxever_settings = {
    client_key: 'psfu6uh05hsr9c34rptlr06dn864cqrx', // Replace with your client key
    target: 'https://api.boxever.com/v1.2', // Replace with your API target endpoint specific to your data center region for e.g., "https://api.boxever.com/v1.2"
    cookie_domain: 'loquacious-alfajores-b278a6.netlify.app', // Replace with the top level cookie domain of the website
    javascriptLibraryVersion: '1.4.9', // Replace with the latest Boxever JavaScript library version
    pointOfSale: 'loquacious-alfajores-b278a6.netlify.app',  // Replace with the same point of sale configured in system settings
    web_flow_target: 'https://d35vb5cccm4xzp.cloudfront.net',  
};
// Import the Boxever library asynchronously 
(function() {
     var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;  
     s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.9.min.js';
     var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

// add function CUSTOM
function sendAddEvent(productType,item_id,productName,productPrice,productid,productCurrency) {
    //place an anonymous function in the Boxever queue
    _boxeverq.push(function() { 
      var addEvent = {
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "ADD",
        language: "EN",
        currency: "USD",
        page: window.location.href,
        pos: "loquacious-alfajores-b278a6.netlify.app", // Replace with the same point of sale configured in system settings
          product: {
            type: productType,
            item_id: item_id,
            name: productName,
            orderedAt: new Date().toISOString(),
            quantity: 1,
            price: productPrice,
            productId: productid,
            currencyCode: productCurrency
          }
      };
      //Add UTM params
      addEvent = Boxever.addUTMParams(addEvent);
      // Invoke event create 
      // (<event msg>, <callback function>, <format>)
      Boxever.eventCreate(addEvent, function(data){}, 'json');
    });
  }

  // CUSTOM LOGIN
  function login(email,fname,lname,gender) {
    //place an anonymous function in the Boxever queue
    _boxeverq.push(function() { 
      var identityEvent = {
          browser_id: Boxever.getID(),
          channel: "WEB",
          type: "IDENTITY",
          language: "EN",
          currency: "USD",
          page: window.location.href,
          pos: "loquacious-alfajores-b278a6.netlify.app", // Replace with the same point of sale configured in system settings
          email : email,
          firstname : fname,
          lastname : lname,
          gender : gender
      };
      //Add UTM params
      identityEvent = Boxever.addUTMParams(identityEvent);
      // Invoke event create 
      // (<event msg>, <callback function>, <format>)
      Boxever.eventCreate(identityEvent, function(data){}, 'json');
    });
  }
// CUSTOM CONFIRM EVENT
  function sendConfirmEvent() {
    //place an anonymous function in the Boxever queue
    _boxeverq.push(function() { 
      var confirmEvent = {
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "CONFIRM",
        language: "EN",
        currency: "USD",
        page: window.location.href,
        pos: "loquacious-alfajores-b278a6.netlify.app", // Replace with the same point of sale configured in system settings
        product: [
          {
            item_id: "ITEM_1"
          }
        ]
      };
      //Add UTM params
      confirmEvent = Boxever.addUTMParams(confirmEvent);
      // Invoke event create 
      // (<event msg>, <callback function>, <format>)
      Boxever.eventCreate(confirmEvent, function(data){}, 'json');
    });
  }

  //CUSTOM CHECKOUT EVENT
  function sendCheckoutEvent() {
    //place an anonymous function in the Boxever queue
    _boxeverq.push(function() { 
      var checkoutEvent = {
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "CHECKOUT",
        language: "EN",
        currency: "USD",
        page: window.location.href,
        pos: "loquacious-alfajores-b278a6.netlify.app", // Replace with the same point of sale configured in system settings
        reference_id: "ORDER_111",
        status: "PURCHASED"
      };
      //Add UTM params
      checkoutEvent = Boxever.addUTMParams(checkoutEvent);
      // Invoke event create 
      // (<event msg>, <callback function>, <format>)
      Boxever.eventCreate(checkoutEvent, function(data){}, 'json');
    });
  }

  function callInteractiveExp() {
  var callFlowsContext = {
    context: {
      "channel": "WEB",   // update before using. e.g. “WEB”
      "language": "en",   // update before using. e.g. “en”
      "currencyCode": "USD",  // update before using. e.g. “EUR”
      "pointOfSale": "loquacious-alfajores-b278a6.netlify.app", // or value from your data layer
      "browserId": Boxever.getID(),
      "clientKey": "psfu6uh05hsr9c34rptlr06dn864cqrx",   
      "friendlyId": "spinburgerweb3"
    }
  };
  
  Boxever.callFlows(callFlowsContext, function(response) {
    // use the response object
    alert(response);
  }, 'json');

}


// Place an anonymous function in the Boxever queue 
_boxeverq.push(function() { 
  var viewEvent = {
      "browser_id": Boxever.getID(),
      "channel": "WEB",
      "type": "VIEW",
      "language": "EN",
      "currency": "USD",
      "page": window.location.href,
      "pos": "loquacious-alfajores-b278a6.netlify.app"  // Replace with the same point of sale configured in system settings
  };
  //Add UTM params
  viewEvent = Boxever.addUTMParams(viewEvent);
  // Invoke event create 
  // (<event msg>, <callback function>, <format>)
  Boxever.eventCreate(viewEvent, function(data){}, 'json');
});