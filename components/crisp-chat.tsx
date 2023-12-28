"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f3ee4cc2-9113-4100-a375-ec7704d78acd");
  }, []);

  return null;
};
