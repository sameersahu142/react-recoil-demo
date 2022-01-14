import React from "react";
import { useRecoilState } from "recoil";
import { stringState } from "../recoilState/atoms/name";

export default function InputComponent() {

    const [string, setString] = useRecoilState(stringState);

    const handleChange = (e) => {
        setString(e.target.value)
    }

    return (
        <input
            type="text"
            placeholder="Enter a String"
            onChange={handleChange}
            value={string}
        />
    );
}