import React from "react";
import { useRecoilState } from "recoil";
import { lengthState } from "../recoilState/selectors/name"

export default function LengthComponent() {
    const length = useRecoilState(lengthState);
    return (
        <h1 className="length">{length}</h1>
    );
}