import React, {useState} from "react";
import SuperInputText from "../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../n1-main/m1-ui/common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../n1-main/m1-ui/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../n1-main/m1-ui/common/c6-SuperRadio/SuperRadio";
import SuperRange from "../../n1-main/m1-ui/common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "../../n1-main/m1-ui/common/c8-SuperDoubleRange/SuperDoubleRange";

const TestSuperComponents = () => {
    const [spanValue, setSpanValue] = useState("это супер спан");
    const [valueDR1, setValueDR1] = useState(0)
    const [valueDR2, setValueDR2] = useState(100)

    return (
        <div>
            <div><SuperInputText placeholder={"это супер инпут"}/></div>
            <div><SuperButton onClick={()=> alert("Зачем нажимаешь на неё?")}>Это супер кнопка</SuperButton></div>
            <div><SuperCheckbox/></div>
            <div><SuperEditableSpan value={spanValue} onChangeText={setSpanValue}/></div>
            <div><SuperSelect options={[1,2,3]}/></div>
            <div><SuperRadio options={[1,2,3]}/></div>
            <div><SuperRange onChangeRange={setValueDR1}
                             value={valueDR1}/></div>
            <div><SuperDoubleRange value={[valueDR1,valueDR2]} onChangeRange={([value1, value2]) => {
                setValueDR1(value1)
                setValueDR2(value2)
            }}/></div>
        </div>
    );
};

export default TestSuperComponents;
