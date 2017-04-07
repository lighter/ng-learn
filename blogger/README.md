# Install bootstrap

**step 1**
```
$ npm install ng2-bootstrap bootstrap@next --save
```

**step 2**

Create an empty file `_variables.scss` in `src/`

In styles.scss add the following:

**step 3**

```
@import 'variables'; 
@import '../node_modules/bootstrap/scss/bootstrap';
```

# Modify exist prject use scss

```
$ ng set defaults.styleExt scss
```

# fake backend http

* [http://jasonwatmore.com/post/2016/11/24/angular-2-mockbackend-example-for-backendless-development](http://jasonwatmore.com/post/2016/11/24/angular-2-mockbackend-example-for-backendless-development)
* [http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial#alert-service-ts](http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial#alert-service-ts)
* [https://keyholesoftware.com/2017/01/09/setting-up-angular-2-mockbackend/](https://keyholesoftware.com/2017/01/09/setting-up-angular-2-mockbackend/)
* [https://www.sitepoint.com/angular-2-mockbackend/](https://www.sitepoint.com/angular-2-mockbackend/)
