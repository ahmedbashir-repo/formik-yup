import React from "react";
import {ErrorMessage, useField } from "formik";

export const TextField = ({label, ...props}) => {
    const[field, meta] = useField(props);

    return(
        <div className="mb-2 form-group">
            <label htmlFor={field.name}>{label}</label>
            <input 
               
                className={`form-control shadow-none 
                ${
                    meta.touched && meta.error ? 'is-invalid':
                    (meta.touched && !meta.error ? 'is-valid':'')
                }`}
                autoComplete = "off"
                {...field}
                {...props}
                 />
            <ErrorMessage component="div" name={field.name} style={{'font-size':'0.7rem', 'color':'red'}} />
        </div>
    )
}