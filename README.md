# Frontend Boilerplate

A simple boilerplate to start the frontend of projects using webpack and Bootstrap 4.

## Setting up
```bash
# Install dependencies
npm install

# Run
npm start
```

## Project Structure
```
 ├── assets/
 │   ├── fonts/
 │   ├── img/
 │   ├── js/
 │   │   └── index.js
 │   └── sass/
 │       ├── components/                    # Navigation, footer, forms, cards, etc.
 │       ├── helpers/
 │       │   ├── _functions.scss
 │       │   ├── _helpers.scss              # Utility classes
 │       │   ├── _mixins.scss
 │       │   ├── _placeholders.scss
 │       │   └── _typography.scss           # Fonts variables and imports
 │       ├── pages/                         # Templates' sass
 │       ├── vendor/
 │       │   └── custom-bootstrap.scss      # Bootstrap's variables and classes to override
 │       │
 │       ├── _global.scss                   # Base styles for all pages
 │       ├── _variables.scss                # Custom variables
 │       └── style.scss                     # Main sass file (should only contain imports)
 ├── .babelrc
 ├── .bootstaprc                            # Bootstrap's config file
 ├── package.json
 └── webpack.config.js
```

## Bootstrap Customization

Make sure you customize your `.bootstraprc` file and enable only the features you'll use in your project. Do not delete any config options.

```yaml
---
# Major version of Bootstrap: 3 or 4
bootstrapVersion: 4

# If Bootstrap version 4 is used - turn on/off flexbox model
useFlexbox: false

# Webpack loaders, order matters
styleLoaders:
  - style
  - css
  - postcss
  - sass

...

### Bootstrap scripts
scripts:
  alert: true
  button: true
  carousel: false
  collapse: false
```

You'll need to set the path to your `style.scss` and `custom-bootstrap.scss` files:

```yaml
bootstrapCustomizations: ./example/assets/sass/vendor/custom-bootstrap.scss

# Import your custom styles here. You have access to all the bootstrap variables. If you require
# your sass files separately, you will not have access to the bootstrap variables, mixins, clases, etc.
# Usually this endpoint-file contains list of @imports of your application styles.

appStyles: ./example/assets/sass/style.scss
```

## Webpack Configuration

In the `webpack.config.js` file, set the **entry** and the **output**:

```
  entry: [
    'bootstrap-loader',
    './example/assets/js/index.js',
  ],
  output: {
    path: path.resolve('./example/assets/'),
    publicPath: "/example/assets/",
    filename: "bundle.js"
  },
```

If you wish to extract the styles to a separate bundle, you must set `extractStyles` in the `bootstrap-loader`.

```
  entry: [
    'bootstrap-loader/extractStyles',
    './example/assets/js/index.js',
  ],
```

## Example
Check out a sample project in [example/](https://github.com/vintasoftware/frontend-boilerplate/tree/bootstrap-example/example). This project was based on [Bootstrap's Album Example](http://v4-alpha.getbootstrap.com/examples/album/).
- Access it at: `http://localhost:8000/`
