import React, { useState, useEffect } from "react";
import TestCollectionFirebase from "./components/TestCollectionFirebase";
import TestItemFirebase from "./components/TestItemFirebase";

export default function App() {
  return (
    <>
    <h1>TEST ITEM SOLO</h1>
    <TestItemFirebase/>

    <h1>TEST TODOS LOS ITEMS</h1>
    <TestCollectionFirebase />
    </>
  );
}