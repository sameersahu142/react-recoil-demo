import { selector } from "recoil";
import { stringState } from "../atoms/name";

export const lengthState = selector({
    key: "lengthState",
    get: ({ get }) => {
        const string = get(stringState);
        const lengthOfString = string.length;
        return lengthOfString;
    },
});