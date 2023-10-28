# tcomb-checkbox-switch

<div align="center">
    <img width="331" alt="Screenshot 2023-10-28 at 12 37 15" src="https://github.com/Frontekip/tcomb-checkbox-switch/assets/1306620/7e9977c1-4e25-4c96-8aa3-21f16b10ed6a">
</div>

**tcomb-checkbox-switch** is an addon package that transforms the standard checkbox in tcomb-form into a switch-style input.

## Installation

First, install the package in your project using the following command:

    npm install tcomb-checkbox-switch

or if you use yarn:

    yarn add tcomb-checkbox-switch

## Usage

After adding the package to your project, you can use it as follows:


```JS

import t from "tcomb-form";
import CheckboxSwitch from 'tcomb-checkbox-switch'; // <-- import package

const Schema = t.struct({
    is_active: t.Boolean,
});

const Options = {
    is_active: {
      label: "Is Active",
      factory: CheckboxSwitch, // <-- Add factory
    },
};

```

This code creates a switch-style input for a boolean value named `is_active`.

## Features

If you wish to contribute to the development of this package, please apply to the project on GitHub.
If you encounter any issues or have suggestions related to this package, please contact us via the GitHub Issues section.
