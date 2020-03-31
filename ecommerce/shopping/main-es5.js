(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddProductAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row container-fluid bg-light mx-0 p-3\">\n    <div class=\"col-11 mx-auto p-3\" style=\"background: white;\">\n      <div class=\"text-center\">\n          <h4>Add a Product</h4>\n      </div>   \n      <hr>\n          <div class=\"container mx-auto p-3\">\n              <form action=\"\">\n                  <div class=\"form-group\">\n                      <label for=\"name\">Product Name : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's name\" name=\"name\" [(ngModel)]=\"ITEM.name\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"category\">Category : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's category\" name=\"category\" [(ngModel)]=\"ITEM.category\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"subcategory\">Sub-Category : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's sub-category\" name=\"sub-category\" [(ngModel)]=\"ITEM.subcategory\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"description\">Product's Description : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's description\" name=\"description\" [(ngModel)]=\"ITEM.description\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"price\">Product's Price (in Rs.) : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's price\" name=\"price\" [(ngModel)]=\"ITEM.price\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"img\">Image's URL : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter image's url\" name=\"img\" [(ngModel)]=\"ITEM.img\">\n                    </div>\n                    <div><button class=\"btn btn-warning\" (click)=\"onsubmit()\">Submit details</button></div>\n              </form>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<!--<app-sign-up></app-sign-up>-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditProductEditProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row container-fluid bg-light mx-0 p-3\">\n    <div class=\"col-11 mx-auto p-3\" style=\"background: white;\">\n      <div class=\"text-center\">\n          <h4>Edit Product's Details</h4>\n      </div>   \n      <hr>\n          <div class=\"container mx-auto p-3\">\n              <form action=\"\">\n                  <div class=\"form-group\">\n                      <label for=\"name\">Product Name : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's name\" name=\"name\" [(ngModel)]=\"DATA.name\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"category\">Category : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's category\" name=\"category\" [(ngModel)]=\"DATA.category\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"subcategory\">Sub-Category : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's sub-category\" name=\"sub-category\" [(ngModel)]=\"DATA.subcategory\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"description\">Product's Description : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's description\" name=\"description\" [(ngModel)]=\"DATA.description\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"price\">Product's Price (in Rs.) : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter product's price\" name=\"price\" [(ngModel)]=\"DATA.price\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"img\">Image's URL : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter image's url\" name=\"img\" [(ngModel)]=\"DATA.img\">\n                    </div>\n                    <div><button class=\"btn btn-warning\" (click)=\"onsubmit()\">Save details</button></div>\n              </form>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditProfileEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mx-0 p-3 bg-light\">\n    <div class=\"col-11 mx-auto p-2\" style=\"background: white;box-shadow: 1px 1px 1px 1px rgba(0, 0, 0,0.5);\">\n      <div class=\"container p-4\">\n          <div>\n  \n           <h4>Edit Your Profile</h4>\n          </div>\n          <hr>\n          <div class=\"container\" style=\"width: 90%;\">\n          <form action=\"/action_page.php\">\n            <div class=\"form-group\">\n              <label for=\"username\">Username : </label>\n              <input type=\"text\" class=\"form-control\" id=\"username\"  name=\"username\" disabled [(ngModel)]=\"user.username\">\n            </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email : </label>\n                <input type=\"email\" class=\"form-control\" id=\"email\"  name=\"email\" [(ngModel)]=\"user.email\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"phone\">Contact : </label>\n                <input type=\"text\" class=\"form-control\" id=\"phone\"  name=\"phone\" [(ngModel)]=\"user.phone\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"gender\">Gender : </label>\n                <select class=\"form-control\" id=\"gender\" name=\"gender\" [(ngModel)]=\"user.gender\">\n                       <option>Male</option>\n                       <option>Female</option>\n                       <option>Other</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\" [(ngModel)]=\"pswd\">\n                <small class=\"text-danger\" *ngIf=\"!isPassword()\">Password is incorrect</small>\n              </div>\n              <button type=\"submit\" class=\"btn btn-warning\" (click)=\"submit()\">Submit</button>\n            </form>\n            </div>\n     </div>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand bg-light navbar-dark text-center justify-content-between my-3 p-2\">\n  \n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Men')\" >MEN </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Women')\" >WOMEN </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Kids')\" >KIDS </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Electronics')\" >ELECTRONICS </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Books')\" >BOOKS </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Sports')\" >SPORTS </button></div>\n\n  <div class=\"d-flex\">\n   \n   <div> <input class=\"form-control mr-2 ml-auto\" type=\"text\"  placeholder=\"Search for product\" size=\"60\" name=\"SEARCH\" [(ngModel)]=\"SEARCH\"></div>\n    <div class=\"ml-2\"> <button class=\"btn btn-warning\" (click)=\"search()\"><i class=\"fas fa-search\"></i>  Search </button></div>\n \n   </div>\n </nav>\n\n <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n   <ol class=\"carousel-indicators\">\n     <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n     <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n     <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n     <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n     <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n   </ol>\n   <div class=\"carousel-inner\">\n     <div class=\"carousel-item active\">\n       <img class=\"d-block w-100\" src=\"/assets/shop8.jpg\" alt=\"First slide\" style=\"height: 400px\">\n     </div>\n     <div class=\"carousel-item\">\n       <img class=\"d-block w-100\" src=\"/assets/shop9.jpg\" alt=\"Second slide\" style=\"height: 400px\">\n     </div>\n     <div class=\"carousel-item\">\n       <img class=\"d-block w-100\" src=\"/assets/shop6.jpg\" alt=\"Third slide\" style=\"height: 400px\">\n     </div>\n     <div class=\"carousel-item\">\n       <img class=\"d-block w-100\" src=\"/assets/shop5.jpg\" alt=\"Foruth slide\" style=\"height: 400px\">\n     </div>\n     <div class=\"carousel-item\">\n       <img class=\"d-block w-100\" src=\"/assets/shop7.jpg\" alt=\"Fivth slide\" style=\"height: 400px\">\n     </div>\n   </div>\n   <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n     <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n     <span class=\"sr-only\">Previous</span>\n   </a>\n   <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n     <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n     <span class=\"sr-only\">Next</span>\n   </a>\n </div>\n\n <div class=\"container-fluid bg-light row my-3 d-flex p-3 justify-content-between mx-0\" style=\"padding : 4px ;\">\n  <div class=\"col.3 ml-3 p-3\"  style=\"background: white ; box-shadow:2px 2px 4px 4px rgba(0, 0, 0, 0.5) ;width: 23%\">\n   <div class=\"ml-2 mr-2\">\n     <h4>Fashion</h4>\n     <a href=\"http://localhost:4200/product-list?cat=Men\"><img src=\"/assets/hom4.jpg\" style=\" width:100% ; height: 70%\"></a>\n     <div class=\"my-3\">\n       <a href=\"http://localhost:4200/product-list?cat=Men\"><h6>See more</h6></a>\n     </div>\n   </div>\n </div>\n <div class=\"col.3 p-3\"  style=\"background: white ;  box-shadow:2px 2px 4px 4px rgba(0, 0, 0, 0.5) ;  width: 23%\">\n   <div class=\"ml-2 mr-2\">\n     <h4>Books</h4>\n       <a href=\"http://localhost:4200/product-list?cat=Books\"><img src=\"/assets/hom2.jpg\" style=\" width:100% ; height: 70%\"></a>\n       <div class=\"my-3\">\n         <a href=\"http://localhost:4200/product-list?cat=Books\"><h6>See more</h6></a>\n       </div>\n     </div>\n </div>\n <div class=\"col.3 p-3\" style=\"background: white ; box-shadow:2px 2px 4px 4px rgba(0, 0, 0, 0.5) ;width: 23%\">\n   <div class=\"ml-2 mr-2\">\n      <h4>Electronics</h4>\n      <a href=\"http://localhost:4200/product-list?cat=Electronics\"><img src=\"/assets/hom1.jpg\" style=\" width:100% ; height: 70%\"></a>\n      <div class=\"my-3\">\n       <a href=\"http://localhost:4200/product-list?cat=Electronics\"><h6>See more</h6></a>\n     </div>\n     </div>\n </div>\n <div class=\"col.3 mr-3 p-3\"  style=\"background: white ; box-shadow:2px 2px 4px 4px rgba(0, 0, 0, 0.5) ; width: 23%\">\n   <div class=\"ml-2 mr-2\">\n     <h4>Sports</h4>\n       <a href=\"http://localhost:4200/product-list?cat=Sports\"><img src=\"/assets/hom3.jpg\" style=\" width:100% ; height: 70%\"></a>\n       <div class=\"my-3\">\n         <a href=\"http://localhost:4200/product-list?cat=Sports\"><h6>See more</h6></a>\n       </div>\n   </div>\n</div>\n </div>\n\n <div class=\"container-fluid bg-warning\" style=\"padding: 4rem 2rem 2rem 2rem\">\n   <div class=\"display-4 text-center\" style=\"color: crimson\">\n     Our Valuable Brands\n   </div>\n   <div class=\"container-fluid mx-0 my-4\">\n  \n     <div class=\"row mt-5 mb-4 ml-1\">\n     <div class=\"col-2\">\n      <img src=\"/assets/Logos/7.png\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n    </div>\n    <div class=\"col-2\">\n     <img src=\"/assets/Logos/11.png\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n   </div>\n   <div class=\"col-2\">\n     <img src=\"/assets/Logos/9.png\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n   </div>\n   <div class=\"col-2\">\n     <img src=\"/assets/Logos/12.png\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n   </div>\n   <div class=\"col-2\">\n     <img src=\"/assets/Logos/8.jpg\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n   </div>\n   <div class=\"col-2\">\n     <img src=\"/assets/Logos/10.jpg\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n   </div>\n </div>\n \n <div class=\"row ml-1\">\n   <div class=\"col-2\">\n    <img src=\"/assets/Logos/2.png\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n  </div>\n  <div class=\"col-2\">\n   <img src=\"/assets/Logos/5.png\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n </div>\n <div class=\"col-2\">\n   <img src=\"/assets/Logos/6.jpg\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n </div>\n <div class=\"col-2\">\n   <img src=\"/assets/Logos/4.png\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n </div>\n <div class=\"col-2\">\n   <img src=\"/assets/Logos/1.png\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n </div>\n <div class=\"col-2\">\n   <img src=\"/assets/Logos/3.jpg\" class=\"rounded-circle\" style=\"width: 75% ; height:85%\">\n </div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid bg-light\" style=\"padding:10rem ;\">\n    <div class=\"col-sm-4 mx-auto\" style=\"padding: 1rem;background: rgba(0, 0, 0, 0.8); border: 2px solid black ; box-shadow:6px 6px 6px rgba(0, 0, 0, 0.5)\">\n      <div class=\"text-warning \">\n         <div class=\"text-center\"><h2>LOGIN</h2></div>\n         <div class=\"container\">\n           <div>\n           <form action=\"/home\" #userForm=\"ngForm\" (ngSubmit)=\"check_login(name.value,pass.value)\" novalidate>\n             <div class=\"form-group\">\n               <label  for=\"usr\">Username:</label>\n               <input type=\"text\" required #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" id=\"usr\" name=\"username\" placeholder=\"Enter Username\" ngModel>\n              <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\" >Name is required</small>\n             </div>\n             <div class=\"form-group\">\n               <label for=\"pwd\">Password:</label>\n               <input type=\"password\" required #pass=\"ngModel\" [class.is-invalid]=\"pass.invalid && pass.touched\" class=\"form-control\" id=\"pwd\" name=\"password\" placeholder=\"Enter Password\" ngModel>\n              <small class=\"text-danger\" [class.d-none]=\"pass.valid || pass.untouched\" >Password is required</small>\n             </div>\n             <br>\n             <button [disabled]=\"userForm.form.invalid\" class=\"btn btn-warning text-dark\" type=\"submit\" style=\"width: 100% ;\">Submit</button>\n           </form>\n           <br>\n           </div>\n          <div class=\"text-center\">Don't have an account ?</div>\n          <br>\n          <form action=\"/sign-up\" (ngSubmit)=\"Sign()\">\n          <div><button class=\"btn btn-warning text-dark \" type=\"submit\" style=\"width: 100% ; \">Create an Account</button></div>\n           </form>\n         </div>\n      </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\">\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n<nav class=\"navbar navbar-expand-sm bg-dark\">\n    <a class=\"navbar-brand text-warning\" href=\"#\">THE SHOPPING CART</a>\n    <div style=\"display: flex ; justify-content: space-between ; margin-left: auto\">\n      <div *ngIf=\"isUserLoggedIn1()\"><a class=\"nav-link text-warning\" href=\"/profile\">Welcome {{user1}} </a></div>\n      <div *ngIf=\"isUserLoggedIn()\"><a class=\"nav-link text-warning\" href=\"/home\">Home  <i class=\"fas fa-home\"></i></a></div>\n      <div *ngIf=\"isUserLoggedIn()\"><a class=\"nav-link text-warning\" href=\"/user-cart\">Cart  <i class=\"fas fa-shopping-cart\"></i></a></div>\n      <div *ngIf=\"isUserLoggedIn()\"><a class=\"nav-link text-warning\" href=\"/login\">LogOut  <i class=\"fa fa-arrow-right\" ></i></a></div>\n      <div *ngIf=\"!isUserLoggedIn()\"><a class=\"nav-link text-warning\" href=\"/login\">LogIn  <i class=\"fa fa-user\" aria-hidden=\"true\"></i></a></div>\n      <div *ngIf=\"!isUserLoggedIn()\"><a class=\"nav-link text-warning\" href=\"/sign-up\">SignUp  <i class=\"fa fa-users\" aria-hidden=\"true\"></i></a></div>\n    </div>\n  </nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductDetailsProductDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\">\n\n<nav class=\"navbar navbar-expand bg-light navbar-dark text-center justify-content-between my-2\">\n \n  <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Men')\" >MEN </button></div>\n  <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Women')\" >WOMEN </button></div>\n  <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Kids')\" >KIDS </button></div>\n  <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Electronics')\" >ELECTRONICS </button></div>\n  <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Books')\" >BOOKS </button></div>\n  <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Sports')\" >SPORTS </button></div>\n\n  <div>\n   <form class=\"form-inline mx-auto \" action=\"/action_page.php\">\n     <input class=\"form-control mr-2 ml-auto\" type=\"text\" placeholder=\"Search for product\" size=\"60\">\n     <button class=\"btn btn-warning\" type=\"submit\"><i class=\"fas fa-search\"></i>  Search </button>\n   </form>\n   </div>\n </nav>\n\n<div class=\"container-fluid row mx-0 p-2  bg-light\" style=\"background: lightgray ;\"> \n <div class=\"ml-5 col-5 p-2 \" style=\" box-shadow:1px 5px 5px 5px rgba(0, 0, 0, 0.5) ; background: white ; margin-bottom: 2rem \">\n   <div class=\"container p-4 text-center\">\n      <img src=\"{{data2.img}}\" style=\"width: 70% ; height:50%\">\n   </div>\n </div>\n <div class=\"ml-4 col-6 p-2\" style=\"  box-shadow:1px 5px 5px 5px rgba(0, 0, 0, 0.5) ; background: white ; margin-bottom: 2rem\">\n   <div class=\"container p-2 ml-4 mr-4 \">\n      <div>\n          <h2 class=\"font-weight-bolder\">{{data2.brand}}</h2>\n      </div>\n      <div class=\"font-weight-lighter \" style=\"color: dimgray\">\n        <h5>{{data2.name}}</h5>\n      </div>\n      <hr style=\"align-self: center; width: 90%;margin-left: 0; color: black\">\n      <div class=\"font-weight-lighter \" style=\"color: dimgray\">\n          <h5>{{data2.description}}</h5>\n      </div>\n      <div>\n         <h4 class=\"font-weight-bolder\">₹ {{data2.price}}</h4>\n      </div>\n      <hr style=\"align-self: center; width: 90%;margin-left: 0; color: black\">\n      <div class=\"font-weight-lighter\">\n           <h4>Select Size:</h4> \n           <br>\n           <ul class=\"ml-0 font-weight-bold \" style=\"list-style: none ; display: flex ;width: 90% ; color: dimgray ; justify-content: space-between\">\n               <li><button class=\"bg-dark text-warning rounded\"  name=\"size\"> S</button></li>\n               <li><button class=\"bg-dark text-warning rounded\"  name=\"size\"> M</button></li>\n               <li><button class=\"bg-dark text-warning rounded\"  name=\"size\"> L</button></li>\n               <li><button class=\"bg-dark text-warning rounded\"  name=\"size\"> XL</button></li>\n               <li><button class=\"bg-dark text-warning rounded\"  name=\"size\"> XXL</button></li>\n               <li><button class=\"bg-dark text-warning rounded\"  name=\"size\"> XXL</button></li>\n           </ul>\n      </div>\n      <br>\n      <div>\n          <button class=\"btn btn-warning \" style=\"width: 25%\" (click)=\"add(data2.key)\">ADD TO CART</button>\n      </div>\n    </div>\n </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n<nav class=\"navbar navbar-expand bg-light navbar-dark text-center justify-content-between my-3\">\n  \n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Men')\" >MEN </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Women')\" >WOMEN </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Kids')\" >KIDS </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Electronics')\" >ELECTRONICS </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Books')\" >BOOKS </button></div>\n    <div class=\"mx-auto font-weight-bold\"><button class=\"btn btn-light\" (click)=\"goTo('Sports')\" >SPORTS </button></div>\n    \n  <div>\n   <form class=\"form-inline mx-auto \" action=\"/action_page.php\">\n     <input class=\"form-control mr-2 ml-auto\" type=\"text\" placeholder=\"Search for product\" size=\"60\" name=\"SEARCH\" [(ngModel)]=\"SEARCH\">\n     <button class=\"btn btn-warning\" type=\"submit\" (click)=\"search()\"><i class=\"fas fa-search\"></i>  Search </button>\n   </form>\n   </div>\n  </nav>\n  \n  <div class=\"container-fluid row bg-light mx-0 p-2 d-flex \" style=\" justify-content: space-between\">\n      <div class=\"col-2 \">\n           <div class=\"container text-dark\" style=\"background: white ; box-shadow:1px 1px 2px 2px rgba(0, 0, 0, 0.4) ;\">\n              <form>\n              <div class=\"text-center text-dark p-4 font-weight-bold\" >\n                   <h4>Add Filters</h4>\n               </div>\n              <div class=\"text-center\"><button class=\"btn btn-warning \" (click)=\"clear()\">Clear Filters</button></div>\n               <hr>\n                <div class=\"font-weight-lighter text-dark\" >\n                  <h5>Prices</h5>\n                </div>\n                  <div *ngFor=\"let p of prices\">\n                    <div class=\"custom-control custom-radio\">\n                      <input type=\"radio\" class=\"custom-control-input\" id=\"{{p.first}}\" name=\"price1\" (change)=\"submitfilter2($event,p.first,p.last)\" >\n                      <label class=\"custom-control-label\" for=\"{{p.first}}\">{{p.first}} - {{p.last}}</label>\n                    </div>    \n                  </div>\n                  <hr>\n                  <div class=\"font-weight-lighter\" >\n                    <h5>Sub-Categories</h5>\n                  </div>\n                     <div *ngFor=\"let s of sub\">\n                      <div class=\"custom-control custom-radio\">\n                        <input type=\"radio\" class=\"custom-control-input\" id=\"{{s}}\" name=\"sub1\" (change)=\"submitfilter1($event,s)\">\n                        <label class=\"custom-control-label\" for=\"{{s}}\">{{s}}</label>\n                      </div> \n                    </div>\n                    <hr>\n                   </form>         \n           </div>\n     </div>\n    <div class=\"col-10\"> \n     <div style=\"background: white ; box-shadow:1px 1px 2px 2px rgba(0, 0, 0, 0.4) ;\">\n     <div class=\"row ml-2\" >\n      <div *ngFor=\"let item of Data \">\n         <div class=\"column\" style=\"width: 19rem\">\n          <div class=\"card m-3 \" style=\" box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.3) ;\" >\n          <img class=\"card-img-top\" src=\"{{item.img}}\" alt=\"Card image\" style=\"width:100% ; height: 300px;\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">{{item.name}}</h4>\n            <h4 class=\"card-text\">₹  {{item.price}}</h4>\n            <p class=\"card-text\" style=\"white-space: nowrap; overflow: hidden; text-overflow: ellipsis \">{{item.description}}</p>\n            <div class=\"d-flex justify-content-between\">\n            <div><button class=\"btn btn-warning\" (click)=\"add(item.key)\" >Add to cart</button></div>\n            <div class=\"ml-1\"><button class=\"btn btn-info\" (click)=\"goToDetails(item.key)\">More Details</button></div>\n            </div>\n            <br>\n            <button class=\"btn btn-success\" *ngIf=\"isAdmin()\" (click)=\"editproduct(item.key)\">Edit Product</button>\n          </div>\n        </div>\n        </div>\n  \n        </div>\n     </div>\n     </div>\n     </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid bg-light mx-0 p-2 row\">\n    <div class=\"col-11 mx-auto p-2\" style=\"background: white;  box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.3);\">\n     <div class=\"container p-5\">\n      <div class=\"d-flex justify-content-between\">\n       <div>\n       <h4>Hello {{user1}}</h4>\n       <h6 class=\"font-weight-lighter\">My Profile</h6>\n      </div>\n      <div class=\"d-flex \">\n      <div><button class=\"btn btn-warning mr-2\" (click)=\"edituser()\">Edit Profile</button></div>\n      <div><button class=\"btn btn-warning mr-2\" *ngIf=\"isadmin()\" (click)=\"addproduct()\">Add Product</button></div>\n     </div>\n     </div>\n      <hr> \n      <div class=\"container m-3\">\n          <h5 class=\"font-weight-light\">Your Orders </h5>\n          <div class=\"my-4\" *ngFor=\"let data of Myorder\">\n            <div class=\"container m-1 row\" style=\"border: 1px solid darkgray;  box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.3);\">\n             <div class=\"col-4 p-3\">\n              <img  src=\"{{data.item.img}}\" style=\"width: 85% ; height:85%;\">\n             </div>\n             <div class=\"col-8 p-3\">\n               <div class=\"row\">\n                   <div class=\"col-6\"><h6>Order Id : {{data.orderId}}</h6></div>\n                   <div class=\"col-6\"><h6>Order Date : {{data.date1}}</h6></div>\n               </div>  \n               <hr>\n               <h5>{{data.item.name}}</h5>\n               <h6>{{data.item.subcategory}}</h6>\n               <h6>{{data.item.description}}</h6>\n               <h6>Quantity : {{data.quantity}}</h6>\n               <h6>Total Price : ₹  {{data.item.price * data.quantity}}</h6>\n               <div class=\"d-flex\">\n                       <div><h6>Status : </h6></div>\n                       <div class=\"ml-2\"><h6 class=\"text-success\"> DELIVERED</h6></div>\n                   </div> \n             </div>\n            </div>\n          </div>\n      </div>\n      </div>\n   </div>\n   </div>\n   ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid bg-light\" style=\"padding:10rem ; \">\n    <div class=\"col-sm-4 mx-auto\" style=\"padding: 1rem;background: rgba(0, 0, 0, 0.8); box-shadow:6px 6px 6px rgba(0, 0, 0, 0.5);  border: 2px solid black\">\n      <div class=\"text-warning \">\n         <div class=\"text-center\"><h2>SIGN-UP</h2></div>\n         <div class=\"container\">\n           <div>\n           <form #userForm=\"ngForm\" (ngSubmit)=\"Onsubmit()\" novalidate>\n            <div class=\"form-group\"  >\n                <label  for=\"usr\">Email:</label>\n                <input type=\"email\" required #mail=\"ngModel\" [class.is-invalid]=\"mail.invalid && mail.touched\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter Email\" pattern=\"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$\" [(ngModel)]=\"post1.email\">\n                <small class=\"text-danger\" [class.d-none]=\"mail.valid || mail.untouched\" >Enter an valid E-mail</small>\n              </div>\n             <div class=\"form-group\">\n               <label  for=\"usr\">Username:</label>\n               <input type=\"text\" required #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" id=\"usr\" name=\"username\" placeholder=\"Enter Username\" [(ngModel)]=\"post1.username\">\n               <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\" >Name is required</small>\n              </div>\n             <div class=\"form-group\">\n               <label for=\"pwd\">Password:</label>\n               <input type=\"password\" required #pass=\"ngModel\" [class.is-invalid]=\"pass.invalid && pass.touched\" class=\"form-control\" id=\"pwd\" name=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"post1.password\">\n               <small class=\"text-danger\" [class.d-none]=\"pass.valid || pass.untouched\" >Password is required</small>\n              </div>\n             <div>\n                <input type=\"checkbox\" required name=\"accept\" ><a href=\"#\">  Accept Terms & Conditions</a>\n                <br><small class=\"text-danger\" >Please accept Terms & Conditions</small>\n              </div>\n            <br>\n            <div><button [disabled]=\"userForm.form.invalid\" class=\"btn btn-warning text-dark\" type=\"submit\" style=\"width: 100% ;\">Submit</button></div>\n\n           </form>\n           <br>\n           </div>\n         </div>\n      </div>\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-cart/user-cart.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cart/user-cart.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserCartUserCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"Return_Empty()\" class=\"container-fluid row bg-light mx-0 p-4\">\n    <div class=\"col-7 ml-5\" style=\"background: white\">\n     <div class=\"p-3 ml-1\">\n         <h4>My Cart</h4>\n      <div class=\"column\">    \n        <div *ngFor=\" let c of cart \">\n          <hr>\n          <div class=\"card\" style=\"border: 0px solid black ;height: 250px;\">\n            <div class=\"card-body\">\n               <div class=\"row\">\n                <div class=\"col-4\">\n                   <a routerLink=\"/product-details\" (click)=\"details(c.item.key)\"><img src=\"{{c.item.img}}\" style=\"width: 200px ; height: 200px ;box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.3) ;\"></a>\n                </div>\n                <div class=\"col-8\">\n                    <h4>{{c.item.name}}</h4>\n                    <h6>{{c.item.subcategory}}</h6>\n                    <h6>{{c.item.description}}</h6>\n                    <br>\n                    <h4>₹  {{c.item.price * c.quantity}}</h4>\n                    <br>\n                    <div class=\"d-flex\" style=\"width: 100%\">\n                        <h6><button class=\"font-weight-bold\" (click)=\"decrease(c.item.key)\">-</button></h6>\n                        <h6 class=\"ml-3 mr-3\">{{c.quantity}}</h6>\n                        <h6><button class=\"font-weight-bold\" (click)=\"increase(c.item.key)\">+</button></h6>\n                        <h6 class=\"ml-5\"><button class=\"btn btn-danger ml-5\" (click)=\"remove(c.item.key)\">REMOVE</button></h6>\n                    </div>\n                   </div>\n               </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n      <button class=\"btn btn-warning font-weight-bold\" style=\"width:30%\" (click)=\"place()\">PLACE ORDER</button>\n      <button class=\"btn btn-danger font-weight-bold ml-4\" style=\"width:30%\" (click)=\"clear()\">CLEAR CART</button>\n     </div> \n   </div>\n    <div class=\"col-4 ml-4\" style=\"background : white\">\n       <div class=\"p-3 ml-1\">\n           <h4>Bill details </h4>\n           <hr>\n           <div *ngFor=\"let c of cart\">\n            <br>   \n           <div class=\"d-flex justify-content-between\">\n            <div><h6>{{c.item.name}} {{c.item.subcategory}}</h6></div>\n            <div><h6>₹ {{c.item.price * c.quantity}}</h6></div>\n           </div>\n           <h6 class=\"font-weight-lighter\">Quantity : {{c.quantity}}</h6>\n           </div>\n           <br>\n           <hr>\n           <div class=\"d-flex justify-content-between\">\n            <div><h6>Delivery</h6></div>\n            <div><h6 class=\"text-success\">FREE</h6></div>\n           </div>\n           <hr>\n           <div class=\"d-flex justify-content-between\">\n            <div><h6 class=\"font-weight-bold\">Total Bill</h6></div>\n            <div><h6 class=\"font-weight-bold\">₹ {{cash}}</h6></div>\n           </div>\n           <div *ngFor=\"let c of cart\">\n              \n           </div>\n       </div>\n    </div>\n   </div>\n   \n   <div *ngIf=\"!Return_Empty()\" class=\"row container-fluid p-4 mx-0 bg-light\">\n     <div class=\"col-8 mx-auto\" style=\"background: white ; \">\n      <img src=\"/assets/Cart-empty.gif\" style=\"width: 100% ; height: 60%;\">\n      <div class=\"mt-4 p-2\"><h4 class=\"text-center\">Empty Cart ?</h4>\n      <h6 class=\"text-center font-weight-lighter\">Add products now...</h6></div>\n      <div class=\"col-5 mx-auto\"><button class=\"btn btn-warning ml-5\" style=\"width: 75%\" (click)=\"toHome()\">HOME</button></div>\n     </div>\n   </div>\n   ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-product/add-product.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/add-product/add-product.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddProductAddProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/add-product/add-product.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/add-product/add-product.component.ts ***!
    \******************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _get_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../get-user.service */
    "./src/app/get-user.service.ts");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../get-data.service */
    "./src/app/get-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../items */
    "./src/app/items.ts");

    let AddProductComponent = class AddProductComponent {
      constructor(service1, service, router, route) {
        this.service1 = service1;
        this.service = service;
        this.router = router;
        this.route = route;
        this.role = "user";
        this.ITEM = new _items__WEBPACK_IMPORTED_MODULE_5__["item"]("", "", "", 0, "", "", 0, 0);
      }

      ngOnInit() {
        let user = sessionStorage.getItem('username');
        console.log(user);
        this.service1.get1_user(user).subscribe(role1 => {
          this.USER = role1;
          this.role = this.USER.role;
          console.log(this.role);

          if (this.role != "Admin") {
            alert("You are NOT a authorised admin ");
          }
        });
      }

      onsubmit() {
        this.service.post_item(this.ITEM).subscribe(data => {
          console.log(data);
        });
      }

    };

    AddProductComponent.ctorParameters = () => [{
      type: _get_user_service__WEBPACK_IMPORTED_MODULE_2__["GetUserService"]
    }, {
      type: _get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }];

    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-product.component.css */
      "./src/app/add-product/add-product.component.css")).default]
    })], AddProductComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.route */
    "./src/app/app.route.ts");

    const routes = [];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_3__["MAIN_ROUTES"])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'shopping';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/add-product/add-product.component.ts");
    /* harmony import */


    var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-product/edit-product.component */
    "./src/app/edit-product/edit-product.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./product-details/product-details.component */
    "./src/app/product-details/product-details.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user-cart/user-cart.component */
    "./src/app/user-cart/user-cart.component.ts");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./get-data.service */
    "./src/app/get-data.service.ts");
    /* harmony import */


    var _get_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./get-user.service */
    "./src/app/get-user.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _basic_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./basic-auth.service */
    "./src/app/basic-auth.service.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__["AddProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_8__["EditProductComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__["ProductListComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"], _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_17__["UserCartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [_get_data_service__WEBPACK_IMPORTED_MODULE_18__["GetDataService"], _get_user_service__WEBPACK_IMPORTED_MODULE_19__["GetUserService"], _auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _basic_auth_service__WEBPACK_IMPORTED_MODULE_21__["BasicAuthService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.route.ts":
  /*!******************************!*\
    !*** ./src/app/app.route.ts ***!
    \******************************/

  /*! exports provided: MAIN_ROUTES */

  /***/
  function srcAppAppRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function () {
      return MAIN_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-cart/user-cart.component */
    "./src/app/user-cart/user-cart.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-details/product-details.component */
    "./src/app/product-details/product-details.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/add-product/add-product.component.ts");
    /* harmony import */


    var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./edit-product/edit-product.component */
    "./src/app/edit-product/edit-product.component.ts");

    const MAIN_ROUTES = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }, {
      path: 'cart',
      component: _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_2__["UserCartComponent"]
    }, {
      path: 'product-list',
      component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]
    }, {
      path: 'product-details',
      component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
    }, {
      path: 'sign-up',
      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]
    }, {
      path: 'user-cart',
      component: _user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_2__["UserCartComponent"]
    }, {
      path: 'edit-profile',
      component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"]
    }, {
      path: 'add-product',
      component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"]
    }, {
      path: 'edit-product',
      component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_10__["EditProductComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: User, AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    class User {
      constructor(status) {
        this.status = status;
      }

    }

    let AuthService = class AuthService {
      constructor(http) {
        this.http = http;
      }

      authenticate(username, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          Authorization: 'Basic ' + btoa(username + ':' + password)
        });
        return this.http.get('http://localhost:8081/get1', {
          headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(userData => {
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          sessionStorage.setItem('username', username);
          return userData;
        }));
      }

      isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
      }

    };

    AuthService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/basic-auth.service.ts":
  /*!***************************************!*\
    !*** ./src/app/basic-auth.service.ts ***!
    \***************************************/

  /*! exports provided: BasicAuthService */

  /***/
  function srcAppBasicAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicAuthService", function () {
      return BasicAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BasicAuthService = class BasicAuthService {
      constructor() {}

      intercept(req, next) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
          req = req.clone({
            setHeaders: {
              Authorization: sessionStorage.getItem('basicauth')
            }
          });
        }

        return next.handle(req);
      }

    };
    BasicAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BasicAuthService);
    /***/
  },

  /***/
  "./src/app/edit-product/edit-product.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/edit-product/edit-product.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditProductEditProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/edit-product/edit-product.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-product/edit-product.component.ts ***!
    \********************************************************/

  /*! exports provided: EditProductComponent */

  /***/
  function srcAppEditProductEditProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductComponent", function () {
      return EditProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _get_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../get-user.service */
    "./src/app/get-user.service.ts");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../get-data.service */
    "./src/app/get-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let EditProductComponent = class EditProductComponent {
      constructor(service1, service, route, router) {
        this.service1 = service1;
        this.service = service;
        this.route = route;
        this.router = router;
        this.role = "user";
      }

      ngOnInit() {
        let user = sessionStorage.getItem('username');
        this.service1.get1_user(user).subscribe(role1 => {
          this.USER = role1;
          this.role = this.USER.role;

          if (this.role != "Admin") {
            alert("You are NOT a authorised admin ");
          }
        });
        this.route.queryParams.subscribe(param => {
          this.ID = param.id;
        });
        this.service.get_id(this.ID).subscribe(data => {
          this.DATA = data;
        });
      }

      onsubmit() {
        this.service.put_item(this.DATA).subscribe(data => {
          console.log(data);
        });
      }

    };

    EditProductComponent.ctorParameters = () => [{
      type: _get_user_service__WEBPACK_IMPORTED_MODULE_2__["GetUserService"]
    }, {
      type: _get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-product.component.css */
      "./src/app/edit-product/edit-product.component.css")).default]
    })], EditProductComponent);
    /***/
  },

  /***/
  "./src/app/edit-profile/edit-profile.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditProfileEditProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/edit-profile/edit-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _get_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../get-user.service */
    "./src/app/get-user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let EditProfileComponent = class EditProfileComponent {
      constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.ready = false;
      }

      ngOnInit() {
        let user = sessionStorage.getItem('username');
        this.USER = user;
        this.service.get1_user(this.USER).subscribe(data => {
          this.user = data;
        });
      }

      isPassword() {
        if (this.pswd == this.user.password) return true;else return false;
      }

      submit() {
        this.ready = this.isPassword();

        if (this.isPassword()) {
          this.service.put_user(this.user).subscribe(data => {});
          alert("Your details has been changed... ");
        }
      }

    };

    EditProfileComponent.ctorParameters = () => [{
      type: _get_user_service__WEBPACK_IMPORTED_MODULE_2__["GetUserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.component.css */
      "./src/app/edit-profile/edit-profile.component.css")).default]
    })], EditProfileComponent);
    /***/
  },

  /***/
  "./src/app/get-data.service.ts":
  /*!*************************************!*\
    !*** ./src/app/get-data.service.ts ***!
    \*************************************/

  /*! exports provided: GetDataService */

  /***/
  function srcAppGetDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetDataService", function () {
      return GetDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let GetDataService = class GetDataService {
      constructor(http) {
        this.http = http;
      }

      get1() {
        return this.http.get('http://localhost:8081/getPro');
      }

      get_search(SEARCH) {
        return this.http.get('http://localhost:8081/search/' + SEARCH);
      }

      getsub(cate, sub) {
        return this.http.get('http://localhost:8081/' + cate + '/' + sub);
      }

      getprice(cate, first, last) {
        return this.http.get('http://localhost:8081/' + cate + '/' + first + '/' + last);
      }

      get_sub_price(cate, sub, first, last) {
        return this.http.get('http://localhost:8081/sub/' + cate + '/' + sub + '/' + first + '/' + last);
      }

      get_cat(cate) {
        return this.http.get('http://localhost:8081/get_cate/' + cate);
      }

      addto(id) {
        //return this.http.get('http://localhost:8081/cart/addtocart/'+id);
        return this.http.get('http://localhost:8081/cart/addtocart?key=' + id);
      }

      getcart() {
        return this.http.get('http://localhost:8081/cart/showcart');
      }

      increase1(id) {
        return this.http.get('http://localhost:8081/cart/addtocart/' + id);
      }

      decrease1(id) {
        return this.http.get('http://localhost:8081/cart/removefromcart/' + id);
      }

      remove1(id) {
        return this.http.get('http://localhost:8081/cart/remove1fromcart/' + id);
      }

      checkout() {
        return this.http.get('http://localhost:8081/cart/checkout');
      }

      clear() {
        return this.http.get('http://localhost:8081/cart/clearcart');
      }

      gethistory() {
        return this.http.get('http://localhost:8081/cart/history');
      }

      post_item(item) {
        return this.http.post('http://localhost:8081/post1', item, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        });
      }

      get_id(pkey) {
        return this.http.get('http://localhost:8081/get2?key=' + pkey);
      }

      put_item(item) {
        return this.http.post('http://localhost:8081/put1', item, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        });
      }

    };

    GetDataService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    GetDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GetDataService);
    /***/
  },

  /***/
  "./src/app/get-user.service.ts":
  /*!*************************************!*\
    !*** ./src/app/get-user.service.ts ***!
    \*************************************/

  /*! exports provided: GetUserService */

  /***/
  function srcAppGetUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserService", function () {
      return GetUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let GetUserService = class GetUserService {
      constructor(http) {
        this.http = http;
        this.data = [];
      }

      get1_user(username) {
        return this.http.get('http://localhost:8081/get_user/' + username);
      }

      post1_user(posts) {
        return this.http.post('http://localhost:8081/post1', posts, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        });
      }

      put_user(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          Authorization: sessionStorage.getItem('basicauth')
        });
        return this.http.put('http://localhost:8081/put_user', user, {
          headers
        });
      }

    };

    GetUserService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    GetUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GetUserService);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/home-page/home-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-text{\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.card-title{\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.carousel-inner img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRleHR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../get-data.service */
    "./src/app/get-data.service.ts");

    let HomePageComponent = class HomePageComponent {
      constructor(router, service) {
        this.router = router;
        this.service = service;
        this.SEARCH = "";
      }

      ngOnInit() {
        this.service.get1().subscribe(data1 => {
          this.Data = data1;
        });
      }

      goTo(cate) {
        this.router.navigate(['/product-list'], {
          queryParams: {
            cat: cate
          }
        });
      }

      search() {
        this.router.navigate(['/product-list'], {
          queryParams: {
            d: this.SEARCH
          }
        });
      }

    };

    HomePageComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]
    }];

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.css */
      "./src/app/home-page/home-page.component.css")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/items.ts":
  /*!**************************!*\
    !*** ./src/app/items.ts ***!
    \**************************/

  /*! exports provided: item */

  /***/
  function srcAppItemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "item", function () {
      return item;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class item {
      constructor(name, category, subcategory, price, img, description, active, product_id) {
        this.name = name;
        this.category = category;
        this.subcategory = subcategory;
        this.price = price;
        this.img = img;
        this.description = description;
        this.active = active;
        this.product_id = product_id;
      }

    }
    /***/

  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _get_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../get-user.service */
    "./src/app/get-user.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    let LoginComponent = class LoginComponent {
      constructor(router, service, auth) {
        this.router = router;
        this.service = service;
        this.auth = auth;
        this.invalidLogin = false;
      }

      ngOnInit() {
        sessionStorage.removeItem('username');
      }

      check_login(username, password) {
        this.auth.authenticate(username, password).subscribe(data => {
          this.router.navigate(['/home']);
          this.invalidLogin = false;
        }, error => {
          this.invalidLogin = true;
        });
      }

      Sign() {
        location.assign('/sign-up');
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _get_user_service__WEBPACK_IMPORTED_MODULE_3__["GetUserService"]
    }, {
      type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    let NavBarComponent = class NavBarComponent {
      constructor(auth) {
        this.auth = auth;
      }

      ngOnInit() {}

      isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        return !(user === null);
      }

      isUserLoggedIn1() {
        let user = sessionStorage.getItem('username');
        this.user1 = user;
        return !(user === null);
      }

    };

    NavBarComponent.ctorParameters = () => [{
      type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/nav-bar/nav-bar.component.css")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/posts.ts":
  /*!**************************!*\
    !*** ./src/app/posts.ts ***!
    \**************************/

  /*! exports provided: posts */

  /***/
  function srcAppPostsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "posts", function () {
      return posts;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class posts {
      constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
      }

    }
    /***/

  },

  /***/
  "./src/app/product-details/product-details.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/product-details/product-details.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductDetailsProductDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/product-details/product-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/product-details/product-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../get-data.service */
    "./src/app/get-data.service.ts");

    let ProductDetailsComponent = class ProductDetailsComponent {
      constructor(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
      }

      ngOnInit() {
        this.route.queryParams.subscribe(param => {
          this.ID = param.key; //changes of id to key
        });
        console.log(this.ID);
        this.service.get_id(this.ID).subscribe(data => {
          this.data2 = data;
        });
      }

      goTo(cate) {
        this.router.navigate(['/product-list'], {
          queryParams: {
            cat: cate
          }
        });
      }

      add(id) {
        console.log(id);
        this.service.addto(id).subscribe(data => {
          console.log(data);
          location.assign('/user-cart');
        });
      }

    };

    ProductDetailsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-details.component.css */
      "./src/app/product-details/product-details.component.css")).default]
    })], ProductDetailsComponent);
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/product-list/product-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductListProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-list/product-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../get-data.service */
    "./src/app/get-data.service.ts");
    /* harmony import */


    var _get_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../get-user.service */
    "./src/app/get-user.service.ts");

    let ProductListComponent = class ProductListComponent {
      constructor(route, service, router, service1) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.service1 = service1;
        this.cate = "undo";
        this.price1 = {
          "first": "",
          "last": ""
        };
        this.sub_cate1 = "";
        this.prices = [{
          "first": 0,
          "last": 1999
        }, {
          "first": 2000,
          "last": 4999
        }, {
          "first": 5000,
          "last": 8999
        }, {
          "first": 9000,
          "last": 12999
        }, {
          "first": 13000,
          "last": 15999
        }, {
          "first": 16000,
          "last": 19999
        }, {
          "first": 20000,
          "last": 1000000
        }];
        this.sub = ['T-shirt', 'Jeans', 'Shoes', 'Phone', 'Headphones', 'Novel', 'Biography', 'Cricket', 'Football', 'Badminton'];
        this.SEARCH = "";
      }

      ngOnInit() {
        this.route.queryParams.subscribe(param => {
          this.cate = param.cat;

          if (!(typeof param.d === 'undefined')) {
            this.SEARCH = param.d;
            console.log(this.SEARCH);
            this.search();
          } else {
            this.service.get_cat(this.cate).subscribe(data1 => {
              this.Data = data1;
            });
          }
        });
        let user = sessionStorage.getItem('username');
        this.service1.get1_user(user).subscribe(data => {
          this.ROLE = data;
          console.log(this.ROLE);
        });
      }

      goToDetails(id1) {
        this.router.navigate(['/product-details'], {
          queryParams: {
            key: id1
          }
        });
      }

      get_cate1(category) {
        this.service.get_cat(category).subscribe(data2 => {
          this.Data = data2;
        });
      }

      goTo(cate) {
        this.router.navigate(['/product-list'], {
          queryParams: {
            cat: cate
          }
        });
      }

      clear() {
        this.get_cate1(this.cate);
        this.ngOnInit();
      }

      submitfilter1($event, s) {
        this.sub_cate1 = s;

        if (this.price1.first == "") {
          this.service.getsub(this.cate, this.sub_cate1).subscribe(data => {
            this.Data = data;
          });
        } else {
          this.service.get_sub_price(this.cate, this.sub_cate1, this.price1.first, this.price1.last).subscribe(data => {
            this.Data = data;
          });
        }
      }

      submitfilter2($event, first, last) {
        this.price1.first = first;
        this.price1.last = last;

        if (this.sub_cate1 == "") {
          this.service.getprice(this.cate, this.price1.first, this.price1.last).subscribe(data => {
            this.Data = data;
          });
        } else {
          this.service.get_sub_price(this.cate, this.sub_cate1, this.price1.first, this.price1.last).subscribe(data => {
            this.Data = data;
          });
        }
      }

      add(id) {
        this.service.addto(id).subscribe(data => {
          location.assign('/user-cart');
        });
      }

      editproduct(id) {
        this.router.navigate(['/edit-product'], {
          queryParams: {
            id: id
          }
        });
      }

      isAdmin() {
        if (this.ROLE == "Admin") return true;else return false;
      }

      search() {
        this.service.get_search(this.SEARCH).subscribe(data2 => {
          this.Data = data2;
        });
      }

    };

    ProductListComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _get_user_service__WEBPACK_IMPORTED_MODULE_4__["GetUserService"]
    }];

    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.css */
      "./src/app/product-list/product-list.component.css")).default]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../get-data.service */
    "./src/app/get-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ProfileComponent = class ProfileComponent {
      constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
      }

      ngOnInit() {
        this.service.gethistory().subscribe(data => {
          this.Myorder = data;
          this.Role = this.Myorder[1].user.role;
          console.log(this.Role);
          sessionStorage.setItem('Role', this.Role);
        });
        let user = sessionStorage.getItem('username');
        this.user1 = user;
      }

      edituser() {
        this.router.navigate(['/edit-profile'], {
          queryParams: {
            user: this.user1
          }
        });
      }

      isadmin() {
        if (this.Role == "Admin") return true;else return false;
      }

      addproduct() {
        location.assign('/add-product');
      }

      editproduct() {
        location.assign('/edit-product');
      }

    };

    ProfileComponent.ctorParameters = () => [{
      type: _get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../posts */
    "./src/app/posts.ts");
    /* harmony import */


    var _get_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../get-user.service */
    "./src/app/get-user.service.ts");

    let SignUpComponent = class SignUpComponent {
      constructor(service) {
        this.service = service;
        this.post1 = new _posts__WEBPACK_IMPORTED_MODULE_2__["posts"]("", "", "");
      }

      ngOnInit() {}

      Onsubmit() {
        this.service.post1_user(this.post1).subscribe(data => console.log("SUCCESS", data), error => console.log("ERROR", error));
        location.assign('/login');
      }

    };

    SignUpComponent.ctorParameters = () => [{
      type: _get_user_service__WEBPACK_IMPORTED_MODULE_3__["GetUserService"]
    }];

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/sign-up/sign-up.component.css")).default]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/user-cart/user-cart.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-cart/user-cart.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserCartUserCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY2FydC91c2VyLWNhcnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-cart/user-cart.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-cart/user-cart.component.ts ***!
    \**************************************************/

  /*! exports provided: UserCartComponent */

  /***/
  function srcAppUserCartUserCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCartComponent", function () {
      return UserCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../get-data.service */
    "./src/app/get-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let UserCartComponent = class UserCartComponent {
      constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.cash = 0;
        this.empty = false;
      }

      ngOnInit() {
        this.service.getcart().subscribe(data => {
          this.cart = data;
          if (this.cart.length == 0) this.empty = false;else {
            this.empty = true;

            for (let i = 0; i < this.cart.length; i++) {
              this.cash = this.cash + this.cart[i].item.price * this.cart[i].quantity;
            }
          }
        });
      }

      increase(id) {
        this.service.increase1(id).subscribe(data => {
          this.ngOnInit();
        });
      }

      decrease(id) {
        this.service.decrease1(id).subscribe(data => {});
        this.ngOnInit();
      }

      remove(id) {
        this.service.remove1(id).subscribe(data => {
          this.ngOnInit();
        });
      }

      place() {
        this.service.checkout().subscribe(data => {
          this.ngOnInit();
        });
      }

      clear() {
        this.service.clear().subscribe(data => {
          this.ngOnInit();
        });
      }

      Return_Empty() {
        return this.empty;
      }

      toHome() {
        location.assign('/home');
      }

      details(id) {
        this.router.navigate(['/product-details'], {
          queryParams: {
            id: id
          }
        });
      }

    };

    UserCartComponent.ctorParameters = () => [{
      type: _get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    UserCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-cart/user-cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-cart.component.css */
      "./src/app/user-cart/user-cart.component.css")).default]
    })], UserCartComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Bhupinder\Desktop\angular-project\shopping\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map