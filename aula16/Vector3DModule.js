 export const vec3 = (x,y,z) => {
    return {
      x: x || 0,
      y: y || 0,
      z: z || 0,
    };
}

 // Adds 2 vectors
export const addVecs = (vecA, vecB) => {
    return vec3(
        vecA.x + vecB.x,   
        vecA.y + vecB.y,
        vecA.z + vecB.z);
}

// Subtracts 2 vectors
export const subtractVecs = (vecA, vecB) => {
    return new vec3(
        vecA.x - vecB.x, 
        vecA.y - vecB.y, 
        vecA.z - vecB.z);
}

// Scalar multiplication between 2 vectors
export const multiplyScalar = (vec, scalar) => {
    return vec3(
        vec.x * scalar, 
        vec.y * scalar,
        vec.z * scalar
    );
}

// Dot product between 2 vectors
export const dot = (vecA, vecB) => {
    return vecA.x * vecB.x + vecA.y * vecB.y + vecA.z * vecB.z;
}

// Cross product
export const cross = (vecA, vecB) => {
    return vec3(
        vecA.y * vecB.z - vecA.z * vecB.y,
        vecA.z * vecB.x - vecA.x * vecB.z,
        vecA.x * vecB.y - vecA.y * vecB.x
    );
};

// Magnitude (length) of the vector
export const magnitude = (vec) => {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
}

// Normalize the vector (make it unit length)
export const normalize = (vec) => {
    const mag = magnitude(vec);
    if (mag === 0) return vec3();
    return multiplyScalar(vec, 1 / mag);
}

// Distance between two vectors
export const distanceBetween = (vecA, vecB) => {
    return magnitude(subtractVecs(vecA, vecB));
}