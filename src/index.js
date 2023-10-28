import React from 'react';
import t from "tcomb-form";
import Switch from "react-switch";

const Template = t.form.Form.templates.checkbox.clone({
  renderHelp({ help }) {
    if (help) {
      return <div className="help-block">{help}</div>;
    }

    return null;
  },

  renderCheckbox(locals) {
    const { label } = locals;

    return (
      <label
        style={{
          marginBottom: 0,
        }}
      >
        <p
          style={{
            marginBottom: 5,
          }}
        >
          {label}
        </p>
        <Switch
          checked={locals.value}
          onChange={(value) => {
            locals.onChange(value);
          }}
        />
      </label>
    );
  },
});

export default class Factory extends t.form.Component {
  getTemplate() {
    return Template;
  }
}
