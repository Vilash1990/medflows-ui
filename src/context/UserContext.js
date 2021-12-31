import { createContext } from "react";

export const UserContext = createContext({
    name: "Kim Rieger",
    age: 38,
    dateOfBirth: "08/07/1983",
    physician: "Dr.Kevin Castor",
    gender: "Female",
    headshot: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp",
    insuranceInfo: {
        providerName: "Cigna PPO",
        policyNumber: "67651234",
        groupId: "0432",
        mrnNumber: "12345678",
    }
});