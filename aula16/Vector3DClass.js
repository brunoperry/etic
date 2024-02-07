export default class Vector3D {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  // override operator + (vec) {

  //   this.x = this.x + vec.x;
  //   this.y = this.x + vec.y;
  //   this.z = this.x + vec.z;
  // }

  // Addition
  add(vector) {
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;
    this.z = this.z + vector.z;
  }

  // Add 2 vectors
  static addVecs(vecA, vecB) {
    return new Vector3D(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
  }

  // Subtraction
  subtract(vector) {
    this.x = this.x - vector.x;
    this.y = this.y - vector.y;
    this.z = this.z - vector.z;
  }
  // Subtract 2 vectors
  static subtractVecs(vecA, vecB) {
    return new Vector3D(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z);
  }

  // Scalar multiplication
  multiplyScalar(scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
    this.z = this.z * scalar;
  }

  // Scalar multiplication with a vector
  static multiplyVecScalar(vector, scalar) {
    return new Vector3D(vector.x * scalar, vector.y * scalar, vector.z * scalar);
  }

  // Dot product
  dot(vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  // Dot product between 2 vectors
  static dotVecs(vecA, vecB) {
    return vecA.x * vecB.x + vecA.y * vecB.y + vecA.z * vecB.z;
  }

  // Cross product
  cross(vector) {
    return new Vector3D(
      this.y * vector.z - this.z * vector.y,
      this.z * vector.x - this.x * vector.z,
      this.x * vector.y - this.y * vector.x
    );
  }

  // Magnitude (length) of the vector
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  // Normalize the vector (make it unit length)
  normalize() {
    const mag = this.magnitude();
    if (mag === 0) return new Vector3D();
    return this.multiplyScalar(1 / mag);
  }

  // Distance to another vectors
  distanceTo(vector) {
    return this.subtract(vector).magnitude();
  }

  // Distance between two vectors
  static distanceBetween(vecA, vecB) {
    const out = Vector3D.subtractVecs(vecA, vecB);
    return out.magnitude();
  }
}