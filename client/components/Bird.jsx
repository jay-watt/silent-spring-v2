import * as THREE from 'three';
import { useRef, useEffect } from 'react';

function Bird({ size }) {
  const geometry = useRef(new THREE.BufferGeometry()).current;

  useEffect(() => {
    // Scale the vertices by the size
    const vertices = new Float32Array([
      5 * size, 0, 0,
      -5 * size, -2 * size, 1 * size,
      -5 * size, 0, 0,
      -5 * size, -2 * size, -1 * size,
      0, 2 * size, -6 * size,
      0, 2 * size, 6 * size,
      2 * size, 0, 0,
      -3 * size, 0, 0
    ]);

    const indices = [
      0, 2, 1,
      4, 7, 6,
      5, 6, 7
    ];

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
  }, [geometry, size]);

  return <primitive object={geometry} />;
}

export default Bird;
