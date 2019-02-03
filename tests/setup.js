import { NativeModules } from "react-native";

NativeModules.ReactLocalization = {
  language: "en"
};

global.fetch = require("jest-fetch-mock");
