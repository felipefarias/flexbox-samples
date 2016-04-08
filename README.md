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
 │       ├── components/               # Navigation, footer, forms, cards, etc.
 │       ├── helpers/
 │       │   ├── _functions.scss
 │       │   ├── _helpers.scss         # Utility classes
 │       │   ├── _mixins.scss
 │       │   ├── _placeholders.scss
 │       │   └── _typography.scss      # Fonts variables and imports
 │       ├── pages/                    # Templates sass
 │       ├── vendor/
 │       │   └── custom-bootstrap.scss # Bootstrap's variables and classes to override
 │       │
 │       ├── _global.scss              # Base styles for all pages
 │       ├── _variables.scss           # Custom variables
 │       └── style.scss                # Main sass file (should only contain imports)
 ├── .babelrc
 ├── .bootstaprc                       # Bootstrap's config file
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

## Examples
Check out some [examples]()
- Basic project