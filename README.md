# tcomb-checkbox-switch

tcomb-checkbox-switch is an addon package that transforms the standard checkbox in tcomb-form into a switch-style input.

## Installation

First, install the package in your project using the following command:

    npm install tcomb-checkbox-switch

or if you use yarn:

    yarn add tcomb-checkbox-switch

## Usage

After adding the package to your project, you can use it as follows:


```JS

import t from "tcomb-form";
import CheckboxSwitch from 'tcomb-checkbox-switch';

const Schema = t.struct({
    is_active: t.Boolean,
});

const Options = {
    is_active: {
      label: "Is Active",
      factory: CheckboxSwitch,
    },
};

```

This code creates a switch-style input for a boolean value named is_active.

## Features

If you wish to contribute to the development of this package, please apply to the project on GitHub.
If you encounter any issues or have suggestions related to this package, please contact us via the GitHub Issues section.