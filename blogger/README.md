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
