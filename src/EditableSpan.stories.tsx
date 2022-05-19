import React from "react";
import {EditableSpan} from "./EditableSpan";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Editable Span Component',
    component: EditableSpan,
}

const changeCallback = action('Value was changed')


export const EditableSpanBaseExample = () => {
    return <>
        <EditableSpan value={'startValue'} onChange={changeCallback}/>
    </>
}