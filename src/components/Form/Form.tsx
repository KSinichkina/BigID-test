import * as React from 'react';
import { useEffect, useState } from 'react';

import Select, { ValueType, OptionsType, GroupedOptionsType } from 'react-select';
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
//@ts-ignore
import InputNumber from 'react-input-number';

export type OptionValue = { 
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
        const options = am4geodata_worldLow.features.map(({ properties }) => ({ value: properties.id, label: properties.name }));
        setState({options, value: options[0]});

        return () => {};
      }, []);

    const changeHandler = (value: ValueType<OptionValue>) => {
        setState({ options: state.options, value });
    }
    
    return <div className='form'>
        <Select
            options={state.options}
            value={state.value}
            onChange={changeHandler}
        />
         <InputNumber min={10} max={1000000} step={1} value={num} onChange={setNum} />
    </div>;
}

export default Form;