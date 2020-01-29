import * as React from 'react';
import { useEffect, useState } from 'react';

import Select, { ValueType, OptionsType, GroupedOptionsType } from 'react-select';
//@ts-ignore
import countryList from 'react-select-country-list';
//@ts-ignore
import InputNumber from 'react-input-number';

type OptionValue = { 
    value: string;
    label: string
};

const initialState: {
    options?: OptionsType<OptionValue> | GroupedOptionsType<OptionValue>;
    value: ValueType<OptionValue> | null;
} = {
    options: [],
    value: null,
};

const Form = () => {
    const [state, setState] = useState(initialState);
    const [num, setNum] = useState(0);
    useEffect(() => {
        const options = countryList().getData();
        setState({options, value: options[0]});

        return () => {};
      }, []);

    const changeHandler = (value: ValueType<OptionValue>) => {
        setState({ options: state.options, value });
    }

    return <>
        <Select
            options={state.options}
            value={state.value}
            onChange={changeHandler}
        />
         <InputNumber min={10} max={1000000} step={1} value={num} onChange={setNum} />
    </>;
}

export default Form;