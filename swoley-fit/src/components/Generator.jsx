import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

function WorkoutModalContent({ items, handleMuscle, selectedMuscles }) {
  return (
    <div className="flex flex-col gap-4 py-4">
      {items.map((item, index) => {
        return (
          <button
            key={index}
            className={
              "hover:text-blue-400 duration-200 px-4" +
              (selectedMuscles.includes(item) ? " text-blue-500" : "")
            }
            onClick={() => handleMuscle(item)}
          >
            <p className="text-sm sm:text-base">{item.toUpperCase()}</p>
          </button>
        );
      })}
    </div>
  );
}

export default function Generator(props) {
  const {
    poison,
    setPoison,
    muscles,
    setMuscles,
    goal,
    setGoal,
    updateWorkout,
  } = props;
  const [showModal, setShowModal] = useState(false);
  function handleModal() {
    setShowModal(!showModal);
  }
  function handleMuscle(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((muscle) => muscle !== muscleGroup));
      return;
    }
    if (muscles.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }
    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 3) {
      setShowModal(false);
    }
  }
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      {/** Section 1 */}
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              key={typeIndex}
              className={
                "px-4 bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 hover:bg-blue-900" +
                (poison === type
                  ? " border-blue-600 bg-blue-900"
                  : " border-blue-200")
              }
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      {/** Section 2 */}
      <Header
        index={"02"}
        title={"Lock and targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="bg-slate-950 border border-blue-400 p-4 rounded-lg border-solid flex flex-col">
        <button className="relative px-4" onClick={handleModal}>
          <p>
            {muscles.length === 0
              ? "Select muscles groups"
              : muscles.join(" ").toUpperCase()}
          </p>
          <i className="fa-solid absolute top-1/2 -translate-y-1/2 right-3 fa-caret-down"></i>
        </button>
        {showModal && (
          <WorkoutModalContent
            items={
              poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
            }
            handleMuscle={handleMuscle}
            selectedMuscles={muscles}
          />
        )}
      </div>
      {/** Section 3 */}
      <Header
        index={"03"}
        title={"BEcome Juggernaut"}
        description={"Select your oltimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              key={schemeIndex}
              className={
                "px-4 bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 hover:bg-blue-900" +
                (goal === scheme
                  ? " border-blue-600 bg-blue-900"
                  : " border-blue-200")
              }
              onClick={() => {
                setGoal(scheme);
              }}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button callbackFunc={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
}
