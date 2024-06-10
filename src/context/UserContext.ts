"use client ";

import { IContext } from "@/utlis";
import { createContext, useState } from "react";

export const UserInfo = createContext<IContext>({
    id:null,
    setId:(val:any) => {}
})