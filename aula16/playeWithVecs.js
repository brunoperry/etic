import Vector3D from "./Vector3DClass.js";
import { vec3 } from "./Vector3DModule.js";

export const playWithVecs = () => {
  /**
   * Using class
   */
  playWithClass();

  /**
   * Using functional
   */
  playWithModule();
};

const playWithClass = () => {
  const vecA = new Vector3D(23, 23, 23);
  const vecB = new Vector3D(21, 21, 21);
  const vecC = new Vector3D();

  vecA = vecA + vecB;

  vecA.add(vecB);
  console.log(Vector3D.addVecs(vecA, vecB));
};

const playWithModule = () => {
  const vecA = vec3();
  const vecB = vec3();
};
